import { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { dummyProducts } from "../assets/assets";
import  toast  from "react-hot-toast";
import axios from 'axios';
export const AppContext = createContext();

axios.defaults.withCredentials = true;
axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;

export const AppContextProvider = ({ children }) => {

    const currency = import.meta.env.VITE_CURRENCY;
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [isSeller, setIsSeller] = useState(false);
    const [showUserLogin, setShowUserLogin] = useState(false);
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState({});
    const [searchQuery, setSearchQuery] = useState("");

        //Fetch seller status

        const fetchSeller = async()=>{
            try {
                const {data} = await axios.get('/api/seller/is-auth')
                if(data.success){
                    setIsSeller(true)
                }else{
                    setIsSeller(false)
                }
            } catch (error) {
                setIsSeller(false)
            }
        }


    //Fetch all products
    const fetchProducts = async()=>{
        try {
            const {data} = await axios.get('/api/product/list')
            if(data.success){
                setProducts(data.products)
            }else{
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    //add product to card
    const addToCart = (itemId)=>{
        let cartData = structuredClone(cartItems);
        if(cartData[itemId]){
            cartData[itemId] += 1;
        }else{
            cartData[itemId] = 1;
        }
        setCartItems(cartData);
       toast.success("Item added to cart");
    }

    //update cart item quantity

    const updateCartItem = (itemId, quantity)=>{
        let cartData = structuredClone(cartItems);
        cartData[itemId] = quantity;
        setCartItems(cartData);
        toast.success("Cart updated");
    }

    //remove product form cart

    const removeFromCart = (itemId)=>{
        let cartData = structuredClone(cartItems);
        if(cartData[itemId]){
          cartData[itemId] -= 1;
          if(cartData[itemId] === 0){
            delete cartData[itemId];
          }
        }
        toast.success("Item removed from cart");
        setCartItems(cartData);
    }
    
    useEffect(()=>{
        fetchProducts();
        fetchSeller();
        
    })

    //get card item
    const getCartCount = ()=>{
        let totalCount =0;
        for(const item in cartItems){
             totalCount += cartItems[item];
        }
        return totalCount;
    }
    //get cart total price
    const getCartAmount =()=>{
        let totalAmount =0;
        for(const item in cartItems){
            let itemInfo = products.find((product)=>product._id === item);
            if(itemInfo && cartItems[item]>0){
                totalAmount += itemInfo.offerPrice * cartItems[item];
            }
        }
        return Math.floor(totalAmount * 100)/100;
    }

    const value = { navigate, user, setUser, setIsSeller, isSeller, showUserLogin, setShowUserLogin, products ,currency, addToCart, updateCartItem, removeFromCart, cartItems , searchQuery, setSearchQuery, getCartAmount, getCartCount, axios, fetchProducts };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    return useContext(AppContext);
};
