const buttonEl = document.getElementById("btn");
const inputEl = document.getElementById("note");
const listEl = document.getElementById("list");
const allNoteEl = document.getElementById("allNotes");

buttonEl.addEventListener('click', () => {
  const newNote = { noteText: inputEl.value } // define the js object I'm sending in the body of the post request
  const options = {
  method: 'post',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(newNote)
  }
 
  fetch('/note', options)
  .then(response => 
    response.json()
  )
  .then(data => {
    console.log(data);
  });

  addElement();
  inputEl.value = "";
});

const allNotes = () => {
  fetch('/all')
  .then(data => {
    return data.json();
  })
  .then(list => { 
    list.forEach(element => {
      allNoteEl.innerHTML +=
      `<div>${element.noteText}</div><br />`;
    })
  });
}


function addElement () {
  // create a new div element
  const newDiv = document.createElement("div");

  // and give it some content
  const newContent = document.createTextNode(inputEl.value);

  // add the text node to the newly created div
  newDiv.appendChild(newContent);

  document.body.appendChild(newDiv);
}