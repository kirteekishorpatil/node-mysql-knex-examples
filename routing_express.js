// var express = require('express');
// var app = express();

// app.get('/', function(req,res){
//    res.send("Hello world!");
// });
// app.get('/login', function(req, res){
//     res.send("welcome to login !");
//  });

// app.listen(3000);

// var express = require('express');
// var app = express();

// app.get('/red-users',function(req,res){
//    res.send("list of users");
// });
// app.pot('/red-users-all-data',function(req,res){
//     res.send("list of pot users");
// });
// app.get('/red-all-users',function(req,res){
//     const userobj={
//         name:"kirtee",
//         sername:"patil",
//         colour:"black",
//         school:"Aryan high school palghar"
//     }
//    res.send(userobj);
// });
// app.listen(4000);

// var express = require('express');
// var app = express();

// app.get('/hello', function(req, res){
//    res.send("Hello World!");
// });

// app.listen(2000);

// var express = require('express');
// var app = express();

// app.get('/hello', function(req, res){
//    res.send("Hello World!");
// });

// app.post('/hello', function(req, res){
//    res.send("You just called the post method at '/hello'!\n");
// });

// app.listen(3000);

var express = require('express');  
var app = express();  
app.get('/', function (req, res) {  
   console.log("Got a GET request for the homepage");  
   res.send('Welcome to JavaTpoint!');  
})  
app.post('/', function (req, res) {  
   console.log("Got a POST request for the homepage");  
   res.send('I am Impossible! ');  
})  
app.delete('/del_student', function (req, res) {  
   console.log("Got a DELETE request for /del_student");  
   res.send('I am Deleted!');  
})  
app.get('/enrolled_student', function (req, res) {  
   console.log("Got a GET request for /enrolled_student");  
   res.send('I am an enrolled student.');  
})  
// This responds a GET request for abcd, abxcd, ab123cd, and so on  
app.get('/ab*cd', function(req, res) {     
   console.log("Got a GET request for /ab*cd");  
   res.send('Pattern Matched.');  
})  
var server = app.listen(8000, function () {  
var host = server.address().address  k
var port = server.address().port  
console.log("Example app listening at http://%s:%s", host, port)  
})  

