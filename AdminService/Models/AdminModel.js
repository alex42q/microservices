const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({
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
    }
}, {timestamps:true})

const AdminModel = mongoose.model("admins", AdminSchema);

module.exports = AdminModel;

