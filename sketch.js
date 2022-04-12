var blob
var blobs = [];

function setup() {
  createCanvas(600, 600);
  blob =new blob(width/2, height/2, 64);
  for (var i=0;  i<10; i++){
    blobs[i]= new Blob(random (width), random(height))
  }
    
}

function draw (){
  background(0);
  blob.show();
  for (var i=0; i<blobs.length; i++) {
    blobs[i].show();
  }
}