function navbar(){
  var x = document.getElementById("toggle-navbar");
  if (x.style.display === "block") {
      x.style.display = "none";
  } else {
      x.style.display = "block";
  }
}

function creation(picture, title, text){
    this.picture = picture;
    this.title = title;
    this.text = text;
}

var data_sphere = new creation("../pictures/dataSphere.png", "Data Sphere", "This is a project where i and a small group made a simulation our solar system");

var creations = [data_sphere]

function modalClose(){
    document.getElementById("modal").style.visibility = "hidden";
}

function modalOpen(number){
    document.getElementById("modal-image").src = creations[number].picture;
    document.getElementById("modal-title").innerText = creations[number].title;
    document.getElementById("modal-text").innerText = creations[number].text;
    document.getElementById("img" + number).src = creations[number].picture;
    document.getElementById("modal").style.visibility = "visible";
}