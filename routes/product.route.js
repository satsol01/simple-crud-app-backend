const express = require('express');
const Product = require('../models/product.models')
const router = express.Router();
const {getProducts , getProduct , createProduct , updateProduct,deleteProduct} = require('../controllers/productcontrollers.js');


router.get('/',getProducts)

router.get("/:id",getProduct);

router.post('/', createProduct);

//update product
router.gut('/:id',updateProduct);

//delete product
router.delete('/:id',deleteProduct);

module.exports = router;