//your JS code here. If required.
const  username = document.getElementById("username");
const password = document.getElementById("password");
const checkBox = document.getElementById("checkbox");
const btn = document.getElementById("submit");
const myform = document.getElementById("myForm");
const existingbtn = document.getElementById("existing");

if (localStorage.getItem("username")) {
      existing.style.display = "block";
    }

form.addEventListener("submit", function(event) {

      event.preventDefault();

      alert(`Logged in as ${username.value}`);

      if (checkbox.checked) {

        localStorage.setItem("username", username.value);
        localStorage.setItem("password", password.value);

        existing.style.display = "block";

      }

      else {

        localStorage.removeItem("username");
        localStorage.removeItem("password");

        existing.style.display = "none";

      }

    });

existing.addEventListener("click", function() {

      alert(`Logged in as ${localStorage.getItem("username")}`);

    });
