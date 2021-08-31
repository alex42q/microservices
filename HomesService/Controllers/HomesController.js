const HomesModel = require("../Models/HomesModel");
const CategoriesModel = require("../Models/CategoriesModel")
const axios = require("axios");

exports.postCreateNewHome = (req, res, next)=>{
    axios.get(`http://localhost:5002/api/category/${req.body.category}`)
    .then(category=>{
        if(category){
            axios.get("http://localhost:5003/api/admin", {
                withCredentials:true,
                headers:{
                    Authorization:`Bearer ${req.cookies.jwt}`
                }
            })
            .then(admin=>{
                if(admin.data.data){
                    const home = new HomesModel({
                        name:req.body.name,
                        description:req.body.description,
                        image:req.body.image,
                        categoryId:category.data.data._id,
                        userId:admin.data.data._id
                    })
                    HomesModel.create(home, function(err, result){
                        if(err){
                            console.log(err)
                        }else{
                            CategoriesModel.findOne({name:req.body.category})
                            .then(cat=>{
                                cat.homes.push(result._id);
                                cat.save()
                                return res.status(201).json({
                                    data:result
                                })
                            })
                            .catch(err=>{{
                                console.log(err)
                            }})
                            
                        }
                    })
                }
            })
            .catch(err=>{
                return res.status(401).send("No cookies")
            })
        }else{
            return res.status(404).send("No found!")
        }
    })
    .catch(err=>{
        console.log(err)
        return res.status(404).send("No category found!")
    })
}
