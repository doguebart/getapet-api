// conn.js
require("dotenv").config();

const mongoose = require("mongoose");
const mongodbUri = JSON.stringify(process.env.MONGODB_URI);

async function main() {
  await mongoose.connect(mongodbUri);

  console.log("Conectou ao mongoDb");
}

main().catch((err) => {
  console.log(err);
});

module.exports = mongoose;
