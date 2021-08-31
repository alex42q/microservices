const express = require("express");
const router = express.Router();

//Import the controller
const HomesController = require("../Controllers/HomesController");

//Middlewares
const isAdmin = require("../Middlewares/isAdmin")

//Create new homes
router.post("/api/homes/admin/create", isAdmin, HomesController.postCreateNewHome)

module.exports = router;