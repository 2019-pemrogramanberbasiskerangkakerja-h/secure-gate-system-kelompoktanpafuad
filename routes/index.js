var express = require('express');
var router = express.Router();
var authMiddleware = require('../middlewares/auth.js')
var index = require('../controllers/index');

router.get('/', index.index); // page dashboard
router.get('/indexuser', index.indexUser); // page user
router.get('/adduser', index.addUser); // page tambah user
router.post('/adduser', index.postUser); // post tambah user
router.get('/getuser/:user_nrp', index.getUser); // get info user
router.get('/deluser/:user_nrp', index.delUser); // delete user by id

router.get('/indexgate', index.indexGate); // halaman gate
router.get('/addgate', index.addGate); // halaman tambah gate
router.post('/addgate', index.postGate); // post gate
router.get('/getgate/:gate_id', index.getGate); // get gate by id
router.get('/delgate/:gate_id', index.delGate); // delete gate by id

router.get('/loginuser', authMiddleware.loginHandle, index.getLogin); // page login
router.post('/loginuser', index.postLogin);
router.get('/logoutuser', index.getLogout);

router.get('/indexgroup', index.indexGroup); // halaman group
router.get('/addgroup', index.addGroup); // halaman group
router.post('/addgroup', index.postGroup); // halaman group
router.get('/delgroup/:user/:gate', index.delGroup);

router.get('/login', authMiddleware.loginHandle, index.loginPage); // page login
router.get('/register', authMiddleware.loginHandle, index.registerPage); // page register

router.post('/login', index.login);
router.get('/logout', index.logout);
router.post('/register', index.register);

module.exports = router;
