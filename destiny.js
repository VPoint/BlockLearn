var iter = 0;
var quest = ["A state or condition markedly different from the norm","formally reject or disavow a formerly held belief", "the quality of being honest and straightforward", "tending to vanish like vapor", "easily irritated or annoyed", "working or spreading in a hidden and usually injurious way", "excessively abundant", "a soft wet area of low-lying land that sinks underfoot", "a standard or typical example", "concise and full of meaning"];

var ans = ["aberration", "abjure", "candor", "evanescent", "fractious", "insidious", "rife", "morass", "paradigm", "pithy"];

var w = window.innerWidth;
var h = window.innerHeight;

var length = w/5;
var height= h/2;

var start = window.setInterval(myTimer, 300);

function createDiv(posx, posy) {
    var div = document.createElement("div");

    div.style.width = length + "px";
    div.style.height = height + "px";
    div.style.background = "white";
    div.style.color = "black";

    div.style.position = "fixed";
    div.style.left = posx + "px";
    div.style.top = posy + "px";
    div.style.padding = "1%"
    div.style.zIndex = 10000;
    div.style.border = "solid #D3D3D3 1px";

    div.id = iter.toString();
    div.innerHTML = "<h3>"+ quest[iter] +"</h3>";
	
    div.addEventListener("click", click);
    
    document.body.appendChild(div);
    iter++;
};

var left = 0;
var t = 0;

function click(e) {
  // In Internet Explorer you should use the global variable `event`  
  e = e || event; 

  // In Internet Explorer you need `srcElement`
  var target = e.target || e.srcElement;

  var id = target.id;
  
        var ANSWER = prompt(quest[id], "Please input your answer.");
        if (ANSWER !== null) {
			if(ANSWER ===ans[id]){
			   alert("Correct! Your response has been recorded.");
			   for(var index = 0; index < quest.length; index++){
              var element = document.getElementById(index.toString());
              element.parentNode.removeChild(element);
             }
			} else{
               alert("Incorrect. Click on another question to continue.");
			}
        }
}

function myTimer() {
    if ((left + length) > w) {
        if ((t + height) > h) {
         clearInterval(start);
        } else {
            left = 0;
            t = t + height;
        }
      } else {
      createDiv(left, t);
      left = left + length;
     }
}

function calcTime(){
   var minutes = 1000 * 60;
   var d = new Date();
   var t = d.getTime();

   var numMinutes = Math.round(t / minutes);
}