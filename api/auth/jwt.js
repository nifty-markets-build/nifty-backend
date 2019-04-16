const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const db = require('../../database/dbConfig.js');


passport.use(new JwtStrategy(
    {
        secretOrKey: process.env.JWT_SECRET,
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        issuer: "niftymarkets",
        audience: "niftymarkets"
    },
    async function(jwt_payload, done) {
        try {
            const user = await db('users').where({ userId: parseInt(jwt_payload.sub) }).first();
            if (user) {
                return done(null, user)
            }  else {
                return done(null, false)
                // Where you want to create the new user
            }
        } catch (error) {
           return done(error, false) 
        }
    }
))


// done(errors, user, info)
// done(null, user)