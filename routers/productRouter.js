const express = require('express');
const app = express();
const router = express.Router()
const productController = require('../controllers/productController');


router.route('/api/v1/product')
  .post(productController.createProduct)
  .get(productController.getAllProduct)


router.route('/api/v1/product/:id')
  .get(productController.getProductById)
  .put(productController.updateByid)

router.route('/api/v1/product/name/:productName')
  .get(productController.getSingleProduct)
  .put(productController.updateProductByName)
  .delete(productController.deletePoductByName)

module.exports = router;