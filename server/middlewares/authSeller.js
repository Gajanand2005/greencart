import jwt from "jsonwebtoken";


const authSeller = async (req, res, next)=>{
    const{sellerToken} = req.cookies;
    
    if(!sellerToken){
        return res.json({success: false, massage: 'Not authorized'})
    }
    try {
        const tokenDecode = jwt.verify(sellerToken, process.env.JWT_SECRET)
        if(tokenDecode.email === process.env.SeLLER_EMAIL){
            next(); 

        }else{
            return res.json({success: false, message: 'Not authorized'});
        }
       
    } catch (error) {
        res.json({success: false, message: error.massage});
    }
}
export default authSeller;