const router = require("express").Router();
const { User, validate } = require("../models/user");
const bcrypt = require("bcryptjs");

router.get("/", async (req, res) => {
	res.status(200).json("Welcome to the Nasa api login")
});

module.exports = router;