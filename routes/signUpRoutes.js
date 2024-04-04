const express = require("express");
const signUpRoutes = express.Router();
const { prisma } = require("../config/prisma");
const bcrypt = require("bcrypt");

// Create sign up user data into user table
signUpRoutes.post("/", async (req, res) => {
  const { name, email, password, phone, address, gender, profileImage } =
    req.body;

  if (!name || !email || !password)
    res.status(400).json({ message: "This field is required" });
  // Generate a salt
  const salt = await bcrypt.genSalt(10);

  // Hash the password with the salt
  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = await prisma.user.create({
    data: {
      name: name,
      email: email,
      password: hashedPassword,
    },
  });
  res.status(201).json({
    message: "User Created",
    data: newUser,
  });
});

module.exports = { signUpRoutes };
