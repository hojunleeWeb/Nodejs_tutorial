const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: [true, "please, write your phone number"],
    },
  },
  {
    timestamps: true,
  }
);

//스키마 -> 모델
//mongoose.model(모델명, 스키마명)
const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
