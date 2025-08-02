const express = require("express");
const router = express.Router();
const User = require("../models/user");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { saveReturnTo } = require("../middleware");
const userController = require("../controllers/users.js");
const user = require("../models/user");

router
  .route("/signup")
  .get(userController.getSignupForm)
  .post(wrapAsync(userController.signup));

router
  .route("/login")
  .get(userController.getLoginForm)
  .post(
    saveReturnTo,
    passport.authenticate("local", {
      failureFlash: true,
      failureRedirect: "/login",
    }),
    userController.login
  );

router.get("/logout", userController.logout);

module.exports = router;
