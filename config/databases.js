var mysql = require('mysql');

var connection = mysql.createConnection({
  host : "localhost",
  user : "cloudy",
  password : "sembarang12",
  database : "pbkk"
});

connection.connect((err)=>{
  if(err) throw err;
});

module.exports=connection;