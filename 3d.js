var colorValue;

function setup() {
  createCanvas(windowWidth, 500, WEBGL);
}

//this function is iterated upon from the sine cos 3d animation example on p5
function draw() {
  background(250);
  rotateY(frameCount * 0.03);

  //looked at mouse1d reference to map out mouse movement
  let sphereSize = map(mouseY, 0, height, 1, 80);
  let sphereSize2 = map(mouseY, 0, height, 1, 3);

  scale(sphereSize2); //added zoom that changes based on mouse movement

  //some debug stuff to see values
  //console.log(sphereSize + "ss1");
  //console.log(sphereSize2 + "ss2");

  //added this to change color based on mouseY position
  let blueValue = map(mouseY, 0, height, 0, 255);

  // added alphaV to change based on mouseY position
  let alphaValue = map(mouseY, 0, height, 0.2, 100);
  colorValue = color(0, 100, blueValue, alphaValue);

  for (let j = 0; j < 1; j++) {
    push();

    // increased the loop count from the p5 example
    // rest of it is from the example
    for (let i = 0; i < 150; i++) {
      translate(
        sin(frameCount * 0.001 + j) * 100,
        sin(frameCount * 0.001 + j) * 100,
        i * 0.1
      );

      //sphere rotation
      rotateZ(frameCount * 0.001);
      push();

      fill(colorValue);
      //size changes based on mouseY position
      sphere(sphereSize, 20, 20);
      pop();
    }
    pop();
  }
}

//https://p5js.org/examples/3d-sine-cosine-in-3d.html --animation one resource
//https://p5js.org/examples/input-mouse-2d.html --mouse 2d input
//https://p5js.org/examples/input-mouse-1d.html --mouse 1d

//refs:
//https://p5js.org/reference/#/p5/map -- mapping reference
