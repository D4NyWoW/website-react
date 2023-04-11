import express from "express";
import data from "./data.js";
// npm install nodemon --save-dev for update the server when I have a change in the server code
// express is a function that called to return an object which is that express app
// res.send() -> send data to the frontend
const app = express();

app.get('/api/products', (req, res) => {
    res.send(data.product);
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`serve at http://localhost:${port}`);
})