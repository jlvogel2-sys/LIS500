let classifier;
let label = "listening...";

let soundModel = "https://teachablemachine.withgoogle.com/models/vp7PlP569/";

function preload() {
  classifier = ml5.soundClassifier(soundModel + "model.json");
}

function setup() {
  let canvas = createCanvas(320, 240);
  canvas.parent("canvas-container");
  
  classifier.classify(gotResult);
}

function draw() {
  background(0);
  fill(255);
  textSize(28);
  textAlign(CENTER, CENTER);
  text(label, width / 2, height / 2);
}

function gotResult(error, results) {
  if (error) {
    console.error(error);
    return;
  }
  label = results[0].label;
}
