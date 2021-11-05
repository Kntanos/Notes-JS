const Notes = require('./notes');
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(express.static('./'));
app.use(express.json());
app.use(cors());

let noteBook = new Notes

app.get('/', (req, res) => {
  res.render('index.html')
});


app.post('/note', (req, res) => {
  console.log(req.body);
  // res.json(req.body);
  // noteBook.addNote(req.body);
});


app.listen(port, () => {
  console.log(`Notes app listening at http://localhost:${port}`)
})
