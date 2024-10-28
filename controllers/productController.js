
const { Product } = require('../models/productModels');

// createProduct
exports.createProduct = async (req, res) => {
  try {
  const { productName, description, price } = req.body
    let product = new Product({
    productName,
    description,
    price
    })
    
  product = await product.save()
  res.json(product);
  
} catch (err) {
    console.error(err);
    res.status(400).json({ message: 'Error creating Product' });

}
}


// get all product 
exports.getAllProduct = async (req, res)=> {
try {
  const productName = await Product.find()
    .exec()
  res.json(productName)
} catch (err) {
  res.status(404).json({message: "error getting all users"})
  console.log(err);
}
} 

// get a single product by their name
exports.getSingleProduct = async (req, res) => {
  const { productName } = req.params
  if (!productName) {
    return res.status(400).json({ message: 'Please valid provide a name or id' });
  }
  try {
      const product = await Product.findOne({productName}).exec()
    if (!product) 
      return res.status(404).json({ message: 'Product not found' });
    res.json(product); 
  } catch (err) {
    console.log(err);
  }
}

//get a user by their id
exports.getProductById = async (req, res) => {
  const { id } = req.params
  console.log(id);
  
  if (!id)
    return res.status(400).json({ message: 'provide a valid id' });
  try {
    const product = await Product.findById(id).exec()
    if (!product)
      return res.status(404).json({ message: 'Product not found' });
    res.json(product)
  } catch (error) {
    console.error(error)
  }
}

//updateProduct
exports.updateProductByName = async (req, res) => { 
  try {
    
    const { productName } = req.params
    if (!productName)
      return res.status(400)
    .json({message: "enter a valid id"})
   const updatedProduct = req.body
  
    const product = await Product.findOneAndUpdate({ productName }, updatedProduct, { new: true })
      .exec();
    if (!product)
      return res.status(404)
    .json({message:"product not found"})
  res.json(product);
 } catch (error) {
   console.log(error);
   
   res.status(404)
     .json({ message: 'error updating the product' });
 }
}

//find by id and update
exports.updateByid = async(req, res) => {
  try {
    const product = await findByIdAndUpdate(req.params.id);
    res.json(product)
 } catch (err) {
res.json({message:'product with the given ID was not found'})
 }
}

// deleting a produuct 
exports.deletePoductByName = async (req, res) => {
  const { productName } = req.params;
  if (!productName)
    return res.status(400)
      .json({ message: 'enter a valid product' })
  
  const product = Product.findOneAndDelete({ productName })
    .exec();
  try {
    if (product)
       return res.status(200)
  .json({ message: 'product deleted successfully' })
    
  } catch (error) {
    console.error(error);
    res.status(400)
    .json({ message: 'error deleting the product' }); 
  }
}
