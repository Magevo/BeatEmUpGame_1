let IdleAnim;
let RunAnim;
let Attack1Anim;
let Attack2Anim;
//Established Global Varaibles for Animations


class PlayerMaker {

  constructor() {
    this.sprite
    this.start = {
      x: W / 2,
      y: H - 500
    }
    this.w = 190
    this.h = 231

  } //Contructor defining Starting Location of Wizard and Dimension

  preload() {
    IdleAnim = loadAnimation("/Images/MainWizard/Idle_0.png", "/Images/MainWizard/Idle_1.png", 
    "/Images/MainWizard/Idle_2.png", "/Images/MainWizard/Idle_3.png", "/Images/MainWizard/Idle_4.png", "/Images/MainWizard/Idle_5.png",);

    IdleAnim = loadAnimation("")


  } //Preloaded Animations for Wizard

  setup() {
    this.sprite = this.makeWizard(this.start.x, this.start.y, this.w, this.h);
    //Initialisation of Wizard Sprite with beginning Location
  } 
  draw() {
    this.controls();
    //Function to continually loop Wizard Controls

  }
  controls() { //Each Control Calls from Constants.Js and utilises a function
    if (keyIsDown(KEYS.A)) {
      this.goLeft()
    }
    if (keyIsDown(KEYS.D)) {
      this.goRight()
    }
  }
  goLeft() { //When A is pressed, sprite increases velocity by x to the left
    this.sprite.velocity.x -= 5
  }
  goRight() { //When D is pressed, sprite increases velocity by x to the right
    this.sprite.velocity.x += 5
  }

  makeWizard(x, y, w, h) { 
    let tempWizard = createSprite(x, y, w, h);
    tempWizard.friction = 0.5;

    
    tempWizard.addAnimation("idle", IdleAnim);
    tempWizard.scale = 3
    
    return tempWizard;
  } //Wizard Sprite Creation







  // animation(WizardAnimationRun,100,50);
  // animation(WizardAnimationAttack1,100,300);
  // animation(WizardAnimationAttack2,100,550);

}