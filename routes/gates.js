var express = require('express');
var router = express.Router();
var gates = require('../controllers/gates');

router.get('/index', gates.index);

router.route('/')
  .get(gates.getAllGate)
  .post(gates.postGate);

router.route('/:gate_id')
  .get(gates.findGate)
  .put(gates.updateGate)
  .delete(gates.deleteGate);

module.exports = router;