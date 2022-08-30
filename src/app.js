const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://admin:Fiap%402022@clusterfiap.uyj4sie.mongodb.net/categoria-produto"
);

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, x-access-token"
  );
  next();
});

require("./models/category-product");

const productRouter = require("./routes/category-product-route");

const index = require("./routes/index");

app.use("/", index);
app.use("/category-products", productRouter);

module.exports = app;
