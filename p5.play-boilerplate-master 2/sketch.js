var b1, b2
function setup() {
  createCanvas(1200,800);
  b1 = createSprite(400,200,50,50);
  b2 = createSprite(500,300,50,50);
  b1.shapeColor = "blue";
  b2.shapeColor = "blue";
  b1.debug = true;
  b2.debug = true;
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(0,255,255); 
    b2.x = World.mouseX;
    b2.y = World.mouseY;
    if (b1.x-b2.x < b1.width/2 + b2.width/2 && b2.x-b1.x < b1.width/2 + b2.width/2 && b1.y-b2.y < b1.height/2 + b2.height/2 && b2.y-b1.y < b1.height/2 + b2.height/2)
    {b1.shapeColor = "green";
    b2.shapeColor = "green";
    }
    else 
    {
      b1.shapeColor = "blue";
      b2.shapeColor = "blue";
    }

  drawSprites();
}