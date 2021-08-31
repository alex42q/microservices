const express = require("express");
const router = express.Router();

//Import categories controller
const CategoriesControllers = require("../Controllers/CreateCategories");

//Middlewares
const isAdmin = require("../Middlewares/isAdmin");


//Post create new category
router.post("/api/category/create",isAdmin, CategoriesControllers.postCreateNewCategory)

module.exports = router;