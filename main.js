var x = "";
var y = "";
 Dcircle = "";
 rectangle = "";
 var speechrecognition = window.webkitSpeechRecognition;
 var recognition = new speechrecognition;

 function start()
 {
     document.getElementById("answer").innerHTML = "System Is Listening Please Speak";
     recognition.start();
 }

 recognition.onresult = function(event)
 {
     console.log(event);
     var content = event.results[0][0].transcript;
     document.getElementById("answer").innerHTML = "Speech has been recognized as:"+content;
     if(content == "circle")
     {
         x = Math.floor(Math.random() * 900);
         y = Math.floor(Math.random() * 400);
         document.getElementById("answer").innerHTML = "Started Drawing Circle";
         Dcircle = "set";
     }
     if(content == "rectangle")
     {
         x = Math.floor(Math.random() * 900);
         y = Math.floor(Math.random() * 400);
         document.getElementById("answer").innerHTML = "Started Drawing Rectangle";
         rectangle = "set";
     }
 }

function setup()
{
    canvas = createCanvas(900,400);
    canvas.center()
}

function draw()
{
    if(Dcircle == "set")
    {
        radius = Math.floor(Math.random()* 100);
        circle(x, y, radius);
        document.getElementById("answer").innerHTML = "CIRCLE IS DRAWN";
        Dcircle = "";
    }

    if(rectangle == "set")
    {
        rect(x, y, 90, 50);
        document.getElementById("answer").innerHTML = "RECTANGLE IS DRAWN";
        rectangle = "";
    }
}