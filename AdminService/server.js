require('dotenv').config()
const express = require("express");
const app = express()
const db = require("./Config/db")
const cors = require("cors");
const session = require("express-session")
const bodyParser = require("body-parser");
const MongoDBStore = require("connect-mongodb-session")(session);
const cookieParser = require('cookie-parser')
const PORT = process.env.PORT

const store = new MongoDBStore({
    uri:process.env.DB,
    collection:"sessions"
})

app.use(session({
    secret:process.env.SECRET,
    resave:false,
    saveUninitialized:false,
    store:store,
    cookie:{maxAge: 3600000}
}))

app.use(cors({
    origin:["http://localhost:3000", "http://localhost:5002"],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials:true
}))

app.use(bodyParser());
app.use(bodyParser.urlencoded({ extended:false }))
app.use(cookieParser())

//Import the route
const AdminRouter = require("./Routes/CreateAdminRoute");
const AdminLoginRouter = require("./Routes/LoginAdminRoute");
const GetAdminRouter = require("./Routes/GetAdminRouter");

//Use the routes
app.use(AdminRouter);
app.use(AdminLoginRouter);
app.use(GetAdminRouter);

app.listen(PORT, function(err){
    if(err){
        console.log(err)
    }else{
        console.log(`User service is up on port ${PORT}`)
    }
})