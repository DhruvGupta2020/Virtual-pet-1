var dog, Happydog ;
var dogImage, HappydogImage;
var foodS, foodStock;
var database;

function preload()
{
  dogImage = loadImage("images/dogImg.png");
  HappydogImage = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
    dog = createSprite(250,300,50,50);
    dog.addImage(dogImage);
    dog.scale = 0.2;
     foodStock = database.ref('Food');
     foodStock.on('value',readStock);
}


function draw() {  
  background (46, 139, 87)
  drawSprites();
  textSize(25);
  fill("white");
stroke(50);
  text("Food remaining:"+ foodS,150,200);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(HappydogImage);
  }
  //add styles here

}
function readStock(data){
foodS = data.val();
}

function writeStock(foodS){
  if(foodS<=0){
    foodS = 0
  
  }
  else{
    foodS = foodS - 1
  }
  database.ref('/').update({
    Food:foodS
  })
}



