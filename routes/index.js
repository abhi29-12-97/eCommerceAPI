import express from "express";
import ProductController from "../controllers/productController.js";
const router = express.Router();

//displaying the products list at home page
router.get("/", ProductController.display);
//adding new product to list
router.post("/create", ProductController.create);
//route to delete particular product based on id
router.delete("/:id", ProductController.delete);
//updating product Quantity
router.post("/:id/update_quantity/?", ProductController.update);
export default router;
