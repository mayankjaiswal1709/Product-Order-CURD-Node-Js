let product = require('../models/productsSchema');

// Product  add 

const addProduct = async (req, res) => {
    // console.log("new Product **", req.body);
    const newProduct = new product(req.body);
    await newProduct.save()
    res.status(201).json({
        success: true,
        message: "Product added successully",
    })

}

// Update Product details

const ProductInfoEdit = async (req, res) => {
    // console.log(req.params.id);
    try {
        const update = await product.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        res.json(update);


    } catch (error) {
        res.send("error" + error)
    }
}

// Delete Product

const deleteProduct = async (req, res) => {
    await product.findByIdAndDelete(req.params.id);
    try {
        res.status(202).send({
            success: true,
            message: 'Product  Deleted Successfuly'
        })

    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Product not deleted please try again" + error
        })
    }
}

// get All Product details

const allProducts = async (req, res) => {
    const allProducts = await product.find()
    res.status(200).send({
        success: true,
        message: "all Product are find successfully  list  below",
        productData: allProducts,
    })
}
// get one Product  details


const oneProduct = async (req, res) => {
    const singleProduct = await product.findById(req.params.id)
    res.status(200).send({
        success: true,
        message: "all Products are find successfully  list  below",
        productData: singleProduct,
    })
}


module.exports = {
    addProduct,
    ProductInfoEdit,
    deleteProduct,
    allProducts,
    oneProduct,
}