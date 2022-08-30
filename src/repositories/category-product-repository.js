const mongoose = require("mongoose");
const Product = mongoose.model("Category-product");

exports.getProduct = async () => {
  const results = await Product.find({}, "title description _id active");
  return results;
};

exports.getProductById = async (id) => {
  const results = await Product.findOne({_id: id}, "title description _id active");
  return results;
};

exports.createProduct = async (data) => {
  let produto = Product(data);
  await produto.save();
}

exports.put = async (id, data) => {
  await Product.findByIdAndUpdate(id, {
    $set:{
      title: data.title,
      description: data.description,
      active: data.active
    }
  });
}

exports.deleteById = async (id) => {
  await Product.findByIdAndDelete(id);
}
