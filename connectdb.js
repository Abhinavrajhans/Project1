const mongoose = require("mongoose");
const mongoURI = "mongodb://127.0.0.1:27017";

const connectToMongo = async () => {
  try {
    mongoose.connect(mongoURI);
    console.log("Connected to Mongo Successfully!");
  } catch (error) {
    console.log(error);
  }
};
module.exports = connectToMongo;