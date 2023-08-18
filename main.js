var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var roverWidth = 100;
var roverHeight = 90;
var roverX = 10;
var roverY = 10;

var nasaimgs = ["marte1.jpg","marte2.jpg","marte3.jpg", "marte4.jpg"];
randomNumber = Math.floor(Math.random()*4)
var images = nasaimgs[randomNumber];
var roverIMG = "rover.png";

function add(){
    imagesTag = new Image();
    imagesTag.onload = uploadbackg;
    imagesTag.src = images

    roverTag = new Image();
    roverTag.onload = uploadrover;
    roverTag.src = roverIMG
}
function uploadbackg(){
    ctx.drawImage(imagesTag, 0, 0, canvas.width, canvas.height)
}
function uploadrover(){
    ctx.drawImage(roverTag, roverX, roverY, roverWidth, roverHeight)
}

window.addEventListener("keydown", myKeyDown)
function myKeyDown(e){
    keyPressed = e.keyCode;
    if (keyPressed == "37") {
        left()        
    }
    if (keyPressed == "38") {
        up()        
    }
    if (keyPressed == "39") {
        right()        
    }
    if (keyPressed == "40") {
        down()        
    }
}

function left(){
    if (roverX>=0) {
        roverX = roverX - 8;
        uploadbackg()
        uploadrover()
    }
}
function up(){
    if (roverY>=0) {
        roverY = roverY - 8;
        uploadbackg()
        uploadrover()
    }
}
function right(){
    if (roverX<=710) {
        roverX = roverX + 8;
        uploadbackg()
        uploadrover()
    }
}
function down(){
    if (roverY<=510) {
        roverY = roverY + 8;
        uploadbackg()
        uploadrover()
    }
}