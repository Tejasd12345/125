noseX=0;
noseY=0;
difference=0;
rightWristx=0;
leftWristx=0;
function setup() {
video = createCapture(VIDEO);  
video.size(550,500);
canvas = createCanvas(550,550);
canvas.position(560,110);
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function draw(){
background('#34d5eb');
document.getElementById("output").innerHTML = "Width And Height of a Square will be = " + difference +"px";
fill('#90093');
stroke('#90093');
square(noseX,noseY,difference);
}

function modelLoaded() {
console.log("model is loaded by Tejas.D");   
}

function gotPoses(results) {
 if (results.length > 0) {
 console.log(results);
 noseX=results[0].pose.nose.x;
 noseY=results[0].pose.nose.y;
 console.log("noseX = " + noseX +"noseY = " + noseY);
 
 leftWristx =results[0].pose.leftWrist.x;
 rightWristx =results[0].pose.rightWrist.x;
 difference = floor(leftWristx - rightWristx);
 console.log("leftWristx = " + leftWristx +"rightWristx = " + rightWristx + " difference = " + difference);

 }   
}