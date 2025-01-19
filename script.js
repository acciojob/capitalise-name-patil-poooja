//your JS code here. If required.
let x = document.getElementById("fname");
x.addEventListener("onfocusout", myFocusFunction, true);

function myFocusFunction() {
  //alert("called");
  let text=document.getElementById("fname").value;
  document.getElementById("fname").value=text.toUpperCase();
}