let Floor,Floor2,Grass,Trees,Floral,Fill,Bush,Wave;

let XFloor1,XFloor2,YFloor;
let ScrollSpeedFloor;

let XGrass1,XGrass2,YGrass;
let ScrollSpeedGrass;

let XTrees1,XTrees2,YTrees;
let ScrollSpeedTrees;

let XFloral1,XFloral2,YFloral;
let ScrollSpeedFloral;

let XFill1,XFill2,YFill;
let ScrollSpeedFill;

let XBush1,XBush2,YBush;
let ScrollSpeedBush;

let XWave1,XWave2,YWave;
let ScrollSpeedWave;

let FloorSpeed = 20;
let GrassSpeed = 5;
let TreesSpeed = 2;
let FloralSpeed = 2;
let FillSpeed = 2;
let BushSpeed = 2;
let WaveSpeed = 2;

let FloorBig,GrassBig,TreesBig;



class MapMaker {

constructor(){

}

preload(){

    Floor = loadImage("/Images/Maps/Purple/Floor.png");
    Grass = loadImage("/Images/Maps/Purple/Grass.png");
    Trees = loadImage("Images/Maps/Purple/Trees.png");
    Floor2 = loadImage("/Images/Maps/Blue/Floor.png");
    Floral = loadImage("Images/Maps/Purple/Floral.png");
    Fill = loadImage("Images/Maps/Purple/Fill.png");
    Bush = loadImage("Images/Maps/Purple/Bush.png");
    Wave = loadImage("Images/Maps/Purple/Wave.png");

    // Floor = FloorBig.resize(W,H);
    // Grass = GrassBig.resize(W,H);
    // Trees = TreesBig.resize(W,H);

}

setup(){
    YFloor = 0
    XFloor1 = 0
    XFloor2 = W
    ScrollSpeedFloor = FloorSpeed;

    YGrass = 0
    XGrass1 = 0
    XGrass2 = W
    ScrollSpeedGrass = GrassSpeed;

    YTrees = 0
    XTrees1 = 0
    XTrees2 = W
    ScrollSpeedTrees = TreesSpeed;

    YFloral = 0
    XFloral1 = 0
    XFloral2 = W
    ScrollSpeedFloral = FloralSpeed;

    YFill = 0
    XFill1 = 0
    XFill2 = W
    ScrollSpeedFill = FillSpeed;
    
    YBush = 0
    XBush1 = 0
    XBush2 = 0
    ScrollSpeedBush = BushSpeed;

    YWave = 0
    XWave1 = 0
    XWave2 = W
    ScrollSpeedWave = WaveSpeed;

}

draw(){


this.drawFill();
this.drawWave();
this.drawBushes();
this.drawFloral();
this.drawTrees();
this.drawGrass();
this.drawFloor();



}

drawFloor(){

    image(Floor,XFloor1,YFloor,W,H);
    image(Floor,XFloor2,YFloor,W,H);


    if(keyIsDown(KEYS.Right) & RecoveryCounter < 1){
    XFloor1 -= ScrollSpeedFloor
    XFloor2 -= ScrollSpeedFloor
    }

    if (XFloor1 < -W){
        XFloor1 = (W) - FloorSpeed / 2;
    }

    if (XFloor2 < -W){
        XFloor2 = (W) ;
    }

}

drawGrass(){

    image(Grass,XGrass1,YGrass,W,H);
    image(Grass,XGrass2,YGrass,W,H);
    


    if(keyIsDown(KEYS.Right) & RecoveryCounter < 1){

    XGrass1 -= ScrollSpeedGrass
    XGrass2 -= ScrollSpeedGrass
    }

    if (XGrass1 < -W){
        XGrass1 = (W) - GrassSpeed/2;
    }

    if (XGrass2 < -W){
        XGrass2 = (W);
    }
}

drawTrees(){
    image(Trees,XTrees1,YTrees,W,H);
    image(Trees,XTrees2,YTrees,W,H);
    
    

    if(keyIsDown(KEYS.Right) & RecoveryCounter < 1){

    XTrees1 -= ScrollSpeedTrees
    XTrees2 -= ScrollSpeedTrees
    }

    if (XTrees1 < -W){
        XTrees1 = (W) - TreesSpeed/2;
    }

    if (XTrees2 < -W){
        XTrees2 = (W);
    }

}

drawFloral(){

    image(Floral,XFloral1,YFloral,W,H);
    image(Floral,XFloral2,YFloral,W,H);
    
    

    if(keyIsDown(KEYS.Right) & RecoveryCounter < 1){

        XFloral1 -= ScrollSpeedTrees
        XFloral2 -= ScrollSpeedTrees
    }

    if (XFloral1 < -W){
        XFloral1 = (W) - FloralSpeed/2;
    }

    if (XFloral2 < -W){
        XFloral2 = (W);
    }


}

drawFill(){

    image(Fill,XFill1,YFill,W,H);
    image(Fill,XFill2,YFill,W,H);
    
    

    if(keyIsDown(KEYS.Right) & RecoveryCounter < 1){

        XFill1 -= ScrollSpeedTrees
        XFill2 -= ScrollSpeedTrees
    }

    if (XFill1 < -W){
        XFill1 = (W) - FloralSpeed/2;
    }

    if (XFill2 < -W){
        XFill2 = (W);
    }


}

drawBushes(){

    image(Bush,XBush1,YBush,W,H);
    image(Bush,XBush2,YBush,W,H);
    
    

    if(keyIsDown(KEYS.Right) & RecoveryCounter < 1){

        XBush1 -= ScrollSpeedTrees
        XBush2 -= ScrollSpeedTrees
    }

    if (XBush1 < -W){
        XBush1 = (W) - FloralSpeed/2;
    }

    if (XBush2 < -W){
        XBush2 = (W);
    }


}

drawWave(){

    image(Wave,XWave1,YWave,W,H);
    image(Wave,XWave2,YWave,W,H);
    
    

    if(keyIsDown(KEYS.Right) & RecoveryCounter < 1){

        XWave1 -= ScrollSpeedWave
        XWave2 -= ScrollSpeedWave
    }

    if (XWave1 < -W){
        XWave1 = (W) - WaveSpeed/2;
    }

    if (XWave2 < -W){
        XWave2 = (W);
    }


}

}