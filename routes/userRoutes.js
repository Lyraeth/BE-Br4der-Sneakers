const express = require("express");
const userRoutes = express.Router();
const { prisma } = require("../config/prisma");
const bcrypt = require("bcrypt");

// Users
userRoutes.get("/", async (req, res) => {
  const users = await prisma.user.findMany();
  res.status(200).send(users);
});

// Search user by Id
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

// Create Users
userRoutes.post("/", async (req, res) => {
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
      phone: parseInt(phone),
      address: address,
      gender: gender,
      profileImage: profileImage,
    },
  });
  res.status(201).json({
    message: "User Created",
    data: newUser,
  });
});

// Update Users
userRoutes.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, email, password, phone, address, gender, profileImage } =
    req.body;

  // Hash password only if a new password is provided
  let hashedPassword;
  if (password) {
    const salt = await bcrypt.genSalt(10);
    hashedPassword = await bcrypt.hash(password, salt);
  }

  const updateUser = await prisma.user.update({
    where: { id: parseInt(id) },
    data: {
      name: name ? name : undefined,
      email: email ? email : undefined,
      password: hashedPassword,
      phone: phone ? parseInt(phone) : undefined,
      address: address ? address : undefined,
      gender: gender ? gender : undefined,
      profileImage: profileImage ? profileImage : undefined,
    },
  });

  res.status(200).json({
    message: `Users with id: ${id} is updated`,
    data: updateUser,
  });
});

// Delete Users
userRoutes.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await prisma.user.delete({
    where: {
      id: parseInt(id),
    },
  });
  res.status(200).json({
    message: `Users with id: ${id} has been deleted`,
  });
});
module.exports = { userRoutes };
