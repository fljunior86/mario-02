var mario;
var xm = 100;
var ym = 150;
var lm = 696/5;
var hm = 959/5;

function preload(){
  mario = loadImage("mario.png");
}

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(220);
  
  imageMode(CENTER);
  image(mario,xm,ym,lm,hm);
  
  var d = dist(mouseX,mouseY,xm,ym);
  
  if(d<=(lm/2) && mouseIsPressed){
    xm = mouseX;
    ym = mouseY;
  }
 
  
}