function sayHello() {
  alert("Hello! Thanks for visiting my website 😊");
}

document.addEventListener('DOMContentLoaded', function () {
  var btn = document.getElementById('surprise-btn');
  if (btn) {
    btn.addEventListener('click', sayHello);
  }
});
