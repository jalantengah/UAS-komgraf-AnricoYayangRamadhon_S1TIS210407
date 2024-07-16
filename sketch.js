let gantiwarna = false;

function setup() {
  createCanvas(800, 800, WEBGL);

  describe('A white cylinder on a gray background.');
}

function draw() {
  background(220);
  orbitControl()

  if (gantiwarna === true){
    let colors = color("aqua");
    ambientLight(colors);
  }

  
  cylinder(30, 50);
}

function doubleclicked() {
  gantiwarna = true;
}
