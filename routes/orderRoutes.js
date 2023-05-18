const express = require('express')
const router = express.Router()
const order = require('../controllers/ordersController')

router.post("/addorder", order.addOrder);
router.get("/allorders", order.orderList);
router.get("/oneorder/:id", order.oneOrder);

module.exports = router


