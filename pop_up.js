// Call on all URLS.
alert("Hello from your Chrome extension!");

var start = setInterval(myTimer, 3000);

var length = 200;
var hieght = 150;
var left = 0;
var top = 0;

var w = window.innerWidth;
var h = window.innerHeight;

function myTimer() {
    if(left + length >= w){
	if(top + height >= h){
	   clearInterval();
	}
       top = top + height;
    }
   createDiv();
}

function createDiv(){
//var node = document.getElementById('demo');
var div = document.createElement("div");
div.style.width = "200px";
div.style.height = "100px";
div.style.background = "red";
div.style.color = "blue";
div.innerHTML = "Hello";
div.style.position = "absolute";
div.style.left = "0px";
div.style.top = "0px";

body.appendChild(div);
}

// 5 minutes = 300000 milliseconds
