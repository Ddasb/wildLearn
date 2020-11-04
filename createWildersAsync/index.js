const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Import des Controllers
const wilderController = require('./controllers/wilder')

const app = express();

mongoose.connect(
        'mongodb://localhost:27017/createWilders', {
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

const errorHandler = (controller) => {
    return async (req, res, next) => {
        try {
            await controller(req, res)
        } catch ({
            code,
            message,
            status
        }) {
            res.status(status || 500)
                .json({
                    code,
                    message
                })
        }
    }
}

app.post('/api/wilders', errorHandler(wilderController.create));
app.patch('/api/wilders/:wilderID', errorHandler(wilderController.update));
app.get('/api/wilders', errorHandler(wilderController.getAll));
app.get('/api/wilders/:wilderID', errorHandler(wilderController.getOne));
app.delete('/api/wilders/:wilderID', errorHandler(wilderController.remove));

app.use('*', (req, res) => {
    console.log('test');
    res.status(404).json({
        error: 'Not found'
    });
});

app.listen(3000, error => {
    if (error) {
        console.error(error);
        return false;
    }

    console.log("Server launched");
})