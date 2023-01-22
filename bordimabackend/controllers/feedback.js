const FeedBack = require("../models/Feedback");

exports.addFeedBack = async (req, res, next) => {
  try {
    console.log(req.body);
    const feedback = await FeedBack.create(req.body);
    res.status(200).json({
      success: true,
      data: feedback,
    });
    return 
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
