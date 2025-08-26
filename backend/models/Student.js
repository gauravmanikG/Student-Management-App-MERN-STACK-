const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  class: { type: String, required: true },
  rollNo: { type: Number, required: true, unique: true },
});

module.exports = mongoose.model("grvcollection", studentSchema);
