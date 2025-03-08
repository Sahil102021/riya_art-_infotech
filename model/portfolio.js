let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let userSchema = new Schema({
  image: {
    type: String,
  },
  detaile: {
    type: String,
  },
  technology: {
    type: String,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
});

let PORTFOLIO = mongoose.model("portfolio", userSchema);
module.exports = PORTFOLIO;
