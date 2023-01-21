const express = require("express");
const router = express.Router();
const { getBoardim, addBoardim } = require("../controllers/boardim");
router.route("/").get(getBoardim).post(addBoardim);

module.exports = router;
