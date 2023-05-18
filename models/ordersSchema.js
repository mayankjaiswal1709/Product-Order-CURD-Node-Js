const mongoose = require('mongoose')
const orderSchema = new mongoose.Schema({

    order_id: {
        type: "String",
        required: true,
        
        
    },
    product_id: [{
        type: "String",
        required: true,   
    }],

})


orderSchema.set('timestamps', true)
module.exports = mongoose.model('order', orderSchema)

