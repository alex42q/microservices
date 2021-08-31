const AdminModel = require("../Models/AdminModel");
const bcrypt = require("bcryptjs");

exports.postCreateNewAdmin = (req, res, next)=>{
    bcrypt.genSalt(12, function(err, salt){
        if(err){
            console.log(err)
        }else{
            bcrypt.hash(req.body.password, salt, function(err, hash){
                if(err){
                    console.log(err)
                }else{
                    const admin = new AdminModel({
                        email:req.body.email,
                        password:hash,
                        salt:salt,
                        role:process.env.ADMINROLE
                    })
                    AdminModel.create(admin, function(err, result){
                        if(err){
                            console.log(err)
                        }else{
                            res.status(201).json({
                                data:result
                            })
                        }
                    })
                }
            })
        }
    })
}