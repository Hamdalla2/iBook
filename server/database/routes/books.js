const mongoose = require('mongoose');
const Router = require('express').Router();

// new schema for hosted games
const bookSchema = mongoose.Schema({
    "id": Number,
    "image": String,
    "title": String,
    "author": String,
    "reviewedBy": String,
    "publishedOn": String,
    "description": String
});
const Book = mongoose.model('Book', bookSchema);

// finds all
Router.get('', (req, res) => {
    Book.find({}, (err, data) => {
        if (err) res.sendStatus(500);
        res.json(data);
    });
})

// finds one
Router.get("/:id", (req, res) => {
    Book.find(req.params, (err, data) => {
        if (err) {
            res.sendStatus(500);
        } else if (data.length === 0) {
            res.status(500).send('Book not found');
        } else {
            res.json(data);
        }
    });
});

// adds one
Router.post('', (req, res) => {
    Book.create(req.body, (err, data) => {
        if (err) res.status(500).send(err);
        res.json(data);
    })
})

module.exports = Router;
