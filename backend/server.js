const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const path = require("path");
const morgan = require("morgan");

// routes
const ProductRoutes = require("./routes/productRoutes");
const UserRoutes = require("./routes/userRoutes");
const OrderRoutes = require("./routes/orderRoutes");
const UploadRoutes = require("./routes/uploadRoutes");

// middlewares
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

dotenv.config();
const app = express();
// morgan
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// body parser
app.use(express.json());

connectDB();

// app.use((req, res, next) => {
//   // define middleware
//  next()
// });

// routes
app.use("/api/products", ProductRoutes);
app.use("/api/users", UserRoutes);
app.use("/api/orders", OrderRoutes);
app.use("/api/upload", UploadRoutes);

// paypal client id
app.get("/api/config/paypal", (req, res) =>
  res.send(process.env.PAYPAL_CLIENTID)
);

const folderpath = path.resolve();
// for production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(folderpath, "/frontend/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(folderpath, "frontend", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("API is running");
  });
}

// make upload folder static
app.use("/uploads", express.static(path.join(folderpath, "/uploads")));

// error middlewares
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
