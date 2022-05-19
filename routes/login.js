const express = require("express");
const router = express.Router();
const loginctrl = require("../controllers/loginController")


router.post("/login", loginctrl.loginByEmailPassword);
router.post("/signUp",loginctrl.signUpEmailPassword);

module.exports = router;
