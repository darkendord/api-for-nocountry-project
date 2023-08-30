const { json } = require("express");
const express = require("express");
const productSchema = require("../models/productInfo");


const router = express.Router();

// create product
router.post("/customers/:id/products", async(req, res)=>{
    try{
    const product = productSchema(req.body)
    const data = await product.save()
   res.json(data)
   }
    catch(err){
    console.log({message: err})
   }
});

// Get all products
router.get("/customers/:id/products", async (req, res)=>{
    try{
    const data =  await productSchema.find()
    res.json(data)
   }
   catch(err){
    console.log({message: err})
   }
});


// Get a product
router.get("/customers/:id/products/:id", async (req, res)=>{
    try{
    const {id} = req.params;
    const data = await productSchema.findById(id)
    res.json(data)
    }
    catch(err){
     console.log({message: err})   
    }
});


// Update a product
router.put("/customers/:id/products/:id", async(req, res)=>{
    try{
    const {id} = req.params;
    const {product_name, balance, status, product_type, product_number, expirationDate,activities} = req.body;
    const data = await productSchema.updateOne(
        {_id:id},
        {
            $set:{
            product_name, 
            balance, 
            status, 
            product_type, 
            product_number, 
            expirationDate,
            activities
        }})
    res.json(data)
    }
    catch(err){
     console.log({message: err})   
    }
});


// Delete a product
router.delete("/customers/:id/products/:id", async (req, res)=>{
    try{
    const {id} = req.params;
    const data = await productSchema.remove({_id:id})
    res.json(data)
    }
    catch(err){
     console.log({message: err})   
    }
});


module.exports = router;