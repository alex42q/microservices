const express = require("express");
const router = express.Router();

//Import the controller
const RegisterController = require("../Controllers/RegisterController");

//Post register new user
router.post("/api/auth/register", RegisterController.postRegisterNewUser);

module.exports = router;
