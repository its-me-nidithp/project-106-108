function start(){

    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/6N-FySGWP/model.json", modelReady);
    
    }
    
    function modelReady(){
    
        classifier.classify(gotResults);
    
    }
    

    function gotResults(error, results){

if(error){

console.error(error);

}
else{

console.log(results);

randomNunberR = Math.floor(Math.random()*255) + 1;
randomNunberG = Math.floor(Math.random()*255) + 1;
randomNunberB = Math.floor(Math.random()*255) + 1;

document.getElementById("soundResult").innerHTML = results[0].label;
document.getElementById("soundAccuracy").innerHTML = (results[0].confidence*100).toFixed(2) + "%";

document.getElementById("soundResult").style.color = "rgb("+randomNunberR+", "+randomNunberG+", "+randomNunberB+")";
document.getElementById("soundAccuracy").style.color = "rgb("+randomNunberR+", "+randomNunberG+", "+randomNunberB+")";

}

    }