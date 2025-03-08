let express = require("express");
let router = express.Router();
let main_form = require("../controller/main_form");
let userController = require('../controller/users');

router.post("/",userController.Secure, main_form.Create);
router.post("/create/",main_form.Create1);
router.get("/",userController.Secure, main_form.Read);
router.get("/read/", main_form.Read1);
router.delete("/delete/:id",userController.Secure, main_form.Delete);
router.patch("/update/:id",userController.Secure, main_form.Update);

module.exports = router;
