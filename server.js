const express = require('express');
const { dirname } = require('path');
const app = express();
const path = require('path');
const notes = require('./db/db.json');
// const noteSave = require('./public/assets/js/index');
const fs = require('fs');

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

//api routes
app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/notes.html'));
});

//create apis
app.get('/api/notes', (req, res) => {
  console.log('reached');
  console.log('notes');
  res.json(notes);
});

//post api/notes should receive new note
app.post('/api/notes', (req, res) => {
  console.log(req.body);
  var newNote = req.body;
  res.sendFile(path.join(__dirname, './db/db.json'));
  fs.readFile('./db/db.json', 'utf-8', (err, data) => {
    if (err) throw err;
    let newTask = JSON.parse(data);
    newTask.push(newNote);

    fs.writeFile('./db/db.json', JSON.stringify(newTask), 'utf-8', (err) => {
      if (err) throw err;
      console.log('success');
    });
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.listen(3001, () => {
  console.log(`API server now on port 3001`);
});

//Will says we need app.use(express.json())
