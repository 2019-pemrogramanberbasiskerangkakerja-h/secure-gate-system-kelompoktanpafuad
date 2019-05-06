exports.checkSignIn = function(req, res, next) {
    if(req.session.loggedin) {
        next();
    } else {
        var err = new Error("Not logged in!");
        res.render('auth/login',{message : "You Need to Login First!"});
    }
};

exports.loginHandle = function(req, res, next) {
    if(req.session.loggedin) {
        res.redirect('/');
    } else {
        next();
    }
};