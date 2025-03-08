let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let userSchema = new Schema({
  need: {
    type: String,
    enum: ["all", "brand", "website", "mobile"],
    required : true,
  },
  refered: {
    type: String,
    enum: ["yes", "no"],
    required : true,
  },
  stage: {
    type: String,
    enum: ["startup", "early stage", "established"],
    required : true,
  },
  fullname: {
    type: String,
    required : true,
  },
  email: {
    type: String,
    required : true,
  },
  location: {
    type: String,
    required : true,
  },
  company: {
    type: String,
    required : true,
  },
  textarey: {
    type: String,
    required : true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref : 'users',
  },
});

let MAINFORM = mongoose.model("main_form", userSchema);
module.exports = MAINFORM;
