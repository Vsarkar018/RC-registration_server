const mongoose = require("mongoose");

const FormDataSchema = new mongoose.Schema({
  name: { type: String, required: true },
  gender: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  branch: { type: String, required: true },
  studentNo: { type: String, required: true, unique: true },
  phoneNo: { type: String, required: true },
  domain: { type: String, required: true },
  society: String,
  projects: String,
  stay: { type: String, required: true },
});

module.exports = mongoose.model("data", FormDataSchema);
