var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start()
{
    recognition.start();
} 
recognition.onresult = function(event)
{
    console.log(event);
    Content = event.results[0][0].transcript.toLowerCase();
    console.log(Content);
    if (Content == "selfie")
    {
        speak();
    }
}


function speak(){

    
    var synth = window.speechSynthesis;
    Webcam.attach(camera);

    speak_data = "Taking your next Selfie in 10 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    setTimeout(function()
    {
        img_id = "pic1.jpg";
        take_snapshot();
        speak_data = "Taking your selfie in 10 seconds.";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    }, 10000);
    setTimeout(function()
    {
        img_id = "pic2.jpg";
        take_snapshot();
        speak_data = "Taking your selfie in 10 seconds.";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    }, 10000);
    setTimeout(function()
    {
        img_id = "pic3.jpg";
        take_snapshot();
        speak_data = "Taking your selfie in 10 seconds.";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    }, 10000);
}

camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});

function take_snapshot()
{
    console.log(img_id);
    Webcam.snap(function(data_uri)
    {
        if(img_id == "pic1.jpg")
        {
            document.getElementById("result1").innerHTML = '<img id = "pic1.jpg" src = "' +data_uri+ '">'
        }
        if(img_id == "pic2.jpg")
        {
            document.getElementById("result2").innerHTML = '<img id = "pic2.jpg" src = "' +data_uri+ '">'
        }
        if(img_id == "pic3.jpg")
        {
            document.getElementById("result3").innerHTML = '<img id = "pic3.jpg" src = "' +data_uri+ '">'
        }
    });
}