require('dotenv').config()
const express = require("express");
const app = express()
const db = require("./Config/db")
const cors = require("cors");
const cookieParser = require('cookie-parser')
const bodyParser = require("body-parser");
const PORT = process.env.PORT

app.use(cors({
    origin:"http://localhost:3000",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials:true
}))

app.use(bodyParser());
app.use(bodyParser.urlencoded({ extended:false }))
app.use(cookieParser())

//Import the route
const HomesRouter = require("./Routes/HomesRouter");

//Use the routes
app.use(HomesRouter);

app.listen(PORT, function(err){
    if(err){
        console.log(err)
    }else{
        console.log(`User service is up on port ${PORT}`)
    }
})