const express=require("express");
const app=express();
const users=require("./routes/user.js")
const posts=require("./routes/post.js")
const session=require("express-session");
const flash=require("connect-flash");
const path=require("path");


app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"))


const sessionOptions={
    secret:"mysupersecret",
    resave:false,
    saveUninitialized:true};

app.use(session(sessionOptions));
app.use(flash());

app.use((req,res,next)=>{
    res.locals.successMsg=req.flash("success");
    res.locals.errorMsg=req.flash("error");
next();
})

app.get("/register",(req,res)=>{
    let {name="anonymous"}=req.query;
    req.session.name=name;
    if(name==="anonymous"){
        req.flash("error","user not registerd")
    }else{
    req.flash("success","user registered succesfully!")

    }
    res.redirect("/hello")
  //  console.log(req.session.name);
    //res.send(name);
});
app.get("/hello",(req,res)=>{
    res.render("page.ejs",{name:req.session.name});
});

// app.get("/reqcount",(req,res)=>{
//     if(req.session.count){
//         req.session.count++;
//     }else{
//         req.session.count=1;
//     }
   
//     res.send(`you send reqs ${req.session.count} times`)
// })

// app.get("/test",(req,res)=>{
//     res.send("test succesful!");
// });
// app.use("/users",users)
// app.use("/posts",posts)
app.listen(3000,()=>{
    console.log("server is listening to 3000")
});