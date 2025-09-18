
import {v2 as cloudinary} from "cloudinary"
import Product from "../models/Product.js"



//add Product :api/product/add
export const addProduct = async (req, res)=>{
    try {
        let productData = JSON.parse(req.body.productData)

        const images = req.files

        let imagesUrl = await Promise.all(
            images.map(async(item)=>{
                let result = await cloudinary.uploader.upload(item.path,{resource_type:'image'});
                return result.secure_url
            })
        )

        await Product.create({...productData,image: imagesUrl})
        res.JSON({success:true, message: "Product Added"})
    } catch (error) {
         console.log(error.message)
         res.JSON({success: false, message: error.message})
    }
}


//get product:/api/product/list
export const productList = async(req,res)=>{
    try {
        const product = await product.find({})
        res.JSON({success: true, products})
    } catch (error) {
          console.log(error.message)
         res.JSON({success: false, message: error.message})
    }
}


//get single product:/api/product/id 
export const productById = async(req,res)=>{
    try {
        const {id} = req.body
        const product = await Product.findById({})
        res.JSON({success: true , product})
    } catch (error) {
        console.log(error.message)
         res.JSON({success: false, message: error.message}) 
    }

}

//change product inStock :/api/product/stock
export const changeStock = async(req,res)=>{
    try {
        const {id, inStock} = req.body

        await Product.findByIdAndUpdate(id,{inStock})
          res.JSON({success: true , message:"Stock Updated"})

    } catch (error) {
        console.log(error.message)
         res.JSON({success: false, message: error.message}) 
    }

}