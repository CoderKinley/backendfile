const mongoose = require("mongoose");
const db_link = 'mongodb+srv://kinley123:kinley123@clusterkin.e8yfcag.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(db_link);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});