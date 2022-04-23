const express = require('express');
const { dirname } = require('path');
const app = express();
const path = require('path');

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

//api routes
app.get('/notes', (req, res) => {
  res.sendFile(__dirname + '/public/notes.html');
});

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(3001, () => {
  console.log(`API server now on port 3001`);
});
