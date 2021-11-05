const buttonEl = document.getElementById("btn");
const inputEl = document.getElementById("note");


buttonEl.addEventListener('click', () => {
  let newNote = inputEl.value;
  fetch('/')
  .then ((response) => {
    return response.json();
  })
  .then ((data) => {
    console.log(data);
  });
  inputEl.value = "";
})

