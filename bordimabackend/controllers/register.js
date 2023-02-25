const RegisteredUserSchema = require("../models/Users");

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
