var express = require("express");
var mysql = require ("mysql");
var app = express();
var cors = require('cors')

const SELECT_ALL_NOTES_QUERY = 'SELECT * FROM notes';
const SELECT_ALL_CUSTOMERS_QUERY = 'SELECT * FROM customers';

app.use(cors())

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "Store"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("MySQL database is Connected!");
});


app.get("/", function(req, res){
    res.send("go to /notes to see notes");
})

app.get('/notes', function(req, res){
    con.query(SELECT_ALL_NOTES_QUERY, function(err, results){
        
    
    if(err){
        return res.send(err)
        }
        else {
            return res.json({
            data: results
            })
        }
        });
});

app.get('/notes/add', function(req, res){
    const {description} = req.query;
    const INSERT_NOTES_QUERY = `INSERT INTO notes (description) VALUES ('${description}')`;
    con.query(INSERT_NOTES_QUERY, function(err, results) {

    
    if(err){
        return res.send(err)
        }
        else {
            return res.send("successfully added new note");
            }    
        });

});

app.get('/customers', function(req, res){
    con.query(SELECT_ALL_CUSTOMERS_QUERY, function(err, results){
        
    
    if(err){
        return res.send(err)
        }
        else {
            return res.json({
            data: results
            })
        }
        });
});

app.get('/customers/add', function(req, res){
    const {firstName, lastName, email, phone} = req.query;
    const INSERT_CUSTOMER_QUERY = `INSERT INTO customers (firstName, lastName, email, phone) VALUES ('${firstName}', '${lastName}', '${email}', '${phone}')`;
    con.query(INSERT_CUSTOMER_QUERY, function(err, results) {

    
    if(err){
        return res.send(err)
        }
        else {
            return res.send("successfully added customer into CRM");
            }    
        });

});

app.get('/customers/search', (req, res) => {
    const{customer_id} = req.query
    const SEARCH_CUSTOMER_QUERY = `SELECT * FROM customers WHERE customer_id ='${customer_id}'`;
   

    connection.query(SEARCH_CUSTOMER_QUERY, (err, results) => {
        if(err) {
            return res.send(err)
        }
        else {
            return res.json({
            data: results
            })
        }
    });
    });

app.post('/registration', function(req, res){

    var email = req.body.email;
    var password = req.body.password;
    var password_confirmation = req.body.password_confirmation;

    
 res.send("registration page"+email+password+password_confirmation+ req.body+req.json+req.query);
    console.log(req.query);
    //const{email, password, password_confirmation} = req.query
});







app.listen(4000, () =>  {
    console.log('Server listening on port 4000')

});