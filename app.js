const express = require('express');
const app = express();
const productRouter = require('./routers/productRouter');
const dotenv = require('dotenv');
const { default: mongoose } = require('mongoose');
dotenv.config();

const dbURI = process.env.MONGODB_URI
mongoose.connect(dbURI)
  .then(() => console.log('connected to the data base')
  )
  .catch((err) =>console.error(err)
  )
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(productRouter);









const port = process.env.PORT
app.listen(port, () => {
  console.log(`listening on port ${port}`);
  
})