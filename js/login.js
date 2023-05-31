let uname = document.getElementById("username");
let pwd = document.getElementById("pass");
let btn = document.querySelector(".b1");
let close = document.querySelector(".close");
let log = document.querySelector(".login");
function show() {
  let shwPwd = document.getElementById("pass");
  let eye = document.querySelector(".showP");
  if (shwPwd.type === "password") {
    shwPwd.type = "text";
    eye.innerText = "";
  } else {
    shwPwd.type = "password";
    eye.innerText = "";
  }
}
log.onclick = function () {
  document.querySelector(".logincontainer").style.display = "grid"
  document.querySelector(".iphone").style.opacity = "50%"
}
close.onclick = function () {
  document.querySelector(".logincontainer").style.display = "none"
  document.querySelector(".iphone").style.opacity = "10"
}
function login() {
  let uname = document.getElementById("username").value;
  let pwd = document.getElementById("pass").value;
  let msg = document.getElementById("msg")
  let name1 = localStorage.getItem("name1")
  let uname1 = localStorage.getItem("uname1")
  let pass1 = localStorage.getItem("pass1")
  if (uname == uname1 && pwd == pass1) {
    alert("Login Successful")
    document.querySelector(".logincontainer").style.display = "none"
    msg.innerText = `Welcome ${name1}`
  }
  else if (uname==uname1 && pwd!=pass1) {
    alert("Incorrect Password")
  }
  else if (uname!=uname1 && pwd==pass1) {
    alert("Incorrect Username")
  }
  else{
    alert("User not exist")
  }
}
window.addEventListener("DOMContentLoaded", function() {
  let name1 = localStorage.getItem("name1");
  let uname1 = localStorage.getItem("uname1");
  let pass1 = localStorage.getItem("pass1");
  let msg = document.getElementById("msg");

  if (name1 && uname1 && pass1) {
    msg.innerText = `Welcome ${name1}`;
    document.querySelector(".logincontainer").style.display = "none";
  }
});