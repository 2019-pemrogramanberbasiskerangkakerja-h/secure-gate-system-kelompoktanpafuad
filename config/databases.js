var mysql = require('mysql');

var connection = mysql.createConnection({
  host : "localhost",
  user : "root",
  password : "rohana",
  database : "pbkk"
});

connection.connect((err)=>{
  if(err) throw err;
});

module.exports=connection;