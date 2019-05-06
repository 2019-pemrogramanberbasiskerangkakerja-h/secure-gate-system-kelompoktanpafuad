var express = require('express');
var router = express.Router();
var rules = require('../controllers/rules');

router.get('/index', rules.index);

router.route('/')
  .get(rules.getAllRule)
  .post(rules.postRule);

router.route('/:rule_id')
  .get(rules.findRule)
  .put(rules.updateRule)
  .delete(rules.deleteRule);

module.exports = router;