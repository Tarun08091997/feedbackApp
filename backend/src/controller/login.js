const UserModel = require("../database/model/userSchema");
const { sendCookie } = require("../util/jwt");
exports.login = async (req,res,next)=>{
    try{
        const {userId , password} = req.body;

    if(!userId || !password){
        return res.status(500).json({
            success : false,
            message:"Please Enter user ID and Password"
        })
    }

    const user = await UserModel.findOne({"userId":userId}).select("+password");

    if(!user){
        return res.status(404).json({
            success : false,
            message:"Username or Password is wrong"
        })
    }

    const isLogin = await user.compare(password);

    if(!isLogin){
        return res.status(404).json({
            success : false,
            message:"Username or Password is wrong"
        })
    }
    await sendCookie(user , res);
    }
    catch(err){
        return res.status(500).json({
            success : false,
            message:err.message
        })
    }
    

}

exports.logout = async (req,res,next) =>{
    try{
        res.status(200).cookie(
            "token",
            {},
            {
                httpOnly:true,
                maxAge:0
            }
        ).json({
            success : true,
            message:" Log Out"
        })
    }catch(err){
        return res.status(500).json({
            success : false,
            message:err.message
        })
    }
}