let IdleAnimLeft;
let IdleAnimRight;
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
    IdleAnimLeft = loadAnimation("/Images/MainWizard/Idle_Left (1).png", "/Images/MainWizard/Idle_Left (2).png", 
    "/Images/MainWizard/Idle_Left (3).png", "/Images/MainWizard/Idle_Left (4).png", "/Images/MainWizard/Idle_Left (5).png", "/Images/MainWizard/Idle_Left (6).png",);

    IdleAnimRight = loadAnimation("/Images/MainWizard/Idle_Right (1).png", "/Images/MainWizard/Idle_Right (2).png", 
    "/Images/MainWizard/Idle_Right (3).png", "/Images/MainWizard/Idle_Right (4).png", "/Images/MainWizard/Idle_Right (5).png", "/Images/MainWizard/Idle_Right (6).png",);


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
      this.sprite.changeAnimation("IdleLeft");
      }
     
    if (keyIsDown(KEYS.D)) {
      this.goRight()
      this.sprite.changeAnimation("IdleRight");
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

    tempWizard.addAnimation("IdleRight", IdleAnimRight);
    tempWizard.addAnimation("IdleLeft", IdleAnimLeft);
    
    tempWizard.scale = 3
    
    return tempWizard;
  } //Wizard Sprite Creation







  // animation(WizardAnimationRun,100,50);
  // animation(WizardAnimationAttack1,100,300);
  // animation(WizardAnimationAttack2,100,550);

}