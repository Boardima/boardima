const express = require("express");
const router = express.Router();
const { getBoardim, addBoardim } = require("../controllers/boardim");
const { addFeedBack } = require("../controllers/feedback");
router.route("/").get(getBoardim).post(addBoardim);
router.route("/feedback").post(addFeedBack);
module.exports = router;
