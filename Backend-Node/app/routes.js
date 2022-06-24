const express = require('express');
const { register, login } = require('../controllers/UserController');
const { addContact } = require('../controllers/ContactController');
const router =  express.Router();

//ROUTES

//AUTH ROUTES
router.post('/v1/auth/register', register)
router.post('/v1/auth/login', login)

//CONTACT ROUTES
router.post('/v1/addcontact', addContact)


module.exports = router;