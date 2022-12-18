function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/-CTTl_vcy/model.json', modelReady);
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
        random_number_r = Math.floor(Math.random()* 255 ) + 1;
        random_number_g = Math.floor(Math.random()* 255 ) + 1;
        random_number_b = Math.floor(Math.random()* 255 ) + 1;

        document.getElementById("resultLabel").innerHTML = 'I can hear - ' + results[0].label;
        document.getElementById("resultLabel").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        img = document.getElementById('ear.jpg');

        if (results[0].label == "barking"){
            img.src ="doggie.gif";
        }
        else if (results[0].label == "meowing"){
            img.src = "ghiphy.gif";
        }
        else if (results[0].label == "mooing"){
            img.src = "cow.gif";
        }
        else if (results[0].label == "roaring"){
            img.src = "lion.gif";
        }
        else{
            img.src = "ear.gif";
        }
    }
}