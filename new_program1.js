var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Kirtee@123",
  database: "crud_opration"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

con.query("CREATE DATABASE crud_opration", function (err, result) {
    if (err){
        console.log("Database created");
    }
    else{
        console.log("Database already created");
    }
  });


//     var sql = "CREATE TABLE new_crud_opration (name VARCHAR(255), address VARCHAR(255))";
//     con.query(sql, function (err, result) {
//         if (err){
//             console.log("Table created"); 
//         }
//         else{
//             console.log("Table not created");
//         }
            
//     });
  

//     var sql = "INSERT INTO new_crud_opration (name, address) VALUES ?";
//     var values = [
//       ['John', 'Highway 71'],
//       ['Peter', 'Lowstreet 4'],
//       ['Amy', 'Apple st 652'],
//       ['Hannah', 'Mountain 21'],
//       ['Michael', 'Valley 345'],
//       ['Sandy', 'Ocean blvd 2'],
//       ['Betty', 'Green Grass 1'],
//       ['Richard', 'Sky st 331'],
//       ['Susan', 'One way 98'],
//       ['Vicky', 'Yellow Garden 2'],
//       ['Ben', 'Park Lane 38'],
//       ['William', 'Central st 954'],
//       ['Chuck', 'Main Road 989'],
//       ['Viola', 'Sideway 1633']
//     ];
//     con.query(sql, [values], function (err, result) {
//       if (err){
//         console.log("already inserted");
//       }else{
//         console.log("inserted");

//       }
//     });

  
    con.connect(function(err) {
      if (err) throw err;
      con.query("SELECT * FROM new_crud_opration", function (err, result, fields) {
        if (err){
          console.log(result);
        }else{
          console.log(result);
        }
      });
    });
  
  
//   con.connect(function(err) {
//     if (err) throw err;
//     con.query("SELECT * FROM FROM new_crud_opration WHERE address = 'Park Lane 38'", function (err, result) {
//       if (err) throw err;
//       console.log(result);
//     });
//   });
  
//   var mysql = require('mysql');
  
//   var con = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "Kirtee@123",
//     database: "crud_opration"
//   });
  
//   con.connect(function(err) {
//     if (err) throw err;
//     con.query("SELECT * FROM new_crud_opration ORDER BY name", function (err, result) {
//       if (err) throw err;
//       console.log(result);
//     });
//   });
  
//   var mysql = require('mysql');
  
//   var con = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "Kirtee@123",
//     database: "crud_opration"
//   });
  
//   con.connect(function(err) {
//     if (err) throw err;
//     var sql = "UPDATE new_crud_opration SET address = 'Canyon 123' WHERE address = 'Valley 345'";
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log(result.affectedRows + " record(s) updated");
//     });
//   });
  
//   var mysql = require('mysql');
  
//   var con = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "Kirtee@123",
//     database: "crud_opration"
//   });
  
//   con.connect(function(err) {
//     if (err) throw err;
//     var sql = "SELECT * FROM  new_crud_opration LIMIT 5";
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log(result);
//     });
//   });
  
//   var mysql = require('mysql');
  
//   var con = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "Kirtee@123",
//     database: "crud_opration"
//   });
  
//   con.connect(function(err) {
//     if (err) throw err;
//     var sql = "DELETE FROM  new_crud_opration WHERE address = 'Mountain 21'";
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log("Number of records deleted: " + result.affectedRows);
//     });
//   });
  
//   var mysql = require('mysql');
  
//   var con = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "Kirtee@123",
//     database: "crud_opration"
//   });
  
//   con.connect(function(err) {
//     if (err) throw err;
//     var sql = "DROP TABLE new_crud_opration";
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log("Table deleted");
//     });
//   });
  
  