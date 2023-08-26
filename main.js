 var SpeechRecognition = window.webkitSpeechRecognition
 var recognition = new SpeechRecognition
 function start(){
    document.getElementById("text_box").innerHTML = "";
    recognition.start()
 }
recognition.onresult = function (event) {
    console.log(event)
    content = event.results[0][0].transcript
    document.getElementById("text_box").innerHTML = content;
    if(content == "take my selfie"){

   
    speak()
    Webcam.attach("#camera")
    setTimeout(() => {
        takesnapshot()
        save()
    }, 5000);
}
}
Webcam.set({
    width:400,
    height:350,
    image_format:"png",
    png_quality:90
})

function speak(){
var synth = window.speechSynthesis
speakdata = document.getElementById("text_box").value 
var utterthis = new SpeechSynthesisUtterance("taking your selfie in 5 seconds")
synth.speak(utterthis)
}
camera = document.getElementById("camera")
function takesnapshot(){
    Webcam.snap(function(data_URI){
        document.getElementById("selfie_image").src = data_URI
    })
}
function save(){
    link = document.getElementById("link")
    image = document.getElementById("selfie_image").src 
    link.href = image
    link.click()
}