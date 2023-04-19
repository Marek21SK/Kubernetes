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

// Vytvorenie pripojenia k databáze
const connection = mysql.createConnection({
  host: 'mysql-service',
  port: 3306,
  user: 'root',
  password: 'password',
  database: 'kubernetes'
});

/*
//Cez toto pripojenie k databáze som si testoval serverovu časť mojej node js aplikácie.
// Vytvorenie pripojenia k databáze
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3307,
  user: 'root',
  password: 'password',
  database: 'kubernetes'
});
*/

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

app.post('/login', function (req, res){
  var name = req.body.name;
  var password = req.body.password;

  connection.query('SELECT * FROM users WHERE name = ? AND password = ?', [name, password], (err, rows) => {
    if (err) throw err;
    if (rows.length > 0) {
      req.session.name = name; // uložíme meno používateľa do session
      console.log('Prihlásený! ' + req.session.name);
      res.sendFile(path.join(__dirname, '/public/index.html'));
    } else {
      console.log('Nepsrávne prihlasovacie údaje!')
      res.sendFile(path.join(__dirname, '/public/login.html'));
    }
  });
});

app.get('/form', function (req, res){
  //Ak používateľ nie je prihlásený, presmerujeme ho na LOGIN
  if(!req.session.name){
    return res.sendFile(path.join(__dirname, '/public/login.html'));
  }
  res.sendFile(path.join(__dirname, '/public/kubernetes.html'));
});

app.post('/form', function (req, res){
  //Ak používateľ nie je prihlásený, presmerujeme ho na LOGIN
  if (!req.session.name){
    return res.sendFile(path.join(__dirname, '/public/login.html'));
  }

  //Získanie id používateľa z tabuľky users
  var query1 = "SELECT id FROM users WHERE name =?";
  var values1 = [req.session.name];

  connection.query(query1, values1, function(error, results, fields){
    if(error){
      console.log(error);
      res.send('Chyba pri získavaní ID používateľa');
    }else{
      var userid = results[0].id; //uloženie id používateľa do premennej
      console.log('Výpis: ID používateľa '+ userid);
    
      var meno = req.body.meno;
      var priezvisko = req.body.priezvisko;
      var email = req.body.email;
      var mesto = req.body.mesto;

      //Vytvorenie dotazu na pridanie dát do tabuľky
      var query = "INSERT INTO forms (users_id, username, surename, email, city) VALUES (?, ?, ?, ?, ?)";
      var values = [userid, meno, priezvisko, email, mesto];

      //Spustenie dotazu na databázu
      connection.query(query, values, function(error, results, fields){
        if (error){
          console.log(error);
          res.send('Chyba pri vkladaní dát do databázy');
        }else{
          console.log('Dáta boli úspešne vložené do databázy používateľom: ' + req.session.name);
          res.sendFile(path.join(__dirname, '/public/index.html'));
        }
      });
    }
  });
});

app.get('/users', function (req, res) {
  connection.query('SELECT * FROM users', (err, rows) => {
    if (err) throw err;
    console.log('Data received from Db:\n');
    console.log(rows);
    res.json(rows);
  });
});

// Spustenie servera na porte 3000
app.listen(3000, () => {
  console.log('Server spustený na porte 3000...');
});

module.exports = app;
