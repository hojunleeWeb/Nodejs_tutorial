const mongoose = require("mongoose");
require("dotenv").config();

//async, await
const dbConnect = async () => {
  try {
    const connect = await mongoose.connect(process.env.DB_CONNECT);
    console.log("DB CONNECTED");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = dbConnect;
