const express = require('express')
const router = express.Router()
const product = require('../controllers/productsController')

router.post("/addproduct", product.addProduct);
router.get("/allproducts", product.allProducts);
router.get("/oneproduct/:id", product.oneProduct);
router.patch("/editproduct/:id", product.ProductInfoEdit);
router.delete("/deleteproduct/:id", product.deleteProduct);

module.exports = router


