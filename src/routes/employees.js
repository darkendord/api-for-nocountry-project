const { json } = require("express");
const express = require("express");
const employeeSchema = require("../models/employeeInfo");


const router = express.Router();

// create user
router.post("/employees", async(req, res)=>{
    try{
    const user = employeeSchema(req.body)
    const data = await user.save()
   res.json(data)
   }
    catch(err){
    console.log({message: err})
   }
});

// Get all users
router.get("/employees", async (req, res)=>{
    try{
    const data =  await employeeSchema.find()
    res.json(data)
   }
   catch(err){
    console.log({message: err})
   }
});


// Get a user
router.get("/employees/:id", async (req, res)=>{
    try{
    const {id} = req.params;
    const data = await employeeSchema.findById(id)
    res.json(data)
    }
    catch(err){
     console.log({message: err})   
    }
});


// Update a user
router.put("/employees/:id", async(req, res)=>{
    try{
    const {id} = req.params;
    const {name, employeeId, password} = req.body;
    const data = await employeeSchema.updateOne({_id:id},{$set:{name, employeeId, password}})
    res.json(data)
    }
    catch(err){
     console.log({message: err})   
    }
});


// Delete a user
router.delete("/employees/:id", async (req, res)=>{
    try{
    const {id} = req.params;
    const data = await employeeSchema.remove({_id:id})
    res.json(data)
    }
    catch(err){
     console.log({message: err})   
    }
});


module.exports = router;