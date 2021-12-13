const express = require("express");
const router = express.Router({mergeParams:true});


//routes
const nextOfKinController = require('../controller/nextOfkinController');


router.get("/users", nextOfKinController.all);
router.post("/users/:userId/create", nextOfKinController.create);
router.get("/users/:fisrt_name/nxtkin", nextOfKinController.find);
router.get("/users/:BVN/investments", nextOfKinController.getAllInvestments);

module.exports = router;