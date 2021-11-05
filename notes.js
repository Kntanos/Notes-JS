class Notes {

  constructor() {
    this.list = [];
  }

  addNote(note) {
    this.list.push(note);
  }

  listAll() {
    return this.list;
  }
}

module.exports = Notes;