song1 = "";
song2 = "";
leftwristx = "";
leftwristy = "";
rightwristx = "";
rightwristy = "";
scoreleftwristy = "";

function preload() {
    song1 = loadSound("faded.mp3");
    song2 = loadSound("on_my_way.mp3");
}
function setup() {
    canvas = createCanvas(700, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on(pose, gotposses);
}

function modelLoaded() {
    console.log("poseNet is Intialize");
}

function gotposses(results)
{
    if(results.length > 0) {
        console.log(results);

        scoreleftwristy = results[0].pose.keypoints[9].score;

        console.log("scorewristy = " + scoreleftwristy);

        leftwristx = results[0].pose.leftwrist.x;
        leftwristy = results[0].pose.leftwrist.y;
        console.log("leftwristx = "+ leftwristx +"leftwristy = "+ leftwristy);

        rightwristx = results[0].pose.rightwrist.x;
        rightwristy = results[0].pose.rightwrist.y;
        console.log("rightwristx = " + rightwristx +"rightwristy = " + rightwristy);
    }
}

function draw() {
    image(video, 0, 0, 700, 500);

    fill("#FF0000");
    stroke("#FF0000");

}