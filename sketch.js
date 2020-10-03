
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var tree, treeImg
var boi, boiImg
var ground
var stoneImg, stone1

function preload()
{
	treeImg = loadImage("tree.png");
	boiImg = loadImage("boy.png");	
	stoneImg = loadImage("stone.png");	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree = createSprite(960,300,10,10);
	tree.addImage("tree" ,treeImg);
	tree.scale = 0.4;

	boi = createSprite(200,450,10,10);
	boi.addImage("boi", boiImg);
	boi.scale = 0.12;

	ground = createSprite(600, 575, 1200, 10);

	stone1 = createSprite(200,200,10,10);
	stone1.addImage("stone1", stoneImg);
	stone1.sclae = 1;


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightBlue");
  
  drawSprites();
 
}



