status="";
object="";
function preload(){
image1=loadImage('bottle.jpg');
}
function setup(){
    canvas=createCanvas(480,480);
    canvas.center()
    objectDetection=ml5.objectDetection('cocossd',modelLoaded);
    document.getElementById("status").innerHTML='Status: object detecting';
}
function draw(){
    image(image1,0,0,480,480)
}
function modelLoaded(){
    console.log('cocossd is initialized')
    status=true;
    objectDetection.detect(image1,gotResult);
}

function gotResult(error,results){
    if(error){
        console.log('error')
    }
    console.log(results);
    object=results;
}