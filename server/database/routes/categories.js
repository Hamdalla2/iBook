const mongoose = require('mongoose');
const Router = require('express').Router();

// new schema for hosted games
const categorySchema = mongoose.Schema({
	"title": String,
	"books": Array
});

const Category = mongoose.model('Category', categorySchema);

// finds all
Router.get('', (req, res) => {
    Category.find({}, (err, data) => {
        if (err) res.sendStatus(500);
        res.json(data);
    });
})

// finds one
Router.get("/:title", (req, res) => {
    Category.find(req.params, (err, data) => {
        if (err) {
            res.sendStatus(500);
        } else if (data.length === 0) {
            res.status(500).send('Category not found');
        } else {
            res.json(data);
        }
    });
});

// adds one
Router.post('', (req, res) => {
    Category.create(req.body, (err, data) => {
        if (err) res.status(500).send(err);
        res.json(data);
    })
})

module.exports = Router;
