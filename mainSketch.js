
let angle = 0;


function setup() {

  if (windowWidth > 1000) {
  var myCanvas = createCanvas(320, 100, WEBGL);
  myCanvas.parent("cadeSmall");
  cade = loadModel('notcade.obj');

  }

  else {
  var myCanvas = createCanvas(400, 200, WEBGL);
  myCanvas.parent("cadeSmall");
  cade = loadModel('notcade.obj');
  }


}

function draw() {
//  background rgba(256, 256, 256, 0);

  if (windowWidth > 1000) {
    camera(0, 0, 0, 0, 0, 0, 0, 0, 0,);
    rotateY(91 + mouseX/2500);
    rotateX(-mouseY/1000)
    translate (0, -30, 0);
  }

  else {
    rotateY(90 + angle);
    camera(0, 0, 0, 0, 0, 0, 0, 0, 0);
    translate(0, -30, 0);
  }


  //ambientMaterial(156, 100, 30);
  normalMaterial(256, 256, 256);
  model(cade);
  angle += .01;
}
