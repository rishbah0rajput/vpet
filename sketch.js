//Create variables here
var dog,dogimg,hdogimg,database,foods,Foodstock






function preload()
{
  //load images here
  daoimg=loadImage("images/dogImg.png")
hdogimg=loadImage("images/dogImg1.png")




}

function setup() {
	createCanvas(800, 700);
  database=firebase.database()
Foodstook=database.ref("Food")
Foodstock.on("value",readStock);
Foodstock.set(20)

dog=createSprite(250,350,10,60)
dog.addImage(dogimg)
dog.scale=0.2;
}


function draw() {  
background("green")
if(foods!==undefined){
textSize(20)
fill(255)
text("note:press up arrow key to feeed the doggo milk",50,50)
text("Food remaning"+foods,150,150)


}

if(keyWentDown(UP_ARROW)){
writeStock(foods)
dog.addImage(hdogimg)
}

if(keyWentUp(UP_ARROW)){
dog.addImage(dogimg)
}

if(foods===0){
foods=20
}
  drawSprites();
  
}

function writeStock(){
if(x<=0){
x=0
}
else{
  x=x+1
}
database.ref("/").update({
  food:x
})

}
function readStock(data){
  foods=data.val();
}
