// //routes/products.js

const express = require("express");
const router = express.Router();
const { getAllProducts, getAllProductsTesting } = require("../controllers/products");

router.route("/").get(getAllProducts); // This will map to "/api/products"
router.route("/testing").get(getAllProductsTesting); // This will map to "/api/products/testing"

module.exports = router;
