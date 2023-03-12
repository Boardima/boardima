const RegisteredUserSchema = require("../models/Users");
const LoginUserSchema = require("../models/LoginUser");
const jwt = require("jsonwebtoken");

exports.register = async (req, res, next) => {
  try {
    console.log(req.body);
    const registeredUser = await RegisteredUserSchema.create(req.body);
    res.status(200).json({
      success: true,
      data: registeredUser,
    });
    return;
  } catch (error) {
    console.log(error);
    if (error.code === 11000) {
      return res.status(400).json({
        error: "This ",
      });
    }
    res.status(500).json({
      success: false,
      error: "Server error",
    });
  }
};

exports.login = async (req, res, next) => {
  try {
    console.log(req.body);
    const logonUser = await RegisteredUserSchema.find({
      email: req.body.email,
    });
    console.log(logonUser);
    const token = await jwt.sign(
      { email: req.body.email },
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ",
      {
        expiresIn: "1d",
      }
    );

    console.log(token);

    if (logonUser.length === 0) {
      res.status(404).json({
        success: true,
        message: "Wrong Credentials",
      });
      return;
    } else if (logonUser.length === 1) {
      if (logonUser[0].password === req.body.password) {
        res.status(200).json({
          token: token,
          success: true,
          message: "Successfully Login",
        });
        return;
      } else {
        res.status(404).json({
          success: true,
          message: "password do not match",
        });
        return;
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: true,
      message: "server Error",
    });
    return;
  }
};
