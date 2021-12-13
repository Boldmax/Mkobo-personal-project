const UserModel = require('../models/UserProfileSchema');
//const NextOfkinModel = require('../models/nextOfKin');
const jwt = require('jsonwebtoken');
require("dotenv").config()


let UserController = {
    find: (req, res) => {
        const authHeader = req.headers['authorization']
        const token = authHeader && authHeader.split(' ')[1]
        if (token == null) return res.sendStatus(401)
       // console.log(`indicate:${token}`)
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
            // console.log(err)
            if (err) return res.sendStatus(403)
            req.user = user;
            const mail = (user.name)
            UserModel.find({ email: mail })
                .then(resp => res.json(resp))
        })
    },
    all: async (req, res) => {
        let allUsers = await UserModel.find()
        res.json(allUsers);
    },
    create: (req, res) => {
        var newUser = new UserModel({
            BVN: req.body.BVN,
            fisrt_name: req.body.fisrt_name,
            last_name: req.body.last_name,
            gender: req.body.gender,
            email: req.body.email,
            date_of_birth: req.body.date_of_birth,
            address: req.body.address
        });
        newUser.save((err, user) => {
            if (err)
                res.status(400).send("There is an error while adding new user");
            else
                res.status(201).json(user);
        })
    },
    updateUser: async (req, res) => {
        const userUpdate = await UserModel.findOne(req.params);
        // console.log(userUpdate)
        userUpdate.nextOfKin = req.body;
        /* const updated = await UserModel.nextOfKin.push(req.body) */

        userUpdate.markModified('nextOfKin');
        await userUpdate.save()
        res.json(userUpdate);
    },
    getAllInvestments: async (req, res) => {
        let foundUser = await UserModel.find({ userId: req.params.userId }).populate("nextofkin");
        res.json(foundUser);
    }
}


module.exports = UserController;