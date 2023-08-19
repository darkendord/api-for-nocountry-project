const express = require("express");
const mongoose = require ("mongoose");
const cors = require('cors');
require("dotenv").config();
const app = express();
const port = process.env.PORT || 9000;
const userRoutes = require("./routes/customers")
const employeeRoutes = require("./routes/employees")

app.use(cors());


// middleware
app.use(express.json());
app.use("/api", userRoutes);
app.use("/api", employeeRoutes);


// Routes
app.get("/", (req, res)=>{
    res.send("Welcome to my app");
});


// mongodb connection
mongoose.connect(process.env.MONGODB_URI)
.then(()=> console.log("Connected to mongodb Altlas"))
.catch((err)=>console.error(err)); 

app.listen(port, ()=> console.log("Server listening on port", port));