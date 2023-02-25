const express = require("express");
const router = express.Router();
const { getBoardim, addBoardim } = require("../controllers/boardim");
const { addFeedBack } = require("../controllers/feedback");
const { register } = require("../controllers/register");

router.route("/").get(getBoardim).post(addBoardim);
router.route("/feedback").post(addFeedBack);

router.route("/register").post(register);
module.exports = router;

