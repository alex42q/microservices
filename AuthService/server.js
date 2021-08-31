require('dotenv').config()
const express = require("express");
const app = express()
const db = require("./Config/db")
const cors = require("cors");
const session = require("express-session");
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
const RegisterRouter = require("./Routes/RegisterRouter");

//Use the routes
app.use(RegisterRouter);

app.listen(PORT, function(err){
    if(err){
        console.log(err)
    }else{
        console.log("Authservice is up on port 5000")
    }
})