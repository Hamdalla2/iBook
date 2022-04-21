const mongoose = require('mongoose');

const database = () => {
  mongoose.connect("mongodb+srv://hamdalla9:p2ssvv0rd@cluster0.kt3y6.mongodb.net/iBook?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(res => console.log('connected to database'))
    .catch(err => console.log(err));
};

module.exports = database;
