const UserModel = require("../Models/UserModel");
const bcrypt = require("bcryptjs");

exports.postRegisterNewUser = (req, res, next)=>{
    bcrypt.genSalt(10, function(err, salt){
        if(err){
            console.log(err)
        }else{
            bcrypt.hash(req.body.password, salt, function(err, hash){
                if(err){
                    console.log(err)
                }else{
                    const user = new UserModel({
                        firstname:req.body.firstname,
                        lastname:req.body.lastname,
                        email:req.body.email,
                        password:hash,
                        salt:salt,
                        role:process.env.USERROLE
                    })
                    UserModel.create(user, function(err, result){
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