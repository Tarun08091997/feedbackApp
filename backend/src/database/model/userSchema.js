const mongo = require("mongoose");

const userSchema = new mongo.Schema({
    name:{
        type:String,
        required:[true,"Please give the User Name"],
        trim:true
    },
    userId:{
        type:String,
        required:[true,"Please give the User Id"],
        trim:true
    },
    password:{
        type:String,
        required:[true,"Please give the password"]
    },
    role:{
        type:String,
        required:[true,"Please give role to User"],
        enum:["user", "admin" , "superAdmin"],
        trim:true
    },
    university:{
        type:String,
        default:"CT University"
    },
    school:{
        type:String,
        required:[true,"Please give School of User"]
    },
    department:{
        type:String,
        required:[true,"Please give department of User"]
    },
    suggestion:[
        {
            type:mongo.Schema.Types.Object,
            ref:"SuggestionModel"
        }
    
    ]
})


module.exports = mongo.model('UserModel', userSchema);