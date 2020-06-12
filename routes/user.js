const express = require('express')
const router = express.Router();

const userController = require('../controllers/user')

router.post('/register', userController.register)
router.put('/update/:usuario_id', userController.update)
router.post('/login', userController.login)

module.exports = router
