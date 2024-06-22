const express=require("express");
const router=express.Router({mergeParams:true});
const wrapAsync=require("../utills/wrapAsync.js");
const ExpressError=require("../utills/ExpressError.js");
const Review=require("../models/review.js");
const Listing=require("../models/listing.js");
const {validateReview, isLoggedIn, isReviewAuthor}=require("../middleware.js")

const reviewController=require("../controllers/reviews.js")
//reviews-post route
router.post("/",
    isLoggedIn,
    validateReview,wrapAsync( reviewController.createReview
   //  console.log("new review saved");
   //  res.send("new review saved");
  )
   );
   
   //Delete review route
   router.delete("/:reviewId",
     isLoggedIn,
     isReviewAuthor,
    wrapAsync(reviewController.destroyReview))
   
   module.exports=router;