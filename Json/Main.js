
let WizardMain = new PlayerMaker();
let MapCreator = new MapMaker();
let GoblinMain = new EnemyMaker();


function preload() {
WizardMain.preload();
GoblinMain.preload();
MapCreator.preload();

}

function setup() {

  createCanvas(W,H);
  WizardMain.setup();
  MapCreator.setup();
  GoblinMain.setup();
  
  
  

}

function draw() {

  background("black");

  MapCreator.draw();

  WizardMain.draw();

  GoblinMain.draw();

  

  
  
  drawSprites();
  
}

