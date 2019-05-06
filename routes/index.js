var express = require('express');
var router = express.Router();
var authMiddleware = require('../middlewares/auth.js')
var index = require('../controllers/index');

router.get('/', authMiddleware.checkSignIn, index.index); // page dashboard
router.get('/addUser', authMiddleware.checkSignIn, index.addUser); // page tambah user
router.get('/editUser', authMiddleware.checkSignIn, index.editUser); // page tambah user
router.get('/addGate', authMiddleware.checkSignIn, index.addGate); // page tambah gate
router.get('/editGate', authMiddleware.checkSignIn, index.editGate); // page tambah gate
router.get('/addRole', authMiddleware.checkSignIn, index.addRole); // page tambah role
router.get('/editRole', authMiddleware.checkSignIn, index.editRole); // page tambah role

router.get('/login', authMiddleware.loginHandle, index.loginPage); // page login
router.get('/register', authMiddleware.loginHandle, index.registerPage); // page register

router.post('/login', index.login);
router.get('/logout', index.logout);
router.post('/register', index.register);

module.exports = router;
