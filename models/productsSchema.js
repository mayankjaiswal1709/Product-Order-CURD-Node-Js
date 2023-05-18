const mongoose = require('mongoose')
const productSchema = new mongoose.Schema({


    product_id: {
        type: String,
        require: true,

    },
    product_name: {
        type: String,
        require: true,
    },
    product_price: {
        type: String,
        require: true,
    },
    product_image: {
        type: String,
        default: "product"
    },
    product_quantity: {
        type: String,
    },
    


})
productSchema.set('timestamps', true)

module.exports = mongoose.model('product', productSchema)