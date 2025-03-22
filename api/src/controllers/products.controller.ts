import type { Request, Response } from "express";
import db from "../db/index";
import { products } from "../db/schema";
import { eq } from "drizzle-orm";

export async function listProducts(req: Request, res: Response) {
  try {
    const productsList = await db.select().from(products);
    res.status(200).json({ message: "Products listed", data: productsList });
  } catch (error) {
    res.status(500).json({ message: "Error listing products", error });
  }
}

export async function createProduct(req: Request, res: Response) {
  try {
    const [product] = await db.insert(products).values(req.body).returning();
    res.status(201).json({ message: "Product created", data: product });
  } catch (error) {
    res.status(500).json({ message: "Error creating product", error });
  }
}

export async function updateProduct(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const [product] = await db
      .update(products)
      .set(req.body)
      .where(eq(products.id, Number(id)))
      .returning();
    if (!product) {
      res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product updated", data: product });
  } catch (error) {
    res.status(500).json({ message: "Error updating product", error });
  }
}

export async function deleteProduct(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const [product] = await db
      .delete(products)
      .where(eq(products.id, Number(id)))
      .returning();
    if (!product) {
      res.status(404).json({ message: "Product not found" });
    }
    res.status(202).json({ message: "Product deleted", data: product });
  } catch (error) {
    res.status(500).json({ message: "Error deleting product", error });
  }
}

export async function getProduct(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const [product] = await db
      .select()
      .from(products)
      .where(eq(products.id, Number(id)));
    if (!product) {
      res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product retrieved", data: product });
  } catch (error) {
    res.status(500).json({ message: "Error retrieving product", error });
  }
}
