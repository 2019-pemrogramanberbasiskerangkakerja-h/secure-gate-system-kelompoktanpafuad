const express = require('express');
const router = express.Router();

// Bring in Gate Model
let Gate = require('../models/gate');

// Add Route
router.get('/add', function(req, res){
    res.render('add_gate', {
        title: 'Add Gate'
    });
});

// Add Submit POST Route
router.post('/add', function(req, res){
    req.checkBody('name', 'Name is required').notEmpty();

    // Get Errors
    let errors = req.validationErrors();

    if(errors){
        res.render('add_gate', {
            title: 'Add Gate',
            errors:errors
        });
    }else{
        let gate = new Gate();
        gate.name = req.body.name;
    
        gate.save(function(err){
            if(err){
                console.log(err);
                return;
            }else{
                req.flash('success','Gate Added');
                res.redirect('/');
            }
        });
    }
});

// Get Edit Gate
router.get('/edit/:id', function(req, res){
    Gate.findById(req.params.id, function(err, gate){
        res.render('edit_gate', {
            title: 'Edit Gate',
            gate:gate
        });
    });
});

// Update Submit POST Route
router.post('/edit/:id', function(req, res){
    let gate = {};
    gate.name = req.body.name;

    let query = {_id:req.params.id}

    Gate.update(query, gate, function(err){
        if(err){
            console.log(err);
            return;
        }else{
            req.flash('success', 'Gate Updated');
            res.redirect('/');
        }
    });
});

// Delete Gate
router.delete('/:id', function(req, res){
    let query = {_id:req.params.id}

    Gate.remove(query, function(err){
        if(err){
            console.log(err);
        }
        res.send('Success');
    });
});

// Get Single Gate
router.get('/:id', function(req, res){
    Gate.findById(req.params.id, function(err, gate){
        // console.log(gate);
        // return;
        res.render('gate', {
            gate:gate
        });
    });
});

module.exports = router;