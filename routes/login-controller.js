const express = require("express");
const { prisma } = require("../config/prisma");
const loginController = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

loginController.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({
      where: { email: email },
    });

    if (!user)
      return res.status(401).send({ message: "Invalid email or password" });

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword)
      return res.status(401).send({ message: "Invalid email or password" });

    const token = jwt.sign(
      { id: user.id, email: user.email, name: user.name },
      process.env.JWT_SECRET
    );

    // Set cookie with token
    res.cookie(" ", token, { httpOnly: true, maxAge: 10000 }); // Expires in 10 detik
    res.send({ message: "Login successful" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send({ message: "Internal server error" });
  }
});

module.exports = { loginController };
