const axios = require("axios");

module.exports = (req, res, next)=>{
    axios.get("http://localhost:5003/api/admin", {
        withCredentials:true,
        headers:{
            Authorization:`Bearer ${req.cookies.jwt}`
        }
    })
    .then(res=>{
        if(res.data.data){
            return next()
        }
    })
    .catch(err=>{
        return res.status(401).send("No cookies")
    })
}