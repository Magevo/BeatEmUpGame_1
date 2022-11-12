let IdleAnimRightGob;
let IdleAnimLeftGob;
let RunningAnimRightGob;
let RunningAnimLeftGob;
let Attack1AnimRightGob;
let Attack1AnimLeftGob;
let DeathAnimRightGob;
let DeathAnimLeftGob;
let TakeHitAnimRightGob;



class EnemyMaker {

    constructor() {
        this.sprite
        this.x = 1200
        this.y = 700
        this.w = 150
        this.h = 150

        //Contructor defining Starting Location of Wizard and Dimensions  
    }



    preload() {
        IdleAnimLeftGob = loadAnimation("/Images/EnemyGoblin/Idle_Left (1).png", "/Images/EnemyGoblin/Idle_Left (2).png",
          "/Images/EnemyGoblin/Idle_Left (3).png", "/Images/EnemyGoblin/Idle_Left (4).png")

        IdleAnimRightGob = loadAnimation("/Images/EnemyGoblin/Idle_Right (1).png", "/Images/EnemyGoblin/Idle_Right (2).png",
            "/Images/EnemyGoblin/Idle_Right (3).png", "/Images/EnemyGoblin/Idle_Right (4).png");

        RunningAnimRightGob = loadAnimation("/Images/EnemyGoblin/Run_Right (1).png", "/Images/EnemyGoblin/Run_Right (2).png", "/Images/EnemyGoblin/Run_Right (3).png", "/Images/EnemyGoblin/Run_Right (4).png",
            "/Images/EnemyGoblin/Run_Right (5).png", "/Images/EnemyGoblin/Run_Right (6).png", "/Images/EnemyGoblin/Run_Right (7).png", "/Images/EnemyGoblin/Run_Right (8).png");

        RunningAnimLeftGob = loadAnimation("/Images/EnemyGoblin/Run_Left (1).png", "/Images/EnemyGoblin/Run_Left (2).png", "/Images/EnemyGoblin/Run_Left (3).png", "/Images/EnemyGoblin/Run_Left (5).png",
          "/Images/EnemyGoblin/Run_Left (5).png", "/Images/EnemyGoblin/Run_Left (6).png", "/Images/EnemyGoblin/Run_Left (7).png", "/Images/EnemyGoblin/Run_Left (8).png");

        Attack1AnimLeftGob = loadAnimation("/Images/EnemyGoblin/Attack1_Left (1).png", "/Images/EnemyGoblin/Attack1_Left (2).png", "/Images/EnemyGoblin/Attack1_Left (3).png", "/Images/EnemyGoblin/Attack1_Left (4).png",
          "/Images/EnemyGoblin/Attack1_Left (5).png", "/Images/EnemyGoblin/Attack1_Left (6).png", "/Images/EnemyGoblin/Attack1_Left (7).png", "/Images/EnemyGoblin/Attack1_Left (8).png");

        Attack1AnimRightGob = loadAnimation("/Images/EnemyGoblin/Attack1_Right (1).png", "/Images/EnemyGoblin/Attack1_Right (2).png", "/Images/EnemyGoblin/Attack1_Right (3).png", "/Images/EnemyGoblin/Attack1_Right (4).png",
            "/Images/EnemyGoblin/Attack1_Right (5).png", "/Images/EnemyGoblin/Attack1_Right (6).png", "/Images/EnemyGoblin/Attack1_Right (7).png", "/Images/EnemyGoblin/Attack1_Right (8).png");

        TakeHitAnimRightGob = loadAnimation("/Images/EnemyGoblin/TakeHit_Right (1).png", "/Images/EnemyGoblin/TakeHit_Right (2).png", "/Images/EnemyGoblin/TakeHit_Right (3).png", "/Images/EnemyGoblin/TakeHit_Right (4).png")

        // Attack2AnimRight = loadAnimation("/Images/EnemyGoblin/Attack2_Right (1).png", "/Images/EnemyGoblin/Attack2_Right (2).png", "/Images/EnemyGoblin/Attack2_Right (3).png", "/Images/EnemyGoblin/Attack2_Right (4).png",
        //   "/Images/EnemyGoblin/Attack2_Right (5).png", "/Images/EnemyGoblin/Attack2_Right (6).png", "/Images/EnemyGoblin/Attack2_Right (7).png", "/Images/EnemyGoblin/Attack2_Right (8).png");

        DeathAnimRightGob = loadAnimation("/Images/EnemyGoblin/Death_Right (1).png", "/Images/EnemyGoblin/Death_Right (2).png", "/Images/EnemyGoblin/Death_Right (3).png", "/Images/EnemyGoblin/Death_Right (4).png");

        DeathAnimLeftGob = loadAnimation("/Images/EnemyGoblin/Death_Left (1).png", "/Images/EnemyGoblin/Death_Left (2).png", "/Images/EnemyGoblin/Death_Left (3).png", "/Images/EnemyGoblin/Death_Left (4).png");
        //Preloaded Animations for Goblin
    }

    

    setup() {
        this.sprite = this.makeGoblin(this.x, this.y, this.w, this.h);
    }

    draw(){
        this.sprite.changeAnimation("IdleLeft");
        
    }

    makeGoblin(x,y,w,h) {
        let tempGoblin = createSprite(x, y, w, h);

        tempGoblin.addAnimation("IdleLeft", IdleAnimLeftGob);
        tempGoblin.addAnimation("IdleRight", IdleAnimRightGob);
       
        tempGoblin.addAnimation("RunRight", RunningAnimRightGob);
        tempGoblin.addAnimation("RunLeft", RunningAnimLeftGob);
        tempGoblin.addAnimation("Attack1Left", Attack1AnimLeftGob);
        tempGoblin.addAnimation("Attack1Right", Attack1AnimRightGob);
        tempGoblin.addAnimation("TakeHitRight", TakeHitAnimRightGob);
        // tempGoblin.addAnimation("Attack2Right", Attack2AnimRight);
        tempGoblin.addAnimation("DeathRight", DeathAnimRightGob);
        tempGoblin.addAnimation("DeathLeft", DeathAnimLeftGob);
       


        return tempGoblin;

    }



}