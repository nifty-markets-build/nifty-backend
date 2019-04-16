const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const db = require('../../database/dbConfig.js');

passport.use(new FacebookStrategy(
    {
        clientID: 2,
        clientSecret: "",
        callbackURL: 'http://localhost:5000/auth/facebook/callback',
        profileFields: ["id", "emails", "name"]
    },
    async function(accessToken, refreshToken, profile, done) {
        try {
            const user = await db('users').where({ userId: profile.id }).first();
            console.log('profile', profile);
            console.log('user', user)
            if (user) {
                return done(null, user)
            } else {
                const newUser = {
                    email: profile.emails[0].value,
                    firstName: profile.name.givenName,
                    lastName: profile.name.familyName,
                    username: profile.name.givenName + profile.name.familyName,

                }
            }
        } catch (error) {
            if (error) return done(error, false);    
        }        
    }
))