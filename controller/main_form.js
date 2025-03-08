let MAINFORM = require("../model/main_form");
let Sendmaile = require("../middle/nodemailer");


exports.Create = async function (req, res) {
  try {
    // console.log(req.user);
    // console.log(req.body);
    req.body.user = req.user;

    let copyData = await MAINFORM.create(req.body);
    console.log(req.body.email);
    Sendmaile.sendEmail(req.body.email)
    res.status(200).json({
      data: copyData,
      status: "200 done",
      message: "Successfully Creat Data main form",
    });
  } catch (error) {
    res.status(404).json({
      status: "404 error",
      message: "not Create Data main form",
    });
  }
};

exports.Create1 = async function (req, res) {
  try {
    //console.log(req.body);
    let copyData = await MAINFORM.create(req.body);
    console.log(req.body.email);
    Sendmaile.sendEmail(req.body.email)
    res.status(200).json({
      data: copyData,
      status: "200 done",
      message: "Successfully Creat Data main form",
    });
  } catch (error) {
    res.status(404).json({
      status: "404 error",
      message: "not Create Data main form",
    });
  }
};


exports.Read = async function (req, res) {
  try {
    let copyData = await MAINFORM.find({ user: req.user });

    res.status(200).json({
      data: copyData,
      status: "200 ready data",
      message: "successfully redy data",
    });
  } catch (error) {
    res.status(404).json({
      status: "404 error",
      message: "not read data json",
    });
  }
};

exports.Read1 = async function (req, res) {
  try {
    let copyData = await MAINFORM.find();

    res.status(200).json({
      data: copyData,
      status: "200 ready data",
      message: "successfully redy data",
    });
  } catch (error) {
    res.status(404).json({
      status: "404 error",
      message: "not read data json",
    });
  }
};


exports.Delete = async function (req, res) {
  try {
    let id = req.params.id;
    let copyData = await MAINFORM.findByIdAndDelete({
      _id: id,
      user: req.user,
    });
    console.log(copyData);
    res.status(200).json({
      status: "200 ready data",
      message: "successfully Delete data",
    });
  } catch (error) {
    res.status(404).json({
      status: "404 error",
      message: "not Delete data json",
    });
  }
};


exports.Update = async function (req, res) {
  try {
    let id = req.params.id;
    let copyData = await MAINFORM.findByIdAndUpdate(
      { _id: id, user: req.user }, req.body,
      { new: true }
    );
    console.log("update => ",copyData);
    res.status(200).json({
      data: copyData,
      status: "200 ready data",
      message: "successfully Update data",
    });
  } catch (error) {
    res.status(404).json({
      status: "404 error",
      message: "not Update data json",
    });
  }
};
