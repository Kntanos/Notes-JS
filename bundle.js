(() => {
  // index.js
  var buttonEl = document.getElementById("btn");
  var inputEl = document.getElementById("note");
  var listEl = document.getElementById("list");
  var allNoteEl = document.getElementById("allNotes");
  buttonEl.addEventListener("click", () => {
    const newNote = { noteText: inputEl.value };
    const options = {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newNote)
    };
    fetch("/note", options).then((response) => response.json()).then((data) => {
      console.log(data);
    });
    addElement();
    inputEl.value = "";
  });
  function addElement() {
    const newDiv = document.createElement("div");
    const newContent = document.createTextNode(inputEl.value);
    newDiv.appendChild(newContent);
    document.body.appendChild(newDiv);
  }
})();
