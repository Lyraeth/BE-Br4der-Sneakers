require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

const { userRoutes } = require("./routes/userRoutes");
const { categoryRoutes } = require("./routes/categoryRoutes");
const { productRoutes } = require("./routes/productRoutes");
const { itemOrderRoutes } = require("./routes/itemOrderRoutes");
const { orderRoutes } = require("./routes/orderRoutes");
const { userAdminRoutes } = require("./routes/userAdminRoutes");

// Callback <> biar Req App express kepake
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// function untuk route asal
function handleErrorRoutes(req, res, next) {
  res.send("Oops! nothing here");
}

// Create response for success route
app.get("/", async (req, res) => {
  res.send("Hello There!");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is already running at ${PORT}`);
});

// userRoutes
app.use("/users", userRoutes);

// categoryRoutes
app.use("/category", categoryRoutes);

// productRoutes
app.use("/product", productRoutes);

// itemOrderRoutes
app.use("/itemOrder", itemOrderRoutes);

// OrderRoutes
app.use("/order", orderRoutes);

// userAdminRoutes
app.use("/userAdmin", userAdminRoutes);

// handleErrorRoute
app.use(handleErrorRoutes);
