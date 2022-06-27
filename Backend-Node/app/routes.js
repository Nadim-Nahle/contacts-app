const express = require('express');
const { register, login } = require('../controllers/UserController');
const { addContact, getContacts, deleteContacts, updateContact } = require('../controllers/ContactController');
const router =  express.Router();
const auth = require('../middleware/AuthMiddleware')

//ROUTES

//AUTH ROUTES
router.post('/v1/auth/register', register)
router.post('/v1/auth/login', login)

//CONTACT ROUTES
router.post('/v1/auth/addcontact', auth, addContact);
router.get('/v1/auth/contacts', auth, getContacts);
router.delete('/v1/auth/delete/:id', auth, deleteContacts);
router.patch('/v1/auth/update/:id', auth, updateContact);


module.exports = router;