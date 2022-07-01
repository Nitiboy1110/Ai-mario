noseX = 0;
noseY = 0;

function preload() {
	world_start = loadSound("world_start.wav");
	mario_CoinSound = loadSound("coin.wav");
	mario_GameOverSound = loadSound("gameover.wav");
    mario_jumpingSound = loadSound("jump.wav")
	mario_kickSound = loadSound("kick.wav");
	Mario_DEADsound = loadSound("mariodie.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	instializeInSetup(mario);
    video = createCapture(VIDEO);
	video.size(800,400);
	video.parent("game_console");
	posenet = ml5.poseNet(video , modalloaded);
	posenet.on('pose' , gotResults);
}

function gotResults(results){
	if(results.length > 0){
		console.log(results);
		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;
	}
}

function modalloaded(){
	console.log("modal is loaded")
}

function draw() {
	game()
}



