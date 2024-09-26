const mongo = require("mongoose");
const bcrypt = require("bcrypt");
const jwt= require("jsonwebtoken");

const userSchema = new mongo.Schema({
    name:{
        type:String,
        required:[true,"Please give the User Name"],
        trim:true
    },
    userId:{
        type:String,
        required:[true,"Please give the User Id"],
        trim:true,
        unique:true
    },
    password:{
        type:String,
        required:[true,"Please give the password"],
        select:false
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
    suggestion_from_user:[
        {
            type:mongo.Schema.Types.Object,
            ref:"SuggestionModel"
        }
    
    ],
    suggestion_to_user:[
        {
            type:mongo.Schema.Types.Object,
            ref:"SuggestionModel"
        }
    
    ]
})

const encryptPass = async function(next){
    
    if(! this.isModified("password")){
        return next();
    }
    this.password = await bcrypt.hash(this.password,10);
    return next();
}

userSchema.pre("save",encryptPass);

userSchema.methods.compare = async function(password) {
    try {
        // Ensure 'this.password' is available and defined
        if (!this.password) {
            throw new Error('Hashed password not found');
        }

        // Compare the provided password with the hashed password
        const isMatch = await bcrypt.compare(password, this.password);
        return isMatch;
    } catch (err) {
        console.error("Error while comparing passwords:", err);
        return false;
    }
}

userSchema.methods.createToken = async function(){
    try{
        const payload = {id : this._id};
        const options = {
            expiresIn : process.env.TOKEN_EXPIRE || '1h'
        }
        if (!process.env.SECRETE_KEY) {
            throw new Error('Secret key is not defined');
        }

       const token =  await jwt.sign(payload , process.env.SECRETE_KEY , options);
       return token;

    }catch(err){
        console.log("Error while Creating Token \n" , err);
    }
}


module.exports = mongo.model('UserModel', userSchema);