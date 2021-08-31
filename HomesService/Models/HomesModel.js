const mongoose = require("mongoose");

const HomesSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId
    },
    CategoryId:{
        type:mongoose.Schema.Types.ObjectId
    },
    image:{
        type:String
    },
    location:{
        type:String
    },
    name:{
        type:String
    }
})

const HomesModel = mongoose.model("homes", HomesSchema);

module.exports = HomesModel;