require('dotenv').config()
const express = require("express");
const app = express()
const db = require("./Config/db")
const cors = require("cors");

const bodyParser = require("body-parser");
const PORT = process.env.PORT

app.use(cors({
    origin:"http://localhost:3000",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials:true
}))

app.use(bodyParser());
app.use(bodyParser.urlencoded({ extended:false }))

//Import the route


//Use the routes


app.listen(PORT, function(err){
    if(err){
        console.log(err)
    }else{
        console.log(`User service is up on port ${PORT}`)
    }
})