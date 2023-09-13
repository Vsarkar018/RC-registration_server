const express = require("express");
const router = express.Router();
const Form = require("./DataModel");
const axios = require("axios");
const { StatusCodes } = require("http-status-codes");
const SECRET_KEY = process.env.SECRET_KEY;
router.post("/", async (req, res) => {
  const { formData, recaptchaValue } = req.body;
  const isReqValid = await axios.post(
    `https://www.google.com/recaptcha/api/siteverify?secret=${SECRET_KEY}&response=${recaptchaValue}`
  );
  if (!isReqValid) {
    res
      .status(StatusCodes.FORBIDDEN)
      .json({ msg: "Captcha Verification Failed" });
  }
  const data = await Form.create({ ...formData });
  res.status(200).json({ msg: "Form Submitted Successfully" });
});

module.exports = router;
