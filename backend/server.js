const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

// routes
const ProductRoutes = require("./routes/productRoutes");
const UserRoutes = require("./routes/userRoutes");

// middlewares
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

dotenv.config();
const app = express();

// body parser
app.use(express.json());

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
app.use("/api/users", UserRoutes);

// error middlewares
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
