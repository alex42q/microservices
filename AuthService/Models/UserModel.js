const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    firstname:{
        type:String
    },
    lastname:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    salt:{
        type:String
    },
    role:{
        type:String
    },
    
}, {timestamps:true})

const UserModel = mongoose.model("users", UserSchema);

module.exports = UserModel;
