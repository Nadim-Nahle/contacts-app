const express = require('express');
const { register, login } = require('../controllers/UserController');
const { addContact, getContacts } = require('../controllers/ContactController');
const router =  express.Router();
const auth = require('../middleware/AuthMiddleware')

//ROUTES

//AUTH ROUTES
router.post('/v1/auth/register', register)
router.post('/v1/auth/login', login)

//CONTACT ROUTES
router.post('/v1/addcontact', auth, addContact);
router.get('/v1/contacts', auth, getContacts);


module.exports = router;