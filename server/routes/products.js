const express = require("express");
const router = express.Router();
const { products } = require("../models");

router.get("/", async (req, res) => {
  // res.json("hello world!products");
  const listOfProducts = await products.findAll();
  res.json(listOfProducts);
});

//Route to get a product by ID//api test success in frontend and backend
router.get("/:productId", async (req, res) => {
  const product_id = req.params.productId;

  try {
    const product = await products.findByPk(product_id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(product);
  } catch (error) {
    console.error("Error fetching product:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.get("/owner/:owner_id", async (req, res) => {
  const owner_id = req.params.owner_id;

  try {
    const product = await products.findOne({
      where: {
        owner_id: owner_id,
      },
      order: [["product_id", "DESC"]],
    });
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(product);
  } catch (error) {
    console.error("Error fetching product:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.post("/", async (req, res) => {
  const product = req.body;
  await products.create(product);
  res.json(product);
}); //This is for frontend

router.put("/:productId", async (req, res) => {
  const productId = req.params.productId;

  try {
    const product = await products.findByPk(productId);
    if (!product) {
      return res.status(404).json({ message: "Poduct not found" });
    }

    // Update product fields based on the request body
    await product.update(req.body);

    res.json({ message: "Product updated successfully" });
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.delete("/:productId", async (req, res) => {
  const productId = req.params.productId;

  try {
    const product = await products.findByPk(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Delete the product
    await product.destroy();

    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

//for userDetails.js
router.get("/userDetail/:userId", async (req, res) => {
  const userId = req.params.userId;

  try {
    const userProducts = await products.findAll({
      where: {
        owner_id: userId,
      },
    });

    if (!userProducts || userProducts.length === 0) {
      return res.status(404).json({ message: "User's products not found" });
    }

    res.json(userProducts);
  } catch (error) {
    console.error("Error fetching user's products:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});
module.exports = router;
