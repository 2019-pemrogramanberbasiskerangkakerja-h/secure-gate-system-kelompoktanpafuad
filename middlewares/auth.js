var db = require('../config/databases');

exports.checkSignIn = function(req, res, next) {
    if(req.session.loggedin) {
        next();
    } else {
        var err = new Error("Not logged in!");
        db.query('SELECT * FROM gates', function(error, result, fields) {
            // console.log(result[0]);
            if(error) {
                console.log(error);
            } else {
                res.render('auth/login',{ message : "You Need to Login First!", rules : result });
            }
        });
    }
};

exports.loginHandle = function(req, res, next) {
    if(req.session.loggedin) {
        res.redirect('/');
    } else {
        next();
    }
};