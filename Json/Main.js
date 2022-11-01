
let WizardMain = new PlayerMaker();

function preload() {
WizardMain.preload();

}

function setup() {

  createCanvas(W,H);
  WizardMain.setup();

}

function draw() {

  WizardMain.draw()
  background("black");
  drawSprites();


  


}

