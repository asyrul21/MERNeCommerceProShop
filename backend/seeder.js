const mongoose = require("mongoose");
const dotenv = require("dotenv");
const users = require("./data/users");
const product = require("./data/products");

// models
const UserModel = require("./models/userModel");
const ProductModel = require("./models/productModel");
const OrderModel = require("./models/orderModel");

const connectDB = require("./config/db");
const User = require("./models/userModel");
dotenv.config();
connectDB();

const importData = async () => {
  try {
    await OrderModel.deleteMany();
    await ProductModel.deleteMany();
    await UserModel.deleteMany();

    const createdUsers = await UserModel.insertMany(users);
    const adminUser = createdUsers[0]._id;

    const sampleProducts = product.map((prod) => ({
      ...prod,
      user: adminUser,
    }));
    await ProductModel.insertMany(sampleProducts);
    console.log("Data imported successfully");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await OrderModel.deleteMany();
    await ProductModel.deleteMany();
    await UserModel.deleteMany();

    console.log("Data destroyed");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

// getting CLI arg
if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
