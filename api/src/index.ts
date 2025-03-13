import express from "express";
import productRouter from "./routes/products/route";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/products", productRouter);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

export default app;
