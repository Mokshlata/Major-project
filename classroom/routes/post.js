const express=require("express");
const router=express.Router();


//index route
router.get("/",(req,res)=>{
    res.send("GET for post")
})

//show 
router.get("/:id",(req,res)=>{
    res.send("GET for post id")
})

module.exports=router;
