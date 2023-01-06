const Boardim = require("../models/Boardim");

// @desc get a boardim
// @route GET / api/boardim
// @acess Public

exports.getBoardim = async (req, res, next) => {
  try {
    const boardim = await Boardim.find();
    return res.status(200).json({
      success: true,
      count: boardim.length,
      data: boardim,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      error: "Server error",
    });
  }
};

// @desc create a boardim
// @route POST / api/boardim
// @access Admin

exports.addBoardim = async (req, res, next) => {
  try {
    console.log(req.body);
    const boardim = await Boardim.create(req.body);
    return res.status(200).json({
      success: true,
      data: boardim,
    });
  } catch (error) {
    console.log(error);
    if (error.code === 11000) {
      return res.status(400).json({
        error: "This boardim already exists",
      });
    }
    res.status(500).json({
      success: false,
      error: "Server error",
    });
  }
};
