const mongoose = require("mongoose");

const CategoriesSchema = new mongoose.Schema({
    name:{
        type:String
    },
    description:{
        type:String
    },
    homes:[{
        type:mongoose.Schema.Types.ObjectId
    }]
})

const CategoriesModel = mongoose.model("categories", CategoriesSchema);

module.exports = CategoriesModel;