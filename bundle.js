(() => {
  // index.js
  var buttonEl = document.getElementById("btn");
  var inputEl = document.getElementById("note");
  buttonEl.addEventListener("click", () => {
    const options = {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify()
    };
    fetch("/note", options);
    inputEl.value = "";
  });
})();
