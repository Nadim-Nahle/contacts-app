const express = require('express');
const { register, login } = require('../controllers/UserController')
const router =  express.Router();

//ROUTES
router.post('/v1/register', register)
router.post('/v1/login', login)

module.exports = router;