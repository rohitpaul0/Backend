import mongoose from "mongoose";
const productSchema = mongoose.Schema(
  {
    description: {
      required: true,
      type: String,
    },
    name: {
      required: true,
      type: String,
    },
    productImage: {
      type: String,
    },
    price: {
      type: Number,
      default:0,
    },
    stock: {
      type: Number,
      deafult:0,
    },
    catagory:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Catagory',
        required:true,
        
    }
  },
  { timestamps: true }
);

export const Product = mongoose.model("Product", productSchema);
