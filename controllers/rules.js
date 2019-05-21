var response = require('./response');
var db = require('../config/databases');

exports.index = function(req, res) {
    response.ok("This is API for Rules", res)
};

exports.getAllRule = function(req, res) {
    db.query('SELECT * FROM rules', function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};

exports.postRule = function(req, res) {
    var rule_name = req.body.rule_name;
    var start = req.body.start;
    var finish = req.body.finish;
    var gate_id = req.body.gate_id;
    var user_id = req.body.user_id;
    db.query('INSERT INTO rules (rule_name, start, finish, gate_id, user_id) VALUES (?, ?, ?, ?, ?)',
    [ rule_name, start, finish, gate_id, user_id ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok("Create Rule Success!", res)
        }
    });
};

exports.findRule = function(req, res) {
    var rule_id = req.params.rule_id;
    db.query('SELECT * FROM rules WHERE rule_id = ?', [ rule_id ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};

exports.updateRule = function(req, res) {
    var rule_id = req.params.rule_id;
    var rule_name = req.body.rule_name;
    var start = req.body.start;
    var finish = req.body.finish;
    var gate_id = req.body.gate_id;
    var user_id = req.body.user_id;

    db.query('UPDATE rules SET rule_name = ?, start = ?, finish = ?, gate_id = ?, user_id = ? WHERE rule_id = ?', 
    [ rule_name, start, finish, gate_id, user_id, rule_id ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok("Edit Rule Success!", res)
        }
    });
};

exports.deleteRule = function(req, res) {
    var rule_id = req.params.rule_id;
    db.query('DELETE FROM rules WHERE rule_id = ?', [ rule_id ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok("Delete Rule Success!", res)
        }
    });
};