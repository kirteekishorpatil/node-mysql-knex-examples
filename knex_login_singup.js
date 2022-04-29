var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Kirtee@123",
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
con.query("CREATE DATABASE create_loginsingup", function (err, result) {
    if (err){
        console.log("Database created");
    }
    else{
        console.log("Database already created");
    }
  });
const knex = require("knex")({

  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    user: 'root',
    password: 'Kirtee@123',
    database: 'create_loginsingup'
  }
})
function create_table() {
  knex.schema.hasTable("login_singup").then(function (exists) {
    if (!exists) {
      console.log({ Success: `users table created successfully.` });
      return knex.schema.createTable("login_singup", function (t) {
        t.increments('id'),
          t.string('username'),
          t.string('Email'),
          t.string('password'),
          t.string('cofirmpasswrod')
      });
    } else {
      console.log({ Sorry: `users table already exist!` });
    }
  });
}
const emailvalidator = require('email-validator')
const a = require("readline-sync");
var login_singup = a.question("what you want login or singup:-")
if (login_singup == "singup") {
  var username = a.question("enter the user name:-")
  var Email = a.question("enter your emaile id:-")

  if (emailvalidator.validate(Email)) {
    console.log("Email is valied")
    password = a.question("create a passwrod:-")
    passd = (/[a-zA-Z0-9!@#$%^&*]{6,16}$/)
    if (password.match(passd)) {
      cofirmpasswrod = a.question("confirmed password:-")
      if (password == cofirmpasswrod) {
        console.log("confirmed password✅")
        console.log("congracts  " + username + "  you are sign up succesfully")
        function insert_data() {
          knex.schema.hasTable("login_singup").then(function (exists) {
            if (exists) {
              console.log({ Success: `data inserted into users table.` });
              return knex("login_singup").insert({Username:username,email:Email,Password:password,Cofirmpasswrod:cofirmpasswrod});
            }
            else {
              console.log({ Sorry: `users table not found` });
            }
          });
        }
        insert_data()
      }
      else {
        console.log("please conform your password")
        console.log("try again")
      }
    }
    else {
      console.log("your password is incurrect")
    }
  }
  else {
    console.log("your Email is invalied")
  }
}
else {
  if (login_singup == "login") {
    var username = a.question("enter the user name:-")
    var Email = a.question("enter your emaile id:-")
    knex.from('login_singup').select("*")
      .then((rows) => {
        var found = rows.find(function (login_singup) {
          if (login_singup.username == username && login_singup.Email == Email) {
            return login_singup
          }
          });
          if (found) {
          console.log("login successfully")
          // console.log(found)
        }
        else {
          console.log("user not found")
        }
      }).catch((err) => {console.log(err); throw err })
  }
}
create_table()
// // update_data()

