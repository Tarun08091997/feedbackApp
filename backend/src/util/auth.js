const jwt= require("jsonwebtoken");
const UserModel = require("../database/model/userSchema")

exports.isAuthorised = function(...roles){
    return async(req,res,next)=>{
        const { token } = req.cookies;
        if(!token){
            return res.status(400).json({
                success:false,
                message:"Please login First"
            })
        }

        const { id } = jwt.verify(token , process.env.SECRETE_KEY);
        if(!id){
            return res.status(400).json({
                success:false,
                message:"Login Token is wrong"
            })
        }

        const user = await UserModel.findById(id);
        if(!user){
            return res.status(404).json({
                success:false,
                message:"User Not found"
            })
        }


        // check authroization
        if(!roles.includes(user.role)){
            return res.status(404).json({
                success:false,
                message:"User is not Authorised"
            })
        }
        
        req.user = user;
        next();
        
    }
}