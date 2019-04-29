const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config/database');

mongoose.connect(config.database);
let db = mongoose.connection;

// Check connection
db.once('open', function(){
    console.log('Connected to MongoDB');
});
  
// Check for DB errors
db.on('error', function(err){
    console.log(err);
});
  
// Init App
const app = express();

// Bring in Models
let Gate = require('./models/gate');

//Load View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Body Parser Middleware
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// Set Public Folder
app.use(express.static(path.join(__dirname, 'public')));

// Home Route
app.get('/', function(req, res){
    Gate.find({}, function(err, gates){
        if(err){
            console.log(err);
        }else{
            res.render('index', {
                title:'Secure Gate System',
                gates: gates
            });
        }
    }); 
});

// Get Single Gate
app.get('/gate/:id', function(req, res){
    Gate.findById(req.params.id, function(err, gate){
        // console.log(gate);
        // return;
        res.render('gate', {
            gate:gate
        });
    });
});

// Add Route
app.get('/gates/add', function(req, res){
    res.render('add_gate', {
        title: 'Add Gates'
    });
});

// Add Submit POST Route
app.post('/gates/add', function(req, res){
    // console.log('Submitted');
    // return;
    let gate = new Gate();
    gate.name = req.body.name;

    gate.save(function(err){
        if(err){
            console.log(err);
            return;
        }else{
            res.redirect('/');
        }
    });
});

// Start Server
app.listen(3000, function(){
    console.log('Server started on port 3000'); 
});
