const express = require("express");
const router = express.Router();

//Import controller
const LoginAdminRoute = require("../Controllers/LoginAdmin");

//Import middlewares
const isAuth = require("../Middlewares/isAuth");
const isAdmin = require("../Middlewares/isAdmin");
const isLoggedIn = require("../Middlewares/isLoggedIn")

//Post create new admin
router.post("/api/admin/login", LoginAdminRoute.postLoginAdmin);

module.exports = router;