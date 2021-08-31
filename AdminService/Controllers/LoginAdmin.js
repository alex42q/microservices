const bcrypt = require("bcryptjs");
const AdminModel = require("../Models/AdminModel");
const jwt = require("jsonwebtoken");

exports.postLoginAdmin = (req, res, next)=>{
    AdminModel.findOne({email:req.body.email})
    .then(admin=>{
        if(admin){
            bcrypt.compare(req.body.password, admin.password, function(err, hash){
                if(err){
                    console.log(err)
                }else if(hash){
                    const token = jwt.sign({
                        email:admin.email,
                        role:admin.role,
                        adminId:admin._id
                    }, process.env.TOKEN, {expiresIn: "1h"})
                    req.session.jwt = token;
                    res.cookie('jwt', token)
                    res.status(200).json({
                        jwt:token
                    })
                }else{
                    res.status(401).json({
                        wrongPass:"Wrong pass"
                    })
                }
            })
        }else{
            res.status(404).json({
                noAdmin:"No admin found!"
            })
        }
    })
    .catch(err=>{
        console.log(err)
    })
}