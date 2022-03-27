function navbar(){
  var x = document.getElementById("toggle-navbar");
  if (x.style.display === "block") {
      x.style.display = "none";
  } else {
      x.style.display = "block";
  }
}