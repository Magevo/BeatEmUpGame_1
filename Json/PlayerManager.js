let IdleAnimLeft;
let IdleAnimRight;
let RunningAnimRight;
let RunningAnimLeft;
let RunAnim;
let Attack1AnimLeft;
let Attack2Anim;

let RecoveryCounter = 0;

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

    RunningAnimRight = loadAnimation("/Images/MainWizard/Run_Right (1).png", "/Images/MainWizard/Run_Right (2).png", "/Images/MainWizard/Run_Right (3).png", "/Images/MainWizard/Run_Right (4).png",
      "/Images/MainWizard/Run_Right (5).png", "/Images/MainWizard/Run_Right (6).png", "/Images/MainWizard/Run_Right (7).png", "/Images/MainWizard/Run_Right (8).png");

    RunningAnimLeft = loadAnimation("/Images/MainWizard/Run_Left (1).png", "/Images/MainWizard/Run_Left (2).png", "/Images/MainWizard/Run_Left (3).png", "/Images/MainWizard/Run_Left (4).png",
      "/Images/MainWizard/Run_Left (5).png", "/Images/MainWizard/Run_Left (6).png", "/Images/MainWizard/Run_Left (7).png", "/Images/MainWizard/Run_Left (8).png");

    Attack1AnimLeft = loadAnimation("/Images/MainWizard/Attack1_Left (1).png", "/Images/MainWizard/Attack1_Left (2).png", "/Images/MainWizard/Attack1_Left (3).png", "/Images/MainWizard/Attack1_Left (4).png",
      "/Images/MainWizard/Attack1_Left (5).png", "/Images/MainWizard/Attack1_Left (6).png", "/Images/MainWizard/Attack1_Left (7).png", "/Images/MainWizard/Attack1_Left (8).png")


  } //Preloaded Animations for Wizard

  setup() {
    this.sprite = this.makeWizard(this.start.x, this.start.y, this.w, this.h);
    //Initialisation of Wizard Sprite with beginning Location
  }
  draw() {
    this.controls();

    

    RecoveryCounter--
    if (RecoveryCounter < 0) {
      RecoveryCounter = 0
    }

  

    // console.log(this.sprite.autoResetAnimations);
    

      this.controls();
    

    if (RecoveryCounter < 1 && this.sprite.getAnimationLabel() === "Attack1Left") {

      if (this.sprite.getDirection() === 0 && keyIsDown(KEYS.Right) === false) {
        this.IdleRight()
      }
      if (this.sprite.getDirection() === 180 && keyIsDown(KEYS.Right) === false) {
        this.IdleLeft()
      }
    }

    //Function to continually loop Wizard Controls

  }
  controls() { //Each Control Calls from Constants.Js and utilises a function
if(RecoveryCounter < 1){
    if(RecoveryCounter < 1)

    if (keyIsDown(KEYS.Left)) {
      
      this.GoLeft()
      this.sprite.autoResetAnimations = false

    } 

    if (keyIsDown(KEYS.Right)) {

      this.GoRight()
      this.sprite.autoResetAnimations = false
      
    } else {
      
    }


   
    if (this.sprite.getAnimationLabel() === "RunRight" && keyIsDown(KEYS.Right) === false) {
      this.IdleRight();
      console.log("Finished Run right")

    }
    if (this.sprite.getAnimationLabel() === "RunLeft" && keyIsDown(KEYS.Left) === false) {
      this.IdleLeft();
      console.log("Finished run left")

    }


    if (keyIsDown(KEYS.Z)) {
      this.sprite.autoResetAnimations = true
      if (RecoveryCounter < 1) {
        if (this.sprite.getDirection() === 180) {
          this.Attack1Left()
          RecoveryCounter = 32;
        }
      }

    }


  }
  }
  GoLeft() { //When A is pressed, sprite increases velocity by x to the left
    this.sprite.velocity.x -= 3
    this.sprite.changeAnimation("RunLeft");


  }
  GoRight() { //When D is pressed, sprite increases velocity by x to the right
    this.sprite.velocity.x += 3
    this.sprite.changeAnimation("RunRight");

  }
  Attack1Left() {
    this.sprite.setSpeed(0, this.sprite.getDirection())
    this.sprite.changeAnimation("Attack1Left");
  }
  Attack2Right() {
    this.sprite.setSpeed(0, this.sprite.getDirection())
    this.sprite.changeAnimation("Attack2")
  }
  IdleLeft() {
    this.sprite.changeAnimation("IdleLeft");
  }
  IdleRight() {
    this.sprite.changeAnimation("IdleRight");
  }
  GetHit() {

  }
  Die() {

  }

  makeWizard(x, y, w, h) {
    let tempWizard = createSprite(x, y, w, h);
    tempWizard.friction = 0.5;

    tempWizard.addAnimation("IdleRight", IdleAnimRight);
    tempWizard.addAnimation("IdleLeft", IdleAnimLeft);
    tempWizard.addAnimation("RunRight", RunningAnimRight);
    tempWizard.addAnimation("RunLeft", RunningAnimLeft);
    tempWizard.addAnimation("Attack1Left", Attack1AnimLeft);

    tempWizard.autoResetAnimations = true


    tempWizard.scale = 3

    return tempWizard;
  } //Wizard Sprite Creation







  // animation(WizardAnimationRun,100,50);
  // animation(WizardAnimationAttack1,100,300);
  // animation(WizardAnimationAttack2,100,550);

}