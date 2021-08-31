const mongoose = require("mongoose");

mongoose.connect(process.env.DB);

const db = mongoose.connection;

db.on("error", (err)=>{console.log("Error with the database for authentication service")})
db.once("open", ()=>{console.log("Database is connected for authentication service")})
db.on("disconnected", ()=>{console.log("Database is disconnected for authentication service")})

module.exports = db;