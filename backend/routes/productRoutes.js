import express from "express";
import AsyncHandler from "express-async-handler";
const router = express.Router();
import Product from "../models/productModel.js";

router.get(
  "/",
  AsyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products); // Use res.json instead of res.send to send the JSON response
  })
);

router.get(
  "/:id",
  AsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id); // Use Product.findById to find a product by ID
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  })
);

export default router;
