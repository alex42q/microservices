const mongoose = require("mongoose");

mongoose.connect(process.env.DB);

const db = mongoose.connection;

db.on("error", (err)=>{console.log("Error with the database for user service")})
db.once("open", ()=>{console.log("Database is connected for user service")})
db.on("disconnected", ()=>{console.log("Database is disconnected for user service")})

module.exports = db;