const express = require("express");
const router = express.Router();
const database = require('../models/SignupSchema');
const bcrypt = require('bcrypt');

// signUp

router.post("/signup", async (req, res) => {

const saltPassword= await bcrypt.genSalt(10)
const encryptedPassword = await bcrypt.hash(req.body.Password, saltPassword)

    const signUpUser = new database({
        BVN: req.body.BVN,
        EmailAddress: req.body.EmailAddress,
        Password: encryptedPassword
    })
    try {
        console.log(signUpUser)
        await signUpUser.save()
        res.status(201).json({ 
            status: "SUCCESS",
            message: "User info added successfully",
            data: signUpUser
         })
    }
    catch (error) {
        res.json(error)
    }
})


// signIn

router.post('/signin', async (req, res) => {

    const saltPassword= await bcrypt.genSalt(10)
    const encryptedPassword = await bcrypt.hash(req.body.Password, saltPassword)
    const signInUser = new database({
        EmailAddress: req.body.EmailAddress,
        Password: encryptedPassword
    })

    try {
        database.findOne({EmailAddress:req.body.EmailAddress})
        .then(result => {
            res.json({result})
        })
        
    } catch (error) {
        res.json(error)
    }
})


module.exports = router;