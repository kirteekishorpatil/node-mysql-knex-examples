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
const knex=require("knex")({

  client: 'mysql',
  connection: {
      host: '127.0.0.1',
      user: 'root',
      password: 'Kirtee@123',
      database: 'crud_opration'
  }

})
// CREATE TABLES
knex.schema.createTable('knex_user', function (table) {
  table.increments();
  table.string('name');
  table.string("password");
}).then(()=>{
  console.log("table created")
})
.catch((err)=>{
  console.log(err)
})

// INSERT DATA
// const data = [
//   { name: 'Audi', password: 52642 },
//   { name: 'Mercedes', password: 57127 },
//   { name: 'Skoda', password: 9000 },
//   { name: 'Volvo', password: 29000 },
//   { name: 'Bentley', password: 350000 },
//   { name: 'Citroen', password: 21000 },
//   { name: 'Hummer', password: 41400 },
//   { name: 'Volkswagen', password: 21600 },
// ]

// knex('knex_user').insert(data).then(() => console.log("data inserted"))
//   .catch((err) => { console.log(err); throw err })

// SELECT FROM
//   knex.from('knex_user').select("*")
//   .then((rows) => {
//       for (row of rows) {
//           console.log(`${row['password']}`);
//       }
//   }).catch((err) => { console.log( err); throw err })

// WHERE
// knex.from('knex_user').select("name", "password").where('password', '>', '50000')
//     .then((rows) => {
//         for (row of rows) {
//             console.log(`${row['name']} ${row['password']}`);
//         }
//     })
//     .catch((err) => { console.log( err); throw err })

// ORDERBY
// knex.from('knex_user').select('name', 'password').orderBy('password')
//     .then((rows) => {
//         for (row of rows) {
//             console.log(`${row['password']}`);
//         }
//     }).catch((err) => { console.log( err); throw err })

// DROP TABLE
// function drop_table() {
//   knex.schema.hasTable("knex_user").then(function (exists) {
//     if (exists) {
//       console.log({ Success: `users table deleted successfully.` });
//       return knex.schema.dropTable("knex_user");
//     } else {
//       console.log({ Sorry: `users table not found.` });
//     }
//   });
// }

// UPDATE TABLE
// knex('knex_user')
//   .where({ password:4345678})
//   .update({ name: "kirtee" },{name,password})
//   .then(()=>{
//       console.log("update succesfully")
//     })
//     .catch((err)=>{
//       console.log(err)
//     })
    
