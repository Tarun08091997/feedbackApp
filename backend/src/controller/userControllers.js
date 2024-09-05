const mongo = require("mongoose");
const UserModel = require('../database/model/userSchema')


exports.createUser = async(req,res,send) =>{
    try{
        const data = req.body;
        const user = await UserModel.create(data);
        if(!user){
            return res.status(404).json({
                success:false,
                message:"Could not create User"
            })
        }

        res.status(200).json({
            success:true,
            user
        })
    }catch(err){
        res.send(err);
    }

}