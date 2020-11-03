const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const WilderSchema = new Schema({
    identity: {
        name: {type: String, unique: true},
        firstName: {type: String, unique: true},
        age: {type: String},
    },
    skills: [{
        title: String,
        votes: Number
    }]
});

module.exports = mongoose.model("wilder", WilderSchema);