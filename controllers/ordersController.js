let Order = require('../models/ordersSchema');

// order create/add 

const addOrder = async (req, res) => {
    // console.log("new Orderadded**", req.body);
    const newOrder = new Order(req.body);
    await newOrder.save()
    res.status(201).json({
        success: true,
        message: "order added successully",
    })

}

// get All order details

const orderList = async (req, res) => {
    const allOrder = await Order.find()
    res.status(200).send({
        success: true,
        message: "all order are find successfully  list  below",
        OrderData: allOrder,
    })
}
// get one order details


const oneOrder = async (req, res) => {
    const singleOrder = await Order.findById(req.params.id)
    res.status(200).send({
        success: true,
        message: "all order are find successfully  list  below",
        OrderData: singleOrder,
    })
}


module.exports = {
    addOrder,
    orderList, 
    oneOrder,
}