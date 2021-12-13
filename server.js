const express = require("express");
const app = express();
const mongoose = require('mongoose');
const formRoutes = require('./route/RegRouter');
const userRoutes = require('./route/userRouter');
const nextOfkinRouter = require('./route/nextOfKinRouter');
const passportLocal = require("passport-local").Strategy;
const cookieParser = require('cookie-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');
//const flash = require('connect-flash');
/* const acountRouter = require('./route/accountRouter'); */
//const router = express.Router();
const session = require('express-session');
require("dotenv").config();

mongoose.Promise = global.Promise;


const passport = require("passport");


//Connect to db
const db = "mongodb://localhost/account";
mongoose.connect(db, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false })
    .then(() => console.log('Mongodb is Connected...'))
    .catch(err => console.log(err));


// body-parser
app.use(express.json());

// Express session
/* app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
})); */

// connect -flash
//app.use(flash());

//  Global var
/* app.use((req, res, next) => {
    res.locals.success_msg = req.flash("success_msg");
    res.locals.error_msg = req.flash("error_msg");
    next()
}); */

// connect Cors
app.use(cors());

app.use(
    session({
        secret: "secretcode",
        resave: false,
        saveUninitialized: true
    })
);
app.use(cookieParser("secretcode"));
require("./passportConfig")(passport);
app.use(passport.initialize());
app.use(passport.session());


//routes connected
app.use('/form', formRoutes);
app.use('/app', userRoutes);
app.use('/kin', nextOfkinRouter);
/* app.use('/account', acountRouter); */


// port connected
app.listen(process.env.PORT || 4000, () => console.log("server is running on 4000"));