let portfolio = require("../model/portfolio");
let cloudinary = require("./Configuration");


exports.Create = async function (req, res) {
  try {
    // console.log(req.file);
    let imgepath = await cloudinary.uploader.upload(req.file.path);
    // console.log(imgepath);
    req.body.image = imgepath.secure_url;
    req.body.user = req.user;
    let copyData = await portfolio.create(req.body);

    res.status(200).json({
      data: copyData,
      status: "200 ready data",
      message: "successfully portfolio create redy data",
    });
  } catch (error) {
    res.status(404).json({
      status: "404 error",
      message: "not portfolio Creat data json",
    });
  }
};



exports.Read = async function (req, res) {
    try {
      let copyData = await portfolio.find({ user: req.user });
  
      res.status(200).json({
        data: copyData,
        status: "200 portfolio ready data",
        message: "successfully portfolio redy data",
      });
    } catch (error) {
      res.status(404).json({
        status: "404 error",
        message: "not portfolio read data json",
      });
    }
  };


  exports.Delete = async function (req, res) {
    try {
      let id = req.params.id;
      let copyData = await portfolio.findByIdAndDelete({
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
      let imagePath = await cloudinary.uploader.upload(req.file.path);
      req.body.image  = imagePath.secure_url;
      let copyData = await portfolio.findByIdAndUpdate(
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
  
  