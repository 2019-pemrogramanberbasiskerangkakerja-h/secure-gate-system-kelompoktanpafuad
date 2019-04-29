const express = require('express');
const router = express.Router();

// Bring in User Model
let User = require('../models/user');

// Register Form
router.get('/register', function(req, res){
  res.render('register',{
    title: 'Register User'
  });
});

// Register Process
router.post('/register', function(req, res){
  const name = req.body.name;
  const nrp = req.body.nrp;
  const username = req.body.username;
  const password = req.body.password;
  const password2 = req.body.password2;

  req.checkBody('name', 'Name is required').notEmpty();
  req.checkBody('nrp', 'Email is required').notEmpty();
  req.checkBody('username', 'Username is required').notEmpty();
  req.checkBody('password', 'Password is required').notEmpty();
  req.checkBody('password2', 'Passwords do not match').equals(req.body.password);

  let errors = req.validationErrors();

  if(errors){
    res.render('register', {
      errors:errors
    });
  } else {
    let newUser = new User({
      name:name,
      nrp:nrp,
      username:username,
      password:password
    });

    bcrypt.genSalt(10, function(err, salt){
      bcrypt.hash(newUser.password, salt, function(err, hash){
        if(err){
          console.log(err);
        }
        newUser.password = hash;
        newUser.save(function(err){
          if(err){
            console.log(err);
            return;
          } else {
            req.flash('success','You are now registered and can log in');
            res.redirect('/users/login');
          }
        });
      });
    });
  }
});


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
