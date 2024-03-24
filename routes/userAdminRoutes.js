const express = require("express");
const userAdminRoutes = express.Router();
const { prisma } = require("../config/prisma");
const bcrypt = require("bcrypt");

// Users Admin
userAdminRoutes.get("/", async (req, res) => {
  const userAdmin = await prisma.userAdmin.findMany();
  res.status(200).send(userAdmin);
});

// Search userAdmin by Id
userAdminRoutes.get("/:id", async (req, res) => {
  const userAdmin = await prisma.userAdmin.findUnique({
    where: {
      id: parseInt(req.params.id),
    },
  });
  if (!userAdmin)
    res.status(404).json({
      message: "userAdmin not found",
    });
  res.status(200).send(userAdmin);
});

// Create Users
userAdminRoutes.post("/", async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password)
    res.status(400).json({ message: "This field is required" });
  // Generate a salt
  const salt = await bcrypt.genSalt(10);

  // Hash the password with the salt
  const hashedPassword = await bcrypt.hash(password, salt);

  const newUserAdmin = await prisma.userAdmin.create({
    data: {
      name: name ? name : undefined,
      email: email ? email : undefined,
      password: hashedPassword,
    },
  });
  res.status(201).json({
    message: "userAdmin Created",
    data: newUserAdmin,
  });
});

// Update Users
userAdminRoutes.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, email, password } = req.body;

  // Hash password only if a new password is provided
  let hashedPassword;
  if (password) {
    const salt = await bcrypt.genSalt(10);
    hashedPassword = await bcrypt.hash(password, salt);
  }

  const updateUserAdmin = await prisma.userAdmin.update({
    where: { id: parseInt(id) },
    data: {
      name: name ? name : undefined,
      email: email ? email : undefined,
      password: hashedPassword,
    },
  });

  res.status(200).json({
    message: `Users Admin with id: ${id} is updated`,
    data: updateUserAdmin,
  });
});

// Delete Users
userAdminRoutes.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await prisma.userAdmin.delete({
    where: {
      id: parseInt(id),
    },
  });
  res.status(200).json({
    message: `Users Admin with id: ${id} has been deleted`,
  });
});
module.exports = { userAdminRoutes };
