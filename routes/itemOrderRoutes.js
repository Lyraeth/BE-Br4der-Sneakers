const express = require("express");
const { prisma } = require("../config/prisma");
const itemOrderRoutes = express.Router();

// itemOrder
itemOrderRoutes.get("/", async (req, res) => {
  const itemOrder = await prisma.itemOrder.findMany();
  res.status(200).send(itemOrder);
});

// Search itemOrder by id
itemOrderRoutes.get("/:id", async (req, res) => {
  const itemOrder = await prisma.itemOrder.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  if (!itemOrder)
    res.status(400).json({
      message: "itemOrder not found",
    });
  res.status(200).send(itemOrder);
});

// Create itemOrder
itemOrderRoutes.post("/", async (req, res) => {
  const { quantity, productId, orderId } = req.body;
  const newItemOrder = await prisma.itemOrder.create({
    data: {
      quantity: parseInt(quantity),
      productId: parseInt(productId),
      orderId: parseInt(orderId),
    },
  });
  res.status(201).json({
    message: "itemOrder has been created",
    data: newItemOrder,
  });
});

// Update itemOrder
itemOrderRoutes.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { quantity, productId, orderId } = req.body;
  const updateItemOrder = await prisma.itemOrder.update({
    where: {
      id: parseInt(id),
    },
    data: {
      quantity: quantity ? parseInt(quantity) : undefined,
      productId: productId ? parseInt(productId) : undefined,
      orderId: orderId ? parseInt(orderId) : undefined,
    },
  });
  res.status(200).json({
    message: `itemOrder with id: ${id} has been updated`,
    data: updateItemOrder,
  });
});

// Delete itemOrder
itemOrderRoutes.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deleteItemOrder = await prisma.itemOrder.delete({
    where: {
      id: parseInt(id),
    },
  });
  res.status(200).json({
    message: `itemOrder with id: ${id} has been deleted`,
  });
});

module.exports = { itemOrderRoutes };
