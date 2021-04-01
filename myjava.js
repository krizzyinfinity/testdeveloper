/////////////////function for applying the style to Sign in element /////////////////////////
window.onclick = myFunction;

function myFunction() {
  var myElement = document.getElementsByClassName("mya")[0];
  var newElement = myElement.setAttribute("style", "background-color: #9fd8df; border:  1px solid blue");
setTimeout(function() {
myElement.setAttribute("style", "background-color: white; border: 0");
}, 1000);
}

/////////////////////////////// function for toggle the visibility of password///////////////////////////
const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#password");

togglePassword.addEventListener("click", function (e) {
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
    this.classList.toggle("fa-eye-slash");
});
/////////////////////email validation//////////////////////
function validation() {

    var email = document.getElementById("myEmail").value;
 var text = "";
if(/\S+@\S+\.\S+/.test(email)) {
  document.getElementById("myEmail").setAttribute("style", "border-color: #00ff00");
}else {
    text = "Please enter a valid email address";

    document.getElementById("demo").setAttribute("style", "color: #ff0000");
    document.getElementById("myEmail").setAttribute("style", "border-color: #ff0000");
}
document.getElementById("demo").innerHTML = text;

    }
