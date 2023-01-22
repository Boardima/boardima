const express = require("express");
const router = express.Router();
const { getUser, addUser } = require("../controllers/user");
router.route("/").get(getUser).post(addUser);

module.exports = router;
