"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true, 
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  active: {
    type: Boolean,
    require: true,
    default: true,
  },
});

module.exports = mongoose.model("Category-product", schema);
