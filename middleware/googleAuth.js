const GoogleStrategy = require("passport-google-oauth20").Strategy;
const dotenv = require("dotenv");
const passport = require("passport");
dotenv.config();

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, cb) => {
      // Di sini Anda akan menemukan atau membuat pengguna dalam basis data Anda
      cb(null, profile);
    }
  )
);

module.exports = passport; // Export passport
