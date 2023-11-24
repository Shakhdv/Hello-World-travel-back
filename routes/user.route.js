const { usersController } = require('../controllers/user.controller')
const { Router } = require('express')
const authMiddleware = require('../models/middlewares/auth.middleware')
const router = Router()
//

router.get('/users', usersController.getAllUsers)
router.get('/user', authMiddleware, usersController.getOneUser)
router.post('/sign', usersController.addUsers)
router.post('/login', usersController.login)

module.exports = router