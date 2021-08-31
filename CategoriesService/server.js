require('dotenv').config()
const express = require("express");
const app = express()
const db = require("./Config/db")
const cors = require("cors");
const cookieParser = require('cookie-parser')
const bodyParser = require("body-parser");
const session = require("express-session")
const MongoDBStore = require("connect-mongodb-session")(session);
const PORT = process.env.PORT


app.use(cors({
    origin:["http://localhost:3000", "http://localhost:5003"],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials:true
}))

app.use(bodyParser());
app.use(bodyParser.urlencoded({ extended:false }))
app.use(cookieParser())

//Import the route
const CategoriesRouter = require("./Routes/CreateCategoriesRouter");

//Use the routes
app.use(CategoriesRouter);

app.listen(PORT, function(err){
    if(err){
        console.log(err)
    }else{
        console.log(`User service is up on port ${PORT}`)
    }
})