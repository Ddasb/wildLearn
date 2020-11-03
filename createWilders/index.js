const express = require('express');
const mongoose = require('mongoose');

// Import du Schéma
const Wilder = require('./models/wilder')

const app = express();

mongoose
    .connect(
        'mongodb://localhost:27017/createWilders',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            autoIndex: true
        }
    )
    .then(() => {
        console.log("Database connected !")
    })
    .catch((err) => {
        console.error(err)
    });

app.get('/create-wilder', (req, res) => {
    // Insertion d'un wilder
    Wilder
        .init()
        .then(() => {
            const firstWilder = new Wilder({
                identity: {
                    name: 'Da Silva Bregieiro',
                    firstName: 'Damien',
                    age: 20
                },
                skills: [
                    {title: 'NodeJS', votes: 3},
                    {title: 'ReactJS', votes: 2},
                    {title: 'Javascript', votes: 5}
                ]
            });

            return firstWilder;
        })
        .then((resFirstWilder) => {
            return resFirstWilder.save();
        })
        .then(() => {
            res.send("Vous avez réussit !");
        })
        .catch((err) => {
            res.send("Vous n'avez pas réussit !");
        })
});

app.listen(3000, error => {
    if(error){
        console.error(error);
        return false;
    }

    console.log("Server launched");
})