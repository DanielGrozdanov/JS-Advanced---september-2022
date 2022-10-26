function notify(message) {
  let div = document.getElementById("notification");
  div.innerText = message;
  div.style.display = "block";

  div.addEventListener('click', toggleDisplayStyle)


  function toggleDisplayStyle(e) {
    e.target.style.display = "none";
  }
}