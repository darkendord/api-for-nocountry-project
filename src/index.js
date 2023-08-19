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

// mongodb connection
const connectDB = async()=>{
try{
const connect = await mongoose.connect(process.env.MONGODB_URI);
console.log(`MongoDB Connected`)
}catch(err){
    console.log(error);
    process.exit(1);
}
}


// Routes
app.get("/", (req, res)=>{
    res.send("Welcome to my app");
});




connectDB().then(() => {
 app.listen(port, ()=> console.log("Server listening on port", port));
});
