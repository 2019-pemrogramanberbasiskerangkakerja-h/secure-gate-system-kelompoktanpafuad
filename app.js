const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config/database');
const createError = require('http-errors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

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
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
// // parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }));
// // parse application/json
// app.use(bodyParser.json());

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

// Get Single Gate
app.get('/gate/edit/:id', function(req, res){
    Gate.findById(req.params.id, function(err, gate){
        // console.log(gate);
        // return;
        res.render('edit_gate', {
            title: 'Edit Gate',
            gate:gate
        });
    });
});

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
