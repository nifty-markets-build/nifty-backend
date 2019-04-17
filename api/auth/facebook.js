const passport = require("passport");
const FacebookStrategy = require("passport-facebook").Strategy;
const db = require("../../database/dbConfig.js");

passport.use(
  new FacebookStrategy(
    {
      clientID: 162206191387607,
      clientSecret: "def2f3f1293a76aaaf785dd354c4f9ff",
      callbackURL: "http://localhost:5000/auth/facebook/callback",
      profileFields: ["id", "emails", "name"],
    },
    async function(accessToken, refreshToken, profile, done) {
      try {
        const user = await db("users")
          .where({ userId: profile.id })
          .first();
        if (user) {
          return done(null, user);
        }
      } catch (error) {
        if (error) return done(error, false);
      }
    },
  ),
);
