const express = require("express");
const { prisma } = require("../config/prisma");
const productRoutes = express.Router();
const cloudinary = require("../utils/cloudinary");
const upload = require("../middleware/multer");

// GET ALL PRODUCTS
productRoutes.get("/", async (req, res) => {
  const products = await prisma.product.findMany();
  res.status(200).send(products);
});

// GET ALL PRODUCTS BY RESULT INPUT
productRoutes.get("/results=:limit", async (req, res) => {
  // Ambil nilai jumlah data yang ingin ditampilkan dari query parameter
  const limit = parseInt(req.params.limit);

  // Pastikan limit yang diberikan adalah angka yang valid
  if (isNaN(limit) || limit <= 0) {
    return res.status(400).send("Limit harus berupa angka positif");
  }

  // Gunakan metode findFirst dari Prisma untuk membatasi jumlah data yang ditampilkan
  const products = await prisma.product.findMany({
    take: limit, // Ambil hanya sejumlah data sesuai dengan limit yang diberikan
  });

  res.status(200).send(products);
});

// GET ALL PRODUCTS BY CategoryId
productRoutes.get("/categoryId=:categoryId", async (req, res) => {
  const categoryId = req.params.categoryId;

  const product = await prisma.product.findMany({
    where: {
      categoryId: parseInt(categoryId),
    },
  });

  res.status(200).send(product);
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
productRoutes.post("/", upload.single("imageUrl"), async (req, res) => {
  try {
    const { name, desc, price, stock, categoryId } = req.body;

    const image = await cloudinary.uploader.upload(req.file.path);

    const product = await prisma.product.create({
      data: {
        name: name,
        desc: desc,
        price: parseInt(price),
        stock: parseInt(stock),
        imageUrl: image.secure_url,
        categoryId: parseInt(categoryId),
      },
    });

    res.status(200).json({
      data: product,
      messasge: "Product data created, successfully!",
    });
  } catch (err) {
    res.status(400).json({
      err: "Error create product data or some fields are missing!",
    });
  }
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
