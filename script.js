//example function call to display a dialog box
//Comment
//Comment
// alert("welcome, this isn't a javascript popup alert");

function submitForm(name, hometown) {
  //search the DOM for a specific tag with the id "guestlist"
  var guestlist = document.getElementById("guestlist");
  var n = document.getElementById("name");
  var h = document.getElementById("hometown");
  guestlist.innerHTML += "<li>" + name + ". " + hometown + "</li>";
  n.value = "";
  h.value = "";
  n.focus();
  return false;
}