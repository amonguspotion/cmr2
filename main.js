setTimeout (function(){
    img_id = 'selfie1';
    take_snapshot();
    speak_data = "taking your next selfie in 10 seconds";
    var utterthis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis);
}, 5000)

function take_snapshot() {
    console.log(img_id);

    Webcam.snap(function(data_uri){
        if(img_id == "selfie1"){
            document.getElementById("result1").innerHTML = "<img id='selfie1' src='" + data_uri + "'>" 
        }
        else if(img_id == 'selfie2'){
            document.getElementById("result2").innerHTML = "<img id='selfie2' src='" + data_uri + "'>" 
        }
        else{
            document.getElementById("result3").innerHTML = "<img id='selfie3' src='" + data_uri + "'>" 
        }
    })
}