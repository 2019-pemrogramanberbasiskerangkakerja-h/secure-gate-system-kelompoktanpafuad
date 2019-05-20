var express = require('express');
var router = express.Router();
var authMiddleware = require('../middlewares/auth.js')
var index = require('../controllers/index');

router.get('/', index.index); // page dashboard
router.get('/adduser', index.addUser); // page tambah user
router.get('/edituser', index.editUser); // page tambah user

router.get('/indexgate', index.indexGate); // halaman gate
router.get('/addgate', index.addGate); // halaman tambah gate
router.post('/addgate', index.postGate); // post gate
router.get('/getgate/:gate_id', index.getGate); // get gate by id
router.get('/delgate/:gate_id', index.delGate); // delete gate by id

router.get('/login', authMiddleware.loginHandle, index.loginPage); // page login
router.get('/register', authMiddleware.loginHandle, index.registerPage); // page register

router.post('/login', index.login);
router.get('/logout', index.logout);
router.post('/register', index.register);

module.exports = router;
