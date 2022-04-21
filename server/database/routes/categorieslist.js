const mongoose = require('mongoose');
const Router = require('express').Router();

// new schema for hosted games
const categoryListSchema = mongoose.Schema({
    "categories": Array
});
const CategoryList = mongoose.model('CategoryList', categoryListSchema);

// finds all
Router.get('', (req, res) => {
    CategoryList.find({}, (err, data) => {
        if (err) res.sendStatus(500);
        res.json(data);
    });
})

// adds one
Router.post('', (req, res) => {
    CategoryList.create(req.body, (err, data) => {
        if (err) res.status(500).send(err);
        res.json(data);
    })
})

module.exports = Router;
