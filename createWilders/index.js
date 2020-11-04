const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Import des Controllers
const wilderController = require('./controllers/wilder')

const app = express();

mongoose.connect(
    'mongodb://localhost:27017/createWilders',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        autoIndex: true,
        useFindAndModify: false
    }
)
.then(() => {
    console.log("Database connected !")
})
.catch((err) => {
    console.error(err)
});

app.use(bodyParser.json());

app.post('/api/wilder/create', wilderController.create);
app.delete('/api/wilder/remove', wilderController.remove);
app.patch('/api/wilder/update', wilderController.update);
app.get('/api/wilder/getAll', wilderController.getAll);

app.listen(3000, error => {
    if(error){
        console.error(error);
        return false;
    }

    console.log("Server launched");
})