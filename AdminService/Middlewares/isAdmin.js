const jwt = require("jwt-decode");

module.exports = (req, res, next)=>{
    const decoded = jwt(JSON.stringify(req.headers.authorization.replace("Bearer", "").slice(1)));
    if(decoded.role!==process.env.ADMINROLE) return res.status(401).send("Forbitten action!")
    next()
}