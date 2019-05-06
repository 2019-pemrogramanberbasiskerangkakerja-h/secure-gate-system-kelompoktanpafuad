var response = require('./response');
var db = require('../config/databases');

exports.index = function(req, res) {
    response.ok("This is API for Gates", res)
};

exports.getAllGate = function(req, res) {
    db.query('SELECT * FROM gates', function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};

exports.postGate = function(req, res) {
    var gate_name = req.body.gate_name;
    db.query('INSERT INTO gates (gate_name) VALUES (?)', [ gate_name ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok("Create Gate Success!", res)
        }
    });
};

exports.findGate = function(req, res) {
    var gate_id = req.params.gate_id;
    db.query('SELECT * FROM gates WHERE gate_id = ?', [ gate_id ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};

exports.updateGate = function(req, res) {
    var gate_id = req.params.gate_id;
    var gate_name = req.body.gate_name;

    db.query('UPDATE gates SET gate_name = ? WHERE gate_id = ?', [ gate_name, gate_id ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok("Edit Gate Success!", res)
        }
    });
};

exports.deleteGate = function(req, res) {
    var gate_id = req.params.gate_id;
    db.query('DELETE FROM gates WHERE gate_id = ?', [ gate_id ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok("Delete Gate Success!", res)
        }
    });
};