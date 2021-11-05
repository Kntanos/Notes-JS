const Notes = require('../notes');

describe ('.addNote', () => {
  it ('adds a new note', () => {
    let notes = new Notes;
    notes.addNote("Hello");

    expect(notes.list.length).toEqual(1);
  })
})

describe ('.listAll', () => {
  it ('list all the notes', () => {
    let notes = new Notes;
    notes.addNote("Hello");
    notes.addNote("Bye");

    expect(notes.listAll()).toEqual(["Hello", "Bye"]);
  })
})