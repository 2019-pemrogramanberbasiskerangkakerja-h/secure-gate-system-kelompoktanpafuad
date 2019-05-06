var express = require('express');
var router = express.Router();
var users = require('../controllers/users');

router.get('/index', users.index);

router.route('/')
  .get(users.getAllUser)
  .post(users.postUser);

router.route('/:user_id')
  .get(users.findUser)
  .put(users.updateUser)
  .delete(users.deleteUser);

module.exports = router;