const express = require('express');
const router = express.Router();
const User = require('../models/RegSchema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require("dotenv").config()

//const passport = require('passport');
//require("../passportConfig")(passport);


// login
router.get('/login', (req, res) => {
    User.find()
        .then(user => {
            res.json(user)
        })
});


//NEW USER REGISTRATION HANDLER
router.post('/register', (req, res) => {
    const { BVN, EmailAddress, Password, Password2 } = req.body;
    let errors = [];

    //Check required fields
    if (!BVN || !EmailAddress || !Password || !Password2) {
        errors.push({ msg: "please fill in all fields" });
    }
    //Check password match
    if (Password !== Password2) {
        errors.push({ msg: "Password do not match" });
    }

    //Check password length
    if (Password.length < 8) {
        errors.push({ msg: "Password should be at least 8 character" });
    }

    if (errors.length > 0) {
        res.json({ msg: errors[0].msg })
    } else {
        //  validation passed
        User.findOne({ EmailAddress: EmailAddress })
            .then(user => {
                if (user) {

                    // user exists
                    res.json({ error: "user exists" })
                } else {
                    const newUser = new User({
                        BVN,
                        EmailAddress,
                        Password
                    });

                    // hash password
                    bcrypt.genSalt(10, (err, salt) =>
                        bcrypt.hash(newUser.Password, salt, (err, hash) => {
                            if (err) throw err;

                            // set password to hashedName
                            newUser.Password = hash;
                            newUser.save()
                                .then(user => {
                                    res.json({
                                        success_msg: 'You are now registered, kindly log in',
                                        user
                                    })
                                })
                                .catch(err => console.log(err))
                        }))

                }
            })
    }
});

//NEW USER LOGIN HANDLER

router.post('/login', (req, res) => {
    // console.log(req.body)
    User.findOne({ EmailAddress: req.body.EmailAddress })
        .then((user) => {
            if (!user) {
                return ({ msg: 'email is not registerd here' });
            } else {
                bcrypt.compare(req.body.Password, user.Password, (err, isMatch) => {
                    if (err) return res.json({ msg: 'password incorrect' });
                    if (isMatch) {
                        const username = user.EmailAddress
                        const userMail = { name: username }
                        const accessToken = jwt.sign(userMail, process.env.ACCESS_TOKEN_SECRET)
                        res.json({ accessToken: accessToken })
                    } else {
                        return res.json({ msg: 'password incorrect' });
                    }
                })
            }
        })
});

//NEW USER LOG-OUT HANDLER

router.get('/logout', (req, res) => {
    req.logout();
})

// Token Authentication
router.get('/posts', authenticateToken, (req, res) => {
    const email = req.user.name;
    User.find({ EmailAddress: email })
        .then(resp => {
            if (resp == null) {
                res.json({ mgs: "No record found" })
            }
            res.json(resp);
        }
        )
})

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401)
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        console.log(err)
        if (err) return res.sendStatus(403)
        req.user = user
        next()
    })
}

module.exports = router;

