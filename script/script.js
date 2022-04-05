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
var Balance = new creation("../pictures/balanceGame.png", "Balance the Objects", "This was a part of the dutch design week game jam");
var drop = new creation("../pictures/dropGame.png", "Drop the brain", "This was a part of the dutch design week game jam");
var Educt = new creation("../pictures/EductDesign.png", "Designing Educt", "This was a group project in which we had to design an app");
var first = new creation("../pictures/firstWebsite.png", "My first Website", "This is the first Website that i ever made");
var portfolio = new creation("../pictures/oldPortfolio.png", "my old Portfolio", "this portfolio was made last year and was one of my first attempts of a proper website");
var vijfluik = new creation("../pictures/Vijfluik.png", "Vijfluik", "this was a website where i had to describe what i think of myself");

var projects = [data_sphere, Balance, drop, Educt, first, portfolio, vijfluik];

for (let i = 0; i < projects.length; i++) {
    document.getElementById("grid1").innerHTML += "<div class=\"card\"><button onclick=\"modalOpenP("+ i +")\"><img src=\""+ projects[i].picture +"\" id=\"img"+ i +"\"></button></div>";
}

var login = new creation("../pictures/inlog-register.png", "Login and Register", "This is an experiment where i made a login and register form that is connected to a database which is localy ran");
var todo = new creation("../pictures/todoList.png", "ToDo List", "this was an experiment where I tried saving things client side, without a database");

var experiments = [login, todo]

for (let j = 0; j < experiments.length; j++) {
    document.getElementById("grid2").innerHTML += "<div class=\"card\"><button onclick=\"modalOpenE("+ j +")\"><img src=\""+ experiments[j].picture +"\" id=\"img"+ j +"\"></button></div>";
}

function modalClose(){
    document.getElementById("modal").style.visibility = "hidden";
}

function modalOpenP(number){
    document.getElementById("modal-image").src = projects[number].picture;
    document.getElementById("modal-title").innerText = projects[number].title;
    document.getElementById("modal-text").innerText = projects[number].text;
    document.getElementById("modal").style.visibility = "visible";
}

function modalOpenE(number){
    document.getElementById("modal-image").src = experiments[number].picture;
    document.getElementById("modal-title").innerText = experiments[number].title;
    document.getElementById("modal-text").innerText = experiments[number].text;
    document.getElementById("modal").style.visibility = "visible";
}