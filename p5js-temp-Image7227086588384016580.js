var img;
var balls = [];
function preload(){
img = loadImage('earth.png');
}

function setup() {

createCanvas(378,378);
pixelDensity(1);
 img.loadPixels();
  for(var x=0; x<img.width;x++)
  {
    for(var y=0; y<img.height; y++ ) 
    {
      var index = (x +y*img.width);
      var c = img.pixels[index*4];
      var b = brightness([c]);
       if(b>1){
         balls.push(new Ball(x,y));
            }
    }
  }
  console.log(balls);
}

function draw() {
    background(0);
  for(var i=0; i< balls.length;i++){
    if(i%25==0){
    balls[i].show();
    }
  }
}