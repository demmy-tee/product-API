const mongoose = require('mongoose');
const { Schema } = mongoose;
const schema = new Schema(
  {
    productName: {
      type: String,
      minlength: 3,
      maxlenth: 50,
      required: true
    },
    description: {
      type: String,
      minlength: 20,
      required: true
    },
    price: {
      type: Number,
      required: true
    }
  }
);
const Product = mongoose.model('Product', schema);
exports.Product = Product;
exports.schema = schema;  

