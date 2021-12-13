const express = require("express");
const router = express.Router();


//routes
const accountController = require('../controller/accountController');


router.get("/users/", accountController.all);
router.post("/users/create", accountController.create);
router.get("/users/:BVN", accountController.find);
router.get("/users/:BVN/investments", accountController.getAllInvestments);

module.exports = router;