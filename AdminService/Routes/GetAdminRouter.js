const express = require("express");
const router = express.Router();

//Import controller
const GetAdminRouter = require("../Controllers/GetAdmin");

//Import middlewares
const isAuth = require("../Middlewares/isAuth");
const isAdmin = require("../Middlewares/isAdmin");
const isLoggedIn = require("../Middlewares/isLoggedIn")

//Post create new admin
router.get("/api/admin" ,isLoggedIn, isAdmin, isAuth, GetAdminRouter.getAdmin);

module.exports = router;