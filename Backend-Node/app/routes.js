const express = require('express');
const { register } = require('../controllers/UserController')
const router =  express.Router();

//ROUTES
router.post('/v1/register', register)

module.exports = router;