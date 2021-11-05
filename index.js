const buttonEl = document.getElementById("btn");
const inputEl = document.getElementById("note");


buttonEl.addEventListener('click', () => {
  const options = {
  method: 'post',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify()
  }
 
  fetch('/note', options)
  // .then(response => 
  //   response.json()
  // )
  // .then(data => 
  //   console.log(data)
  // );
  inputEl.value = "";
})

