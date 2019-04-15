
let angle = 0;


function setup() {

  if (windowWidth > 1000) {
  var myCanvas = createCanvas(300, 100, WEBGL);
  myCanvas.parent("cadeSmall");
  cade = loadModel('notcadeSmall.obj');

  }

  else {
  var myCanvas = createCanvas(300, 100, WEBGL);
  myCanvas.parent("cadeSmall");
  cade = loadModel('notcade.obj');
  }


}

function draw() {
//  background rgba(256, 256, 256, 0);

  if (windowWidth > 1000) {
    camera(0, 0, 0, 0, 0, 0, 0, 0, 0,);
    rotateY(91 + mouseX/2000);
    rotateX(-mouseY/1000)
    translate (0, 0, 0);
  }

  else {
    rotateY(90 + angle);
    camera(0, 0, 0, 0, 0, 0, 0, 0, 0);
    translate(0, 0, 0);
  }


  //ambientMaterial(156, 100, 30);
  normalMaterial(256, 256, 256);
  model(cade);
  angle += .01;
}
