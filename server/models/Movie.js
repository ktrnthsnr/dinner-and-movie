const { Schema, Model } = require('mongoose');
const Category = require('./Category');

const movieSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
    },
    time: {
        type: Number,
        required: true
    },
    image: {
        type: String
    },
    category: [Category]
});

const Movie = new Model('Movie', movieSchema);

module.exports = Movie;