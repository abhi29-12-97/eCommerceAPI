import express from "express";
const router = express.Router();
import ProductController from "../controllers/productController.js";
router.get("/", ProductController.display);
router.post("/create", ProductController.create);
export default router;
