var noseX,noseY;

function preload() {
	world_start = loadSound("world_start.wav");
	mario_jump=loadSound("jump.wav");
	coin_collect=loadSound("coin.wav");
	game_over=loadSound("gameover.wav");
	killing=loadSound("kick.wav");
	dies=loadSound("maiodie.wav");

	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent("canvas");
	instializeInSetup(mario);
	video=createCapture(VIDEO);
	video.size(800,400);
	video.parent("gameConsole");
	 poseNet=ml5.poseNet(video,modelloaded);
	 poseNet.on("pose",gotposses);
}

function draw() {
	game()
}
function modelloaded(){
	console.log("Model has been loaded");
}

function gotposses(result){
	if(result.length>0){
		console.log(result);
		noseX=result[0].pose.nose.x;
		noseY=result[0].pose.nose.y;
		console.log(noseX,noseY);

	}
}




