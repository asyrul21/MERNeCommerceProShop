const ProductModel = require("../models/productModel");
const asyncHandler = require("express-async-handler");

//@description  Fetch all products
//@route        GET /api/products
//@access       Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await ProductModel.find({});
  res.json(products);
});

//@description  Fetch a single product based on id
//@route        GET /api/products/:id
//@access       Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await ProductModel.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

module.exports = {
  getProducts,
  getProductById,
};
