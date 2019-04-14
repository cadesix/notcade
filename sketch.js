
let angle = 0;


function setup() {
  var myCanvas = createCanvas(1000, 600, WEBGL);
  myCanvas.parent("cade");

  cade = loadModel('notcade.obj');

}

function draw() {
  background(0, 32, 235);
  camera(0, 0, -300, 0, 0, 0, 0, 0, 500,);

  if (windowWidth > 750) {
    rotateY(90 + mouseX/500);
    rotateX(-mouseY/600 - 100)
  }
  else {
    rotateY(90 + angle);
  }

  translate (0, -40, 0);
  //ambientMaterial(156, 100, 30);
  normalMaterial(256, 256, 256);
  model(cade);
  angle += .03;
}
