const express = require("express");
const router = express.Router();

//Import controller
const CreateAdmin = require("../Controllers/CreateAdmin");

//Import middlewares
const isAuth = require("../Middlewares/isAuth");
const isAdmin = require("../Middlewares/isAdmin");
const isLoggedIn = require("../Middlewares/isLoggedIn")

//Post create new admin
router.post("/api/admin/create",isLoggedIn, isAdmin, isAuth, CreateAdmin.postCreateNewAdmin);

module.exports = router;