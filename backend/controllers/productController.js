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

//@description  delete product based on id
//@route        DEL /api/products/:id
//@access       Private/Admin
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await ProductModel.findById(req.params.id);

  if (product) {
    await product.remove();

    res.json({
      message: "Product removed",
    });
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

//@description  create a produt
//@route        POST /api/products/
//@access       Private/Admin
const createProduct = asyncHandler(async (req, res) => {
  const product = new ProductModel({
    name: "Sample name",
    price: 0,
    user: req.user._id,
    image: "/images/sample.jpg",
    brand: "Sample brand",
    category: "Sample category",
    countInStock: 0,
    numReviews: 0,
    description: "Sample description",
  });

  const createdProduct = await product.save();

  res.status(201).json(createdProduct);
});

//@description  update a produt
//@route        PUT /api/products/:id
//@access       Private/Admin
const updateProduct = asyncHandler(async (req, res) => {
  const {
    name,
    price,
    description,
    image,
    brand,
    category,
    countInStock,
  } = req.body;

  const product = await ProductModel.findById(req.params.id);

  if (product) {
    product.name = name;
    product.price = price;
    product.description = description;
    product.image = image;
    product.brand = brand;
    product.category = category;
    product.countInStock = countInStock;

    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } else {
    res.status(404);
    throw new Error("Product not found.");
  }
});

module.exports = {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
};
