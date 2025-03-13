import express, { json, urlencoded } from "express";
import productRouter from "./routes/products.route";

const port = 3000;
const app = express();
app.use(urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/products", productRouter);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

export default app;
