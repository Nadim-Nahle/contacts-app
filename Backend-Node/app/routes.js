const express = require('express');
const { register, login } = require('../controllers/UserController');
const { addContact } = require('../controllers/ContactController');
const router =  express.Router();
const auth = require('../middleware/AuthMiddleware')

//ROUTES

//AUTH ROUTES
router.post('/v1/auth/register', register)
router.post('/v1/auth/login', login)

//CONTACT ROUTES
router.post('/v1/addcontact', auth, addContact)


module.exports = router;