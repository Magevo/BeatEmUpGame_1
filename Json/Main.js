
let WizardMain = new PlayerMaker();
let MapCreator = new MapMaker();


function preload() {
WizardMain.preload();
MapCreator.preload();

}

function setup() {

  createCanvas(W,H);
  WizardMain.setup();
  MapCreator.setup();
  
  

}

function draw() {

  background("black");

  MapCreator.draw();

  WizardMain.draw();
  
  drawSprites();
  
}

