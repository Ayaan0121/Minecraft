var canvas= new fabric.Canvas('myCanvas');
// player position
playerX=10;
playerY=10;
//block hieght and width 
var blockWidth=30;
var blockHeight=30;
//var player and block object
var playerObject="";
var blockObject="";
//fun update player move
function playerUpdate() {
fabric.Image.fromURL("player.png" , 
function(Img){
playerObject=Img;
playerObject.scaleToWidth(150);
playerObject.scaleToHeight(140);
playerObject.set({
   top:playerY,
   left:playerX 
}
);
canvas.add(playerObject);
}
);
}

//fun update block 
function new_image(get_image) {
    fabric.Image.fromURL(get_image , 
    function(Img){
    blockObject=Img;
    blockObject.scaleToWidth(blockWidth);
    blockObject.scaleToHeight(blockHeight);
    blockObject.set({
       top:playerY,
       left:playerX 
    }
    );
    canvas.add(blockObject);
    }
    );
    }


//listener
window.addEventListener("keydown",myKeyDown);
//my key down func
function myKeyDown(e) {
   keyPressed=e.keyCode;
   //increase block width 
console.log(keyPressed)
if (e.shiftKey == true && keyPressed == '80') {
   blockHeight=blockHeight + 10;
   blockWidth=blockWidth + 10 ;
document.getElementById("Current_width").innerHTML=blockWidth;
document.getElementById("Current_height").innerHTML=blockHeight; 
}
//increase height width 
console.log(keyPressed)
if (e.shiftKey == true && keyPressed == '77') {
   blockHeight=blockHeight - 10;
   blockWidth=blockWidth - 10 ;
document.getElementById("Current_width").innerHTML=blockWidth;
document.getElementById("Current_height").innerHTML=blockHeight; 
}
// movement funcs
//up
if (keyPressed == '38') {
   up();
console.log("up");
}

//down
if (keyPressed == '40') {
   down();
   console.log("down");
   }

   //right
if (keyPressed == '39') {
   right();
   console.log("right");
   }

   //left
if (keyPressed == '37') {
   left();
   console.log("left");
   }
   
//c
if (keyPressed == '67') {
   new_image('cloud.png');
   console.log("c");
   }

   //d
if (keyPressed == '68') {
   new_image('dark_green.png');
   console.log("d");
   }
    
   //e
if (keyPressed == '69') {
   new_image('entryway.png');
   console.log("e");
   }
   
   //g
if (keyPressed == '71') {
   new_image('glass.png');
   console.log("g");
   }

//l
if (keyPressed == '76') {
   new_image('light_green.png');
   console.log("l");
   }

//r
if (keyPressed == '82') {
   new_image('roof.jpg');
   console.log("r");
   }

//s
if (keyPressed == '83') {
   new_image('soil.png');
   console.log("s");
   }

//t
if (keyPressed == '84') {
   new_image('trunk.jpg');
   console.log("t");
   }

//u
if (keyPressed == '85') {
   new_image('unique.png');
   console.log("u");
   }

   //w
if (keyPressed == '87') {
   new_image('wall.jpg');
   console.log("w");
   }

//y
if (keyPressed == '89') {
   new_image('yellow_wall.png');
   console.log("y");
   }


}
//canvas width=1000 height=700
//function up
function up() {
   if (playerY > 0 ) {
      playerY= playerY - blockHeight;
      canvas.remove(playerObject)
      playerUpdate()
   }
}

//function down
function down() {
   if (playerY < 600 ) {
      playerY= playerY + blockHeight;
      canvas.remove(playerObject)
      playerUpdate()
   }
}
//function right
function right() {
   if (playerX < 900 ) {
      playerX= playerX + blockHeight;
      canvas.remove(playerObject)
      playerUpdate()
   }
}
//function left
function left() {
   if (playerX > 0 ) {
      playerX= playerX - blockHeight;
      canvas.remove(playerObject)
      playerUpdate()
   }
}















