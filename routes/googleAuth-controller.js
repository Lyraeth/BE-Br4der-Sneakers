const express = require("express");
const passport = require("../middleware/googleAuth"); // Mengimpor passport, bukan googleController
const { prisma } = require("../config/prisma");
const googleController = express.Router();

googleController.use(passport.initialize());

googleController.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile"] })
);

googleController.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  (req, res) => {
    res.redirect("/loginGoogle");
  }
);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  prisma.user.findUnique({
    where: {
      id: parseInt(id),
    },
    function(err, user) {
      done(err, user);
    },
  });
});
module.exports = { googleController };
