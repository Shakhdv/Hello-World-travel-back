const {orderController} = require('../controllers/orders.controller')
const {Router} = require('express')

const router = Router()


router.post('/order',orderController.addOrders)
router.get('/order',orderController.getOrders)

module.exports = router