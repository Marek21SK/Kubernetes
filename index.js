var express = require('express');
var path = require('path');
//var mysql = require('mysql');

var app = express();

app.use(express.static(path.join(__dirname, '/public')));
/*
// Vytvorenie pripojenia k databáze
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3307,
  user: 'root',
  password: 'password',
  database: 'kubernetes'
});

// Test pripojenia k databáze
connection.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Pripojené k MySQL databáze...');
});

// Uzavretie spojenia s databázou pred ukončením procesu
process.on('exit', function(){
  console.log('Spojenie s MySQL databázou ukončené.');
  connection.end();
});
/*
connection.end((err) => {
  if (err) throw err;
  console.log('Spojenie s MySQL databázou ukončené.');
});
*/

// Definícia endpointov
app.get('/', function (req, res) {
  console.log('Main index');
  res.sendFile("./index.html", {root: __dirname});
});

app.get('/kubernetes', function (req, res) {
  console.log('Index Kubernetes');
  res.sendFile("./kubernetes.html", {root: __dirname});
});
/*
app.get('/users', function (req, res) {
  connection.query('SELECT * FROM users', (err, rows) => {
    if (err) throw err;
    console.log('Data received from Db:\n');
    console.log(rows);
    res.json(rows);
  });
});
*/
// Spustenie servera na porte 3000
app.listen(3000, () => {
  console.log('Server spustený na porte 3000...');
});

module.exports = app;
