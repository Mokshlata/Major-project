const express=require("express");
const router=express.Router();
const wrapAsync=require("../utills/wrapAsync.js");
const Listing=require("../models/listing.js");
const {isLoggedIn,isOwner,validateListing}=require("../middleware.js")
const listingController=require("../controllers/listing.js");
const multer=require("multer");
const {storage}=require("../cloudConfig.js")
const upload=multer({storage})

router.route("/")
.get(wrapAsync(listingController.index))
.post(isLoggedIn,
  upload.single("listing[image]"),validateListing,
    wrapAsync(listingController.createListing))


   //new route
router.get("/new",isLoggedIn,listingController.renderNewForm);

router
.route("/:id")
.get(wrapAsync(listingController.showListing))
.put(
    isLoggedIn,
    isOwner,
    upload.single("listing[image]"),
    validateListing,
    wrapAsync(listingController.updateListing))
.delete(isLoggedIn,
  isOwner,wrapAsync(listingController.destroyListing));


  //Edit route
router.get("/:id/edit", isLoggedIn,
    isOwner,wrapAsync(listingController.renderEditForm))

//indexroute
//router.get("/",wrapAsync(listingController.index))

     //showrout()
     //router.get("/:id",wrapAsync(listingController.showListing));
    
  //Create route
//   router.post("/",isLoggedIn,validateListing,
//       wrapAsync(listingController.createListing)
// );


//update route
// router.put("/:id",
//     isLoggedIn,
//     isOwner,
//     validateListing,
//     wrapAsync(listingController.updateListing));

//delete route

// router.delete("/:id",isLoggedIn,
//     isOwner,wrapAsync(listingController.destroyListing));

module.exports=router;