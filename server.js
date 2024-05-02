require("dotenv").config();
const authenticateToken = require("./middleware/auth");
const cookieParser = require("cookie-parser");

const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// Route
const { userRoutes } = require("./routes/userRoutes");
const { categoryRoutes } = require("./routes/categoryRoutes");
const { productRoutes } = require("./routes/productRoutes");
const { itemOrderRoutes } = require("./routes/itemOrderRoutes");
const { orderRoutes } = require("./routes/orderRoutes");
const { userAdminRoutes } = require("./routes/userAdminRoutes");
const { signUpRoutes } = require("./routes/signUpRoutes");

// Controller
const { loginController } = require("./routes/login-controller");

// Callback <> biar Req App express kepake
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// function untuk route asal
function handleErrorRoutes(req, res, next) {
  res.send("Oops! nothing here");
}

app.get("/", async (req, res) => {
  res.send("Welcome to Our Shop!");
});

// Local auth Testing
app.get("/helloworld", async (req, res) => {
  res.sendFile(__dirname + "/web/index.html");
});

app.get("/login", async (req, res) => {
  res.sendFile(__dirname + "/web/login.html");
});

app.get("/halamanAuth", authenticateToken, async (req, res) => {
  res.sendFile(__dirname + "/web/halamanAuth.html");
});
// Local auth Testing

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

// signUpRoutes
app.use("/signup", signUpRoutes);

app.use("/", loginController);

// handleErrorRoute
app.use(handleErrorRoutes);
