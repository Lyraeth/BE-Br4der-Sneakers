const express = require("express");
const { prisma } = require("../config/prisma");
const orderRoutes = express.Router();

// GET ALL ORDER DATA
orderRoutes.get("/", async (req, res) => {
  const orders = await prisma.order.findMany();
  res.status(200).send(orders);
});

// GET ORDER DATA BY ID
orderRoutes.get("/:id", async (req, res) => {
  const order = await prisma.order.findUnique({
    where: {
      id: parseInt(req.params.id),
    },
  });

  if (!order) {
    return res.status(400).json({
      message: "Order data not found!",
    });
  }

  res.status(200).send(order);
});

// CREATE ORDER DATA
orderRoutes.post("/", async (req, res) => {
  const orderData = req.body;

  const createOrder = await prisma.order.create({
    data: {
      statusOrder: orderData.statusOrder,
      totalOrder: parseInt(orderData.totalOrder),
      orderBy: parseInt(orderData.orderBy),
    },
  });

  const createItemOrder = await prisma.itemOrder.create({
    data: {
      quantity: parseInt(orderData.quantity),
      productId: parseInt(orderData.productId),
      orderId: createOrder.id,
    },
  });

  res.status(200).json({
    data: createOrder,
    createItemOrder,
    message: "Order and itemOrder created, successfully!",
  });
});

// UPDATE ORDER DATA WITH SELECTED FIELDS
orderRoutes.patch("/:id", async (req, res) => {
  const orderData = req.body;

  const order = await prisma.order.update({
    where: {
      id: parseInt(req.params.id),
    },
    data: {
      statusOrder: orderData.statusOrder,
      totalOrder: orderData.totalOrder,
      orderBy: orderData.orderBy,
    },
  });

  res.status(200).json({
    data: order,
    message: "Order updated, successfully!",
  });
});

// DELETE ORDER DATA
orderRoutes.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await prisma.order.delete({
    where: {
      id: parseInt(id),
    },
  });
  res.status(200).json({
    message: `Order with id: ${id} has been deleted`,
  });
});

module.exports = {
  orderRoutes,
};
