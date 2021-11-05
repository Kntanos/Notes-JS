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


app.post('/', (req, res) => {
  console.log(req);
  // const options = {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json';
  //   },
  //   body: JSON.stringify({req})
  // }
  // fetch('/', options)
  // .then((result) => {
  //   return result.json();
  // })
  // .then((data) => {
  //   console.log(data);
  // })
  res.send('Hello!');
});


app.listen(port, () => {
  console.log(`Notes app listening at http://localhost:${port}`)
})
