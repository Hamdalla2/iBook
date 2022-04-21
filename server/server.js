const cookieParser = require('cookie-parser');
const mongo = require('./database');
const express = require('express');
const path = require('path');
const cors = require('cors');

// Creates a server
const app = express();

mongo();

// Define what the server will use
app.use(cors());
app.use(express.static(__dirname + '/../build'));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/books', require('./database/routes/books'));
app.use('/categories', require('./database/routes/categories'));
app.use('/categorieslist', require('./database/routes/categorieslist'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
})

const port = 5000;
const host = '0.0.0.0';

app.listen(port, host, () => {
  console.log('Server started on port: ' + port);
});

module.exports = app;
