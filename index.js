var express=require("express")
var path =require("path")
var app=express();
app.use(express.static(__dirname+'/public'));
// app.use(express.static(__dirname+'/images'));
// vertual path
app.use("/myimages",express.static(path.join(__dirname,"images")))
app.get("/getmethod",function(req,res){
    res.send('Get Is Called')
})
app.listen(3000);