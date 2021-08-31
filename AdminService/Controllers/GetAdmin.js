const AdminModel = require("../Models/AdminModel");
const jwt = require("jwt-decode")

exports.getAdmin = (req, res, next)=>{
    const decoded = jwt(JSON.stringify(req.headers.authorization.replace("Bearer", "").slice(1)));
    AdminModel.findOne({email:decoded.email})
    .then(admin=>{
        if(admin){
            res.status(200).json({
                data:admin
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