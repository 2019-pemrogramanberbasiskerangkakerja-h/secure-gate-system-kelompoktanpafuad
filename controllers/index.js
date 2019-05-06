var db = require('../config/databases');
const bcrypt = require('bcrypt');
const saltRounds = 10;
// var Users = [];

exports.index = function(req, res, next) {
    res.render('dashboard/index');
};

// page user
exports.addUser = function(req, res, next) {
    res.render('dashboard/users/index');
};

exports.editUser = function(req, res, next) {
    res.render('dashboard/users/edit');
};

// page gate
exports.addGate = function(req, res, next) {
    res.render('dashboard/gates/index');
};

exports.editGate = function(req, res, next) {
    res.render('dashboard/gates/edit');
};

// page role
exports.addRole = function(req, res, next) {
    res.render('dashboard/roles/index');
};

exports.editRole = function(req, res, next) {
    res.render('dashboard/roles/edit');
};

// page login
exports.loginPage = function(req, res, next) {
    res.render('auth/login');
};

exports.login = function(req, res, next) {
    var nrp = req.body.nrp;
    var password = req.body.password;
    if(!nrp || !password){
        res.render('auth/login', { message: "Please Enter NRP and Password" });
    } else {
        db.query('SELECT * FROM users WHERE nrp = ?', [nrp], function(error, result, fields) {
            if(result.length == 1) {
                var user_id = result[0].user_id;
                var hash = result[0].password;
                var pass = bcrypt.compareSync(password, hash);
                if(pass) {
                    // db.query('INSERT INTO logs (description, gate_id, user_id) VALUES (?, ?, ?)',
                    // [ description, gate_id, user_id ], 
                    // function (error, rows, fields){
                    //     if(error){
                    //         console.log(error)
                    //     } else{
                    //         response.ok("Create Gate Success!", res)
                    //     }
                    // });
                    req.session.loggedin = true;
                    req.session.nrp = nrp;
                    res.redirect('/');
                } else {
                    res.render('auth/login', { message: "NRP or Password Incorrect" });
                }
                
            } else {
                req.session.error = "invalid credentials !";
                res.render('auth/login', { message: "NRP or Password Incorrect" });
            }
        });
    }
};

// page register
exports.registerPage = function(req, res, next) {
    res.render('auth/register');
};

exports.register = function(req, res, next) {
    var nrp = req.body.nrp;
    var password = req.body.password;
    if(!nrp || !password){
        res.status("400");
        res.send("Invalid details!");
     } else {
        var hash = bcrypt.hashSync(password, saltRounds);
        db.query('INSERT INTO users (nrp, password) VALUES (?,?)', [nrp, hash], function(error, result, fields) {
            console.log(req.session.logedin);
            if(error) {
                res.render('auth/register', { message: "User Already Exists! Login or choose another NRP"});
            } else {
                req.session.loggedin = true;
                req.session.nrp = nrp;
                res.redirect('/');
            }
        });
     }
};

// logout
exports.logout = function(req, res){
    req.session.destroy(function(){
        console.log("user logged out.")
    });
    res.redirect('/login');
};