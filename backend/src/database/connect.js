const mongo = require("mongoose");

exports.connectDatabase = () =>{
    mongo.connect("mongodb://localhost:27017/feedbackData")
    .then(()=>{
        console.log("Database is connected");
    })
    .catch((err)=>{
        console.log(err);
    })
}