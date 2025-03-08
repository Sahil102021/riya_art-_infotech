let USER = require("../model/users");
let jwt = require("jsonwebtoken");
let bcrypt = require("bcrypt");
let sendEmail = require("../middle/nodemailer");
exports.Secure = async function (req, res, next) {
  try {
    let token = req.headers.authorization;
    if (!token) throw new Error("Plase Provide token !");

    let tokenVerify = await jwt.verify(token, "USER-TEST");
    if (!tokenVerify) throw new Error("Inavlid Token");

    req.user = tokenVerify.id;
    next();
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message,
    });
  }
};

exports.Signup = async function (req, res, next) {
  try {
    let { username, email, password, firstname, lastname, contact } = req.body;
    if (!username || !email || !password || !firstname || !lastname || !contact)
      throw new Error(
        "Please provide username or email or password or firstname or lastname or contact!"
      );

    let checkuser = await USER.findOne({ email: email });
    if (checkuser)
      throw new Error("Alwarady user enter email plases new email enter !");

    let passwordHash = await bcrypt.hashSync(password, 10);
    console.log(passwordHash);

    let userData = await USER.create({ ...req.body, password: passwordHash });
    let token = jwt.sign({ id: userData._id }, "USER-TEST");

    sendEmail.sendEmail(email);

    res.status(200).json({
      data: userData,
      status: "Successfully create signup data",
      token,
    });
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message,
    });
  }
};

exports.Login = async function (req, res, next) {
  try {
    let { email, password } = req.body;
    if (!email || !password)
      throw new Error("Please provide  email or password !");

    let userData = await USER.findOne({ email });
    if (!userData) throw new Error(" Invalid email ");

    let passwordHash = await bcrypt.compareSync(password, userData.password);
    if (!passwordHash) throw new Error(" Invalid password ");

    let token = jwt.sign({ id: userData._id }, "USER-TEST");

    res.status(200).json({
      data: userData,
      status: "Successfully create signup data",
      token,
    });
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message,
    });
  }
};
