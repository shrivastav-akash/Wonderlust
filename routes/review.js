const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync");
const Listing = require("../models/listing");
const Review = require("../models/review");
const { validateReview, isLoggedIn, isReviewAuthor } = require("../middleware");
const reviewsController = require("../controllers/reviews");

// post review route
router.post(
  "/",
  validateReview,
  isLoggedIn,
  wrapAsync(reviewsController.CreateReview)
);

// delete review route
router.delete(
  "/:reviewId",
  isLoggedIn,
  isReviewAuthor,
  wrapAsync(reviewsController.DeleteReview)
);

module.exports = router;
