
//controller/products
const product = require("../model/product");
const Product = require("../model/product")
const getAllProducts = async (req, res) => {
    const product= await Product.find({})
    res.status(200).json({ product});
};

const getAllProductsTesting = async (req, res) => {
    res.status(200).json({product });
};

// Corrected export herep
module.exports = { getAllProducts, getAllProductsTesting };
