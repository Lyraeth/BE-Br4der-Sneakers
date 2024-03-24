const express = require("express");
const {
    prisma
} = require("../config/prisma");
const orderRoutes = express.Router();

// GET ALL ORDER DATA
orderRoutes.get('/', async (req, res) => {
    const orders = await prisma.order.findMany();
    res.status(200).send(orders);
});

// GET ORDER DATA BY ID
orderRoutes.get('/:id', async (req, res) => {
    const order = await prisma.order.findUnique({
        where: {
            id: parseInt(req.params.id),
        }
    });

    if (!order) {
        return res.status(400).json({
            message: "Order data not found!",
        });
    }

    res.status(200).send(order);
});

// CREATE ORDER DATA
orderRoutes.post('/', async (req, res) => {
    const orderData = req.body;

    const order = await prisma.order.create({
        data: {
            statusOrder: orderData.statusOrder,
            totalOrder: orderData.totalOrder,
            orderBy: orderData.orderBy,
        },
    });
    res.status(200).json({
        data: order,
        message: "Order created, successfully!",
    });
});

// UPDATE ORDER DATA WITH SELECTED FIELDS
orderRoutes.patch('/:id', async (req, res) => {
    const orderData = req.body;

    const order = await prisma.order.update({
        where: {
            id: parseInt(req.params.id),
        },
        data: {
            statusOrder: orderData.statusOrder,
            totalOrder: orderData.totalOrder,
            orderBy: orderData.orderBy,
        }
    });

    res.status(200).json({
        data: order,
        message: "Order updated, successfully!",
    });
});

// DELETE ORDER DATA
orderRoutes.delete('/:id', async (req, res) => {
    const orderId = req.params.id;

    const order = await prisma.order.findUnique({
        where: {
            id: parseInt(orderId),
        },
    });

    if (!order) {
        return res.status(400).json({
            message: "Order data not found!",
        });
    }

    await prisma.order.delete({
        where: {
            id: parseInt(orderId),
        },
    });

    res.status(200).json({
        data: order,
        message: "Order data deleted, successfully!",
    });
});

module.exports = {
    orderRoutes
};