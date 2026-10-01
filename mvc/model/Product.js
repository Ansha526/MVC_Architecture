import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
  price: {
    type: Number,
  },
  imageUrl: {
    type: String,
  },
  description: {
    type: String
  },

});

const Product = mongoose.model("Product", productSchema);
export default Product;

