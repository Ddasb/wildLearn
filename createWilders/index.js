const express = require('express');
const mongoose = require('mongoose');

mongoose
    .connect(
        'mongodb://localhost:27017/createWilders',
        {
            
        }
    )
    .then(() => {
        console.log("Database connected !")
    })

const app = express();

app.listen(3000, error => {
    if(error){
        console.error(error);
        return;
    }

    console.log("Server launched")
})