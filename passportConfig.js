const LocalStrategy = require("passport-local").Strategy;
const passport = require("passport");
const bcrypt = require('bcrypt');
const User = require("./models/RegSchema");



const passportConfig = () => {
    passport.use(
        new LocalStrategy( (username, password, done) => {
            console.log('user is connected')
            User.findOne({ username: username })
                .then((user) => {
                    if (!user) {
                        return done(null, false, { msg: 'email is not registerd here' });
                    }

                    bcrypt.compare(password, user.password, (err, isMatch) => {
                        if (err) return done(err);
                        if (isMatch) {
                            return done(null, user);
                        } else {
                            return done(null, false, { msg: 'password incorrect' });
                        }
                    })
                })
        })
    );

    passport.serializeUser((user, cb) => {
        cb(null, user.id);
    });
    passport.deserializeUser((id, cb) => {
        User.findById(id, (err, user) => {
            cb(err, user)
        })
    })
};


module.exports = passportConfig;