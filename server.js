const express = require('express');
const { dirname } = require('path');
const app = express();
const path = require('path');
const notes = require('./db.db.json')

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

//api routes
app.get('/notes', (req, res) => {
  res.sendFile(__dirname + '/notes.html');
});

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(3001, () => {
  console.log(`API server now on port 3001`);
});

//create apis
app.get('/api/notes', (req, res) => {
    console.log('reached');
    console.log('notes');
    res.json(notes);
}

//post api/notes should receive new note
app.post('/api/notes' (req, res)=>{
    console.log(req.body);
    req.body.id =notes.length.toString();

});