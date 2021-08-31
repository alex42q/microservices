const CategoriesModel = require("../Models/CategoriesModel");


exports.postCreateNewCategory = (req, res, next)=>{
    const category = new CategoriesModel({
        name:req.body.name,
        description:req.body.description
    })
    CategoriesModel.create(category, function(err, result){
        if(err){
            console.log(err)
        }else{
            res.status(201).json({
                data:result
            })
        }
    })
}