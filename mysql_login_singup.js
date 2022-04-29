var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Kirtee@123",
  database:"kirtee"
});

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   con.query("CREATE DATABASE kirtee", function (err, result) {
//     if (err) throw err;
//     console.log("Database created");
//   });
// });

// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     var sql = "CREATE TABLE salesman (name VARCHAR(255), email VARCHAR(255),Password VARCHAR(255),ConfromPassword VARCHAR(255))";
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log("Table created");
//     });
//   });

const emailvalidator=require('email-validator')
const a=require("readline-sync");
var login_singup=a.question("what you want login or singup")
if (login_singup=="singup"){
    var username=a.question("enter the user name")
    var Email=a.question("enter your emaile id:-")
    
    if (emailvalidator.validate(Email)){
        console.log("Email is valied")
        password=a.question("create a passwrod ")
        passd=(/[a-zA-Z0-9!@#$%^&*]{6,16}$/)
        if(password.match(passd)){
            cofirmpasswrod=a.question("confirmed password✅")
            if (password==cofirmpasswrod){
            console.log("confirmed password✅")
            console.log("congracts  "+username+"  you are sign up succesfully")
            var sql = "INSERT INTO salesman  (name,email,Password,ConfromPassword) VALUES ?";
            var values = [[username,Email, password,cofirmpasswrod]]
            con.query(sql, [values], function (err, result) {
            if (err){
                console.log(err);
            }else{
                console.log("data inserted");

            }
            });
            }
            else{
            console.log("please conform your password")
            console.log("try again")
            }
        }
        else{
            console.log("your password is incurrect")
        }
    }
    else{
        console.log("your Email is invalied")
    }   
}
else{
    if(login_singup=="login"){
        var username=a.question("enter the user name")
        var Email=a.question("enter your emaile id:-")
        var sql="SELECT *FROM salesman";
        con.query(sql,function(err,results,fields){
            if(err){
                console.log(err)
            }
            else{
                // console.log(results)
                var found=results.find(function(login_singup){
                    // console.log(login_singup.username)
                    if (login_singup.username==username && login_singup.Email==Email){
                        return login_singup
                    }
                });
                if (found){
                    console.log("login successfully")
                    console.log(found)
                }
                else{
                    console.log("user not found")
                }

            }
        });

    }
}