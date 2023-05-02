const express = require("express");
const {
  fetchAllProducts,
  createProduct,
  fetchProductsByCategory,
  getSingleProduct,
  deleteProduct,
  updateProduct,
  getcategoryItem,
  getAllProduct,

} = require("../controllers/ProductController");



const router = express.Router();
//fetch all product
router.get("/fetch", fetchAllProducts);
//get all product
router.get("/all",getAllProduct);
//create product
router.post("/create", createProduct);
//fetch by category
router.get("/fetch/:category", fetchProductsByCategory);
//update product
router.put("/:pid", updateProduct);
//delete product
router.delete("/:pid", deleteProduct);
//get product by id
router.get("/getproductbyId/:pid",getSingleProduct);
//get category wise 
router.get("/:category",getcategoryItem);

module.exports = router;