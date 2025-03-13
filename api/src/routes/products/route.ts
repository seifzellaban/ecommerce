import { Router } from "express";

const router = Router();

router.get("/v1/products", (req, res) => {
  res.send("Hello World!");
});

router.post("/v1/products", (req, res) => {
  res.send("New Product Created!");
});

export default router;
