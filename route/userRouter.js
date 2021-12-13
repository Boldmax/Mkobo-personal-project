const express = require("express");
const router = express.Router();


//routes
const UserController = require('../controller/UserController');


router.get("/users", UserController.all);
router.post("/users/create", UserController.create);
router.get("/user/", UserController.find);
router.post("/users/:_id/updatenextOfkin", UserController.updateUser);
router.get("/users/:_id/investments", UserController.getAllInvestments);

module.exports = router;