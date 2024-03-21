require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

const { prisma } = require("./config/prisma");
const { userRoutes } = require("./routes/userRoutes");

// Callback <> biar Req App express kepake
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Create response for success route
app.get("/", async (req, res) => {
  res.send("Routes success");
});

app.all("*", async (req, res) => {
  res.json({
    message: "Routes you're looking is not found",
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is already running at ${PORT}`);
});

// userRoute
app.use("/users", userRoutes);
