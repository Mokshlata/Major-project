const express=require("express");
const router=express.Router();



//index route
router.get("/",(req,res)=>{
    res.send("GET for user")
})

//show 
router.get("/:id",(req,res)=>{
    res.send("GET for user id")
})

module.exports=router;