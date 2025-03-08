let express = require("express");
let router = express.Router();
let userController = require('../controller/users');
let portfolioController = require('../controller/portfolio');
let multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/images');
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
  
  const upload = multer({ storage: storage })


router.post("/",userController.Secure, upload.single('image'),portfolioController.Create );
router.get("/",userController.Secure, portfolioController.Read);
router.delete("/delete/:id",userController.Secure,portfolioController.Delete);
router.patch("/update/:id",userController.Secure,upload.single('image'), portfolioController.Update);

module.exports = router;
