import express from "express";
import data from "./data.js";
import cors from "cors";
// npm install nodemon --save-dev for update the server when I have a change in the server code
// express is a function that called to return an object which is that express app
// res.send() -> send data to the frontend
const app = express();
app.use(cors());

app.get("/api/products", (req, res) => {
  return res.status(200).json({ products: data.products });
});
// backend api for returning product information based on the slug of the product
app.get("/api/products/slug/:slug", (req, res) => {
  const product = data.product.find((x) => x.slug === req.params.slug);
  // if product exist return the product
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Product Not Found" });
  }
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
