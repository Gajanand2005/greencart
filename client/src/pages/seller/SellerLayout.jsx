import React from 'react'
import { useAppContext } from '../../context/Appcontext';
import { assets } from '../../assets/assets';
import { Outlet, Link, NavLink } from 'react-router-dom';
import toast from 'react-hot-toast';

const SellerLayout = () => {

    const{ axios, navigate}=useAppContext();


    

    const sidebarLinks = [
        { name: "Add Product", path: "/seller", icon: assets.add_icon },
        { name: "Product List", path: "/seller/product-list", icon: assets.product_list_icon },
        { name: "Order", path: "/seller/order", icon: assets.order_icon },
    ];

    const logout = async()=>{
       try {
        const {data}= await axios.get('/api/seller/logout')
        if(data.success){
            toast.success(data.message)
            navigate('/')
        }else{
            toast.error(data.message)
        }
       } catch (error) {
        toast.error(error.message)
       }
    }
  return (
       <>
            <div className="flex items-center justify-between px-4 md:px-8 border-b text-white border-gray-700 py-3 bg-black ">
                <Link to='/' >
                   <img src={assets.logo} alt="logo" className='cursor-pointer w-34 md:w-38'/>
                </Link>
                <div className="flex items-center gap-5 text-white">
                    <p>Hi! Admin</p>
                    <button onClick={logout} className='border rounded-full text-sm px-4 py-1'>Logout</button>
                </div>
            </div>
            <div className='flex'>
            <div className="md:w-64 w-16 border-r h-[95vh] text-white border-gray-700 pt-4 flex flex-col bg-black ">
                {sidebarLinks.map((item) => (
                    <NavLink to={item.path} key={item.name}end={item.path === '/seller'}
                        className={({isActive})=>`flex items-center py-3 px-4 gap-3
                            ${isActive ? "border-r-4 md:border-r-[6px] bg-indigo-500/10 border-indigo-500 text-indigo-500"
                                : "hover:bg-gray-800/90 border-white "
                            }`
                        }
                    >
                       <img src={item.icon} alt="" className='w-7 h-7'/>
                        <p className="md:block hidden text-center">{item.name}</p>
                    </NavLink>
                ))}
            </div>
            <Outlet/>
            </div>
        </>
  )
}

export default SellerLayout
