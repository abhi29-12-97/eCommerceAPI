import express from "express";
const router = express.Router();
import ProductController from "../controllers/productController.js";
router.get("/", ProductController.display);
router.post("/create", ProductController.create);
router.delete("/:id", ProductController.delete);
router.post("/:id/update_quantity/?", ProductController.update);
export default router;
