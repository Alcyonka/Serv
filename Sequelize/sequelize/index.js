const express = require("express");
const Sequelize = require('sequelize');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const sequelize = new Sequelize('notedb', 'postgres', '123', {
  host: 'localhost',
  dialect: 'postgres'
});

const Note = sequelize.define('note', {
  note: Sequelize.STRING
},
{
  timestamps: false,
});

sequelize.sync();

app.get('/notes', (req, res) => {
  Note.findAll().then(notes => res.json(notes));
});

app.get('/note/:id', (req, res) => {
  Note.findByPk(req.params.id).then(note => {
    if (note) {
      res.json(note);
    } else {
      res.status(404).send();
    }
  });
});

app.post('/note', (req, res) => {
  Note.create(req.body).then(note => res.json(note));
});

app.delete('/note/:id', (req, res) => {
  Note.destroy({
    where: {
      id: req.params.id
    }
  }).then(() => res.status(204).send());
});

app.put('/note/:id', async (req, res) => {
  try {
    const [_, updatedUser] = await Note.update(req.body, {
      where: {
        id: req.params.id
      }
    });

    if (updatedUser) {
      res.json(updatedUser);
    } else {
      res.status(404).send();
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(3000, () => console.log('Running on port 3000...'));
/*
const db = require("./helper")

app.use(express.urlencoded({
  extended: true
}));
 
app.use(express.json())
app.listen(3000, () => console.log("Listening on port 3000"));

app.get("/notes", db.getNotes);
app.get("/note/:id", db.getNoteById);
app.put("/note/:id", db.updateNoteById);
app.post("/note", db.createNote);
app.delete("/note/:id", db.deleteNote);*/