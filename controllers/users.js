var response = require('./response');
var db = require('../config/databases');
const bcrypt = require('bcrypt');
const saltRounds = 10;

exports.index = function(req, res) {
    response.ok("This is API for Users", res)
};

exports.getAllUser = function(req, res) {
    db.query('SELECT * FROM users', function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};

exports.postUser = function(req, res) {
    var nrp = req.body.nrp;
    var password = req.body.password;
    if(!nrp || !password){
        res.status("400");
        res.send("Invalid details!");
     } else {
        var hash = bcrypt.hashSync(password, saltRounds);
        db.query('INSERT INTO users (nrp, password) VALUES (?,?)', [nrp, hash], function(error, result, fields) {
            if(error) {
                console.log(error)
                response.error('Duplicate!', res)
            } else {
                response.ok('Add User Success!', res)
            }
        });
     }
};

exports.findUser = function(req, res) {
    var user_id = req.params.user_id;
    db.query('SELECT * FROM users WHERE user_id = ?', [ user_id ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};

exports.updateUser = function(req, res) {
    var user_id = req.params.user_id;
    var nrp = req.body.nrp;
    var password = req.body.password;
    var hash = bcrypt.hashSync(password, saltRounds);
    db.query('UPDATE users SET nrp = ?, password = ? WHERE user_id = ?', [ nrp, hash, user_id ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok("Edit User Success!", res)
        }
    });
};

exports.deleteUser = function(req, res) {
    var user_id = req.params.user_id;
    db.query('DELETE FROM users WHERE user_id = ?', [ user_id ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok("Delete User Success!", res)
        }
    });
};