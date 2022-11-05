let Floor,Grass,Trees;

let XFloor1,XFloor2,YFloor;
let ScrollSpeedFloor;

let XGrass1,XGrass2,YGrass;
let ScrollSpeedGrass;

let XTrees1,XTrees2,YTrees;
let ScrollSpeedTrees;




let FloorSpeed = 1;
let GrassSpeed = 0.4;
let TreesSpeed = 0.1;





class MapMaker {

constructor(){

}

preload(){

    Floor = loadImage("/Images/Maps/Purple/Floor.png");
    Grass = loadImage("/Images/Maps/Purple/Grass.png");
    Trees = loadImage("Images/Maps/Purple/Trees.png");

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

    

}

draw(){

this.drawTrees();
this.drawGrass();
this.drawFloor();



}



drawFloor(){

    image(Floor,XFloor1,YFloor,W,H);
    image(Floor,XFloor2,YFloor,W,H);


    if(keyIsDown(KEYS.Right) & RecoveryCounter < 1){
    XFloor1 += ScrollSpeedFloor
    XFloor2 += ScrollSpeedFloor
    }

    if (XFloor1 > W){
        XFloor1 = -(W);
    }

    if (XFloor2 > W){
        XFloor2 = -(W) + FloorSpeed;
    }

}

drawGrass(){

    image(Grass,XGrass1,YGrass,W,H);
    image(Grass,XGrass2,YGrass,W,H);
    


    if(keyIsDown(KEYS.Right) & RecoveryCounter < 1){

    XGrass1 += ScrollSpeedGrass
    XGrass2 += ScrollSpeedGrass
    }

    if (XGrass1 > W){
        XGrass1 = -(W);
    }

    if (XGrass2 > W){
        XGrass2 = -(W) + GrassSpeed;
    }
}

drawTrees(){
    image(Trees,XTrees1,YTrees,W,H);
    image(Trees,XTrees1,YTrees,W,H);
    


    if(keyIsDown(KEYS.Right) & RecoveryCounter < 1){

    XTrees1 += ScrollSpeedTrees
    XTrees2 += ScrollSpeedTrees
    }

    if (XTrees1 > W){
        XTrees1 = -(W);
    }

    if (XTrees1 > W){
        XTrees2 = -(W) + TreesSpeed;
    }

}



}