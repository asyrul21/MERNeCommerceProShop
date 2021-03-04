const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

// routes
const ProductRoutes = require("./routes/productRoutes");

// middlewares
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

dotenv.config();
const app = express();

connectDB();

// app.use((req, res, next) => {
//   // define middleware
//  next()
// });

app.get("/", (req, res) => {
  res.send("API is running");
});

// routes
app.use("/api/products", ProductRoutes);

// error middlewares
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
