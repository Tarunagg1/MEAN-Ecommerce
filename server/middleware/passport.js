const passport = require('passport');
const LocalStrategy = require('passport-local');
const jwtStrategy = require('passport-jwt').Strategy;
const extractjwt = require('passport-jwt').ExtractJwt;


const config = require('../config/config');
const userController = require('../controllers/user.controller');

const localLogin = new LocalStrategy(
    {
        usernameField: 'email'
    },
    async (email, password, done) => {
        const user = userController.getUserByEmailPassword(email, password);
        return user ? done(null, user) : done(null, false, {
            error: 'Your login details are incorrect'
        });
    }
)

const jwtLogin = new jwtStrategy(
    {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: config.JWT_SECRET_KEY
    },
    async (payload, done) => {
        const user = await userController.getUserById(payload._id);
        return user ? done(null, user) : done(null, false, {
            error: 'Your login details are incorrect'
        });
    }
)

module.exports = passport.use(localLogin).use(jwtLogin);

