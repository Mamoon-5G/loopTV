function signup() {
    let name = document.getElementById("name").value
    let username = document.getElementById("username").value
    let age = document.getElementById("age").value
    let email = document.getElementById("email").value
    let pass = document.getElementById("pass").value
    if (name !== "" && username !== "" && age !== "" && email !== "" && pass !== "") {
        localStorage.setItem("name1", name);
        localStorage.setItem("uname1", username);
        localStorage.setItem("age1", age);
        localStorage.setItem("email1", email);
        localStorage.setItem("pass1", pass);
        if (confirm("SignUp Successful")) {
            window.location = "index.html";
        }
    } else {
        alert("Please fill all the details");
    }
}
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