var express = require('express');
var path = require('path');
var mysql = require('mysql2');
var bodyParser = require('body-parser');
var session = require('express-session');

var app = express();

app.use(express.static(path.join(__dirname, '/public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  secret: 'secretKey',
  resave: false,
  saveUninitialized: true
}));
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
*/
// Definícia endpointov
app.get('/index.html', function (req, res) {
  console.log('Main index');
  var name = req.session.name || '';
  res.sendFile("./index.html", {root: __dirname},{name: name});
});

app.get('/kubernetes', function (req, res) {
  console.log('Kubernetes');
  res.sendFile("./kubernetes.html", {root: __dirname});
});

app.get('/login', function (req, res) {
  console.log('Login');
  res.sendFile("./login.html", {root: __dirname});
});
/*
app.post('/login', function (req, res){
  var name = req.body.name;
  var password = req.body.password;

  connection.query('SELECT * FROM users WHERE name = ? AND password = ?', [name, password], (err, rows) => {
    if (err) throw err;
    if (rows.length > 0) {
      req.session.name = name; // uložíme meno používateľa do session
      console.log('Prihlásený!')
      res.sendFile(path.join(__dirname, '/public/index.html'));
    } else {
      console.log('Nepsrávne prihlasovacie údaje!')
      res.sendFile(path.join(__dirname, '/public/login.html'));
    }
  });
});

/*
// Odhlásenie používateľa
app.get('/logout', function (req, res) {
  req.session.destroy(function (err) {
    if (err) {
      console.log(err);
    } else {
      res.sendFile(path.join(__dirname, '/public/index.html'));
    }
  });
});
*//*
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
