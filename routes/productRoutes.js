const express = require("express");
const { prisma } = require("../config/prisma");
const productRoutes = express.Router();

// GET ALL PRODUCTS
productRoutes.get("/", async (req, res) => {
  const products = await prisma.product.findMany();
  res.status(200).send(products);
});

// GET PRODUCT BY ID
productRoutes.get("/:id", async (req, res) => {
  const product = await prisma.product.findUnique({
    where: {
      id: parseInt(req.params.id),
    },
  });

  if (!product) {
    return res.status(400).json({
      messasge: "Product not found!",
    });
  }

  res.status(200).send(product);
});

// CREATE NEW PRODUCT DATA
productRoutes.post("/", async (req, res) => {
  const productData = req.body;

  const product = await prisma.product.create({
    data: {
      name: productData.name,
      desc: productData.desc,
      price: productData.price,
      stock: productData.stock,
      imageUrl: productData.imageUrl,
      categoryId: productData.categoryId,
    },
  });

  res.status(200).json({
    data: product,
    messasge: "Product data created, successfully!",
  });
});

// UPDATE PRODUCT DATA
productRoutes.put("/:id", async (req, res) => {
  const productData = req.body;

  if (
    !(
      productData.name &&
      productData.desc &&
      productData.price &&
      productData.stock &&
      productData.imageUrl &&
      productData.categoryId
    )
  ) {
    return res.status(400).json({
      message: "Some fields are missing!",
    });
  }

  const product = await prisma.product.update({
    where: {
      id: parseInt(req.params.id),
    },
    data: {
      name: productData.name,
      desc: productData.desc,
      price: productData.price,
      stock: productData.stock,
      imageUrl: productData.imageUrl,
      categoryId: productData.categoryId,
    },
  });

  res.status(200).json({
    data: product,
    message: "Product updated successfully!",
  });
});

// UPDATE PRODUCT DATA WITH SELECTED FIELDS
productRoutes.patch("/:id", async (req, res) => {
  const productData = req.body;

  const product = await prisma.product.update({
    where: {
      id: parseInt(req.params.id),
    },
    data: {
      name: productData.name,
      desc: productData.desc,
      price: productData.price,
      stock: productData.stock,
      imageUrl: productData.imageUrl,
      categoryId: productData.categoryId,
    },
  });

  res.status(200).json({
    data: product,
    message: "Product updated successfully!",
  });
});

// DELETE PRODUCT DATA
productRoutes.delete("/:id", async (req, res) => {
  const productId = req.params.id;

  const product = await prisma.product.findUnique({
    where: {
      id: parseInt(productId),
    },
  });

  if (!product) {
    return res.status(400).json({
      message: "Product data not found!",
    });
  }

  await prisma.product.delete({
    where: {
      id: parseInt(productId),
    },
  });

  res.status(200).json({
    data: product,
    message: "Product deleted successfully!",
  });
});

module.exports = {
  productRoutes,
};
