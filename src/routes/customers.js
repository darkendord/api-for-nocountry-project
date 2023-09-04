const { json } = require("express");
const express = require("express");
const userSchema = require("../models/customerInfo");


const router = express.Router();

// create user
router.post("/customers", async(req, res)=>{
    try{
    const user = userSchema(req.body)
    const data = await user.save()
   res.json(data)
   }
    catch(err){
    console.log({message: err})
   }
});

// Get all users
router.get("/customers", async (req, res)=>{
    try{
    const data =  await userSchema.find()
    res.json(data)
   }
   catch(err){
    console.log({message: err})
   }
});


// Get a user
router.get("/customers/:id", async (req, res)=>{
    try{
    const {id} = req.params;
    const data = await userSchema.findById(id)
    res.json(data)
    }
    catch(err){
     console.log({message: err})   
    }
});


// Update a user
router.put("/customers/:id", async(req, res)=>{
    try{
    const {id} = req.params;
    const {name, age, email, ssn, address, phone, type, profileStatus, comments, beneficiaries} = req.body;
    const data = await userSchema.updateOne({_id:id},{$set:{name, age, email, ssn, address, phone, type, profileStatus, comments, beneficiaries}})
    res.json(data)
    }
    catch(err){
     console.log({message: err})   
    }
});


// Delete a user
router.delete("/customers/:id", async (req, res)=>{
    try{
    const {id} = req.params;
    const data = await userSchema.remove({_id:id})
    res.json(data)
    }
    catch(err){
     console.log({message: err})   
    }
});


module.exports = router;