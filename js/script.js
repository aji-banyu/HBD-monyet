// const form = document.querySelector("form");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const username = form.username.value;
//   const password = form.password.value;

//   const authenticated = authentication(username, password);
//   if (authenticated) {
//     window.location.href = "mbakniyak.html";
//   } else {
//     alert("wrong");
//   }

//   if (username === "") {
//     alert("salah");
//   }
// });

// // function for checking username and password

// function authentication(username, password) {
//   if (username === "utsniyafudhla" || ("utsniya" && password === "beban")) {
//     return true;
//   } else {
//     return false;
//   }
// }

function checkform() {
  var nama = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (nama === "monyet" && password === "beban") {
    window.location.href = "mbakniyak.html";
  } else if (nama === "" && password === "") {
    alert(" di Isilah Pintar...");
  } else if (nama === "") {
    alert("mosok rarti jenengmu");
  } else if (password !== "beban" && password != "") {
    alert("salah password");
  } else if (password === "") {
    alert("passwordnya dooong!!");
  } else {
    alert("Salahh Pintarr...!");
  }
  console.log(nama + "  " + password);
}

if (even.key === "Enter") {
  checkform();
}
