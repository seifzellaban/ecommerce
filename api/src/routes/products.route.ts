import { Router } from "express";
import {
  listProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProduct,
} from "../controllers/products.controller";

const router = Router();

router.get("/v1/products", listProducts);
router.get("/v1/products/:id", getProduct);
router.post("/v1/products", createProduct);
router.put("/v1/products/:id", updateProduct);
router.delete("/v1/products/:id", deleteProduct);

export default router;
