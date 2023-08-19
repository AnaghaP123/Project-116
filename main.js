noseX = 0;
noseY = 0;

function preload() 
{
    mue = loadImage('https://i.postimg.cc/wvHBfDdx/image.png');
}

function setup()
{
    canvas=createCanvas(500,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('PoseNet Is Initialized');
}

function draw() 
{
    image(video, 0, 0, 500, 300);
    image(mue, noseX, noseY, 40, 20)
}

function take_snapshot()
{
    save('myFilterImage.png');
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x + 83;
        noseY = results[0].pose.nose.y;
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
    }
}