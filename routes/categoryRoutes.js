const express = require("express");
const {
  prisma
} = require("../config/prisma");
const categoryRoutes = express.Router();

// GET ALL CATEGORIES
categoryRoutes.get("/", async (req, res) => {
  const categories = await prisma.category.findMany();
  res.status(200).send(categories);
});

// GET CATEGORY BY ID
categoryRoutes.get("/:id", async (req, res) => {
  const category = await prisma.category.findUnique({
    where: {
      id: parseInt(req.params.id),
    },
  });

  if (!category) {
    req.status(400).jason({
      message: "category not found!",
    });
  };

  res.status(200).send(category);
});

// CREATE NEW CATEGORY
categoryRoutes.post("/", async (req, res) => {
  const categoryData = req.body;
  if (!categoryData.name) {
    return res.status(400).send("some fields are missing!");
  }

  const category = await prisma.category.create({
    data: {
      name: categoryData.name,
    },
  });
  res.status(200).json({
    data: category,
    message: "Category created, successfully!",
  });
});

// UPDATE CATEGORY
categoryRoutes.put("/:id", async (req, res) => {
  const categoryData = req.body;

  const category = await prisma.category.update({
    where: {
      id: parseInt(req.params.id),
    },
    data: {
      name: categoryData.name,
    },
  });

  res.status(200).json({
    data: category,
    message: "Category updated successfully!",
  });
});

// UPDATE CATEGORY WITH SELECTED FIELDS
categoryRoutes.patch("/:id", async (req, res) => {
  const categoryData = req.body;

  const category = await prisma.category.update({
    where: {
      id: parseInt(req.params.id),
    },
    data: {
      name: categoryData.name,
    },
  });

  res.status(200).json({
    data: category,
    message: "Category updated successfully!",
  });
});

// DELETE CATEGORY BY ID
categoryRoutes.delete("/:id", async (req, res) => {
  const categoryId = req.params.id;

  const category = await prisma.category.findUnique({
    where: {
      id: parseInt(categoryId),
    },
  });

  if (!category) {
    return res.status(400).json({
      message: "Category data not found!",
    });
  }

  await prisma.category.delete({
    where: {
      id: parseInt(categoryId),
    },
  });

  res.status(200).json({
    data: category,
    message: "category deleted successfully!",
  });
});

module.exports = {
  categoryRoutes,
};