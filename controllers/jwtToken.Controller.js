const jwt = require('jsonwebtoken')
require("dotenv").config();


module.exports.generateToken = (data,res) => {
    const token = jwt.sign({data : data},process.env.JWT_SECRET)
    return res.send({
        msg: "Login Successful",
        token : token
    });
}