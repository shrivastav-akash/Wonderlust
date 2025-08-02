const Review = require("../models/review");
const Listing = require("../models/listing");

module.exports.CreateReview = async (req, res) => {
  let listing = await Listing.findById(req.params.id);
  let review = new Review(req.body.review);
  review.author = req.user._id;
  listing.reviews.push(review);
  await review.save();
  await listing.save();
  req.flash("success", "Successfully added review");
  res.redirect(`/listings/${req.params.id}`);
};

module.exports.DeleteReview = async (req, res) => {
  let { id, reviewId } = req.params;
  await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
  await Review.findByIdAndDelete(reviewId);
  req.flash("success", "Successfully deleted review");
  res.redirect(`/listings/${id}`);
};
