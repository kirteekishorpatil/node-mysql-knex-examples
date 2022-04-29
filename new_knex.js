var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Kirtee@123",
//   database: "crud"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
con.query("CREATE DATABASE crud", function (err, result) {
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
      database: 'crud'
  }

})
// CREATE TABLES
knex.schema.createTable('knex_table', function (table) {
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
const data = [
  { name: 'Audi', password: 52642 },
  { name: 'Mercedes', password: 57127 },
  { name: 'Skoda', password: 9000 },
  { name: 'Volvo', password: 29000 },
  { name: 'Bentley', password: 350000 },
  { name: 'Citroen', password: 21000 },
  { name: 'Hummer', password: 41400 },
  { name: 'Volkswagen', password: 21600 },
]

knex('knex_table').insert(data).then(() => console.log("data inserted"))
  .catch((err) => { console.log(err); throw err })
