const express = require("express");
const userRoutes = express.Router();
const { prisma } = require("../config/prisma");

// Users
userRoutes.get("/", async (req, res) => {
  const users = await prisma.user.findMany();
  res.status(200).send(users);
});

// User by ID
userRoutes.get("/:id", async (req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      id: parseInt(req.params.id),
    },
  });
  if (!user)
    res.status(404).json({
      message: "User not found",
    });
  res.status(200).send(user);
});

module.exports = { userRoutes };
