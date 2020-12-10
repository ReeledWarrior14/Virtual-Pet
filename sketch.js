var database;

var name;
var foodAmount;
var turn;

var pet;
var button;
var gamestate = 0;
var gamestate2 = 0;
var petCount;
var petIndex1;

var game;

var r;

var dogsandpets;

function preload(){
  dog1 = loadAnimation('Dog.png');
  dog2 = loadAnimation('dog2.png')
}

function setup() {
  createCanvas(400, 400);
  background('green');

  database = firebase.database();

  game = new GAME();
  game.getState();
  game.start();

  dogsandpets = createSprite(200, 200, 200, 200);
  dogsandpets.addAnimation('dog', dog1);
  dogsandpets.scale = 0.25;
}

function draw(){
  //hi
  r = Math.round(random(1, 15));

  drawSprites();

  if(foodAmount <= 0){
    textSize(50);
    push();
    background('green');
    fill('black');
    text('Game Over', 100, 300);
    pop();
    gamestate2 = 1;
    dogsandpets.addAnimation('dog', dog2);
    drawSprites();
  }
}