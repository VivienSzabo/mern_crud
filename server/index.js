const express = require('express')
const app = express()
const mongoose = require('mongoose')
const port = 3000

mongoose.connect()






app.listen(port, () => {
    console.log("Serveris running on port " + port)
});