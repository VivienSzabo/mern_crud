const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3001;

const FoodeModel = require("./models/Food");

app.use(express.json());

mongoose.connect()


app.get('/', async(req, res) => {
    const food = new FoodeModel({
        foodName:"Apple pie", 
        daysSinceIAte:3});

    try{
        await food.save();
        res.send("insert data")
    }catch(err){
        console.log(err)
    }
});



app.listen(port, () => {
    console.log("Serveris running on port " + port)
});