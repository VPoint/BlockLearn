function loadScript(url, callback)
{
    // Adding the script tag to the head as suggested before
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;

    // Then bind the event to the callback function.
    // There are several events for cross browser compatibility.
    script.onreadystatechange = callback;
    script.onload = callback;

    // Fire the loading
    head.appendChild(script);
}

var code = function() {
var iter = 0;
var cards = uploadQuestions();

var w = window.innerWidth;
var h = window.innerHeight;

var length = w/5;
var height= h/4;

var start = window.setInterval(myTimer, 300);
var gen = document.createElement("div");
gen.id = "gen";
document.body.appendChild(gen);
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
    div.innerHTML = "<h3>"+ cards[iter] +"</h3>";
    div.addActionListener(function(){
	var ans = prompt(cards[iter], "Please input your answer");
if (ans != null) {
    myFirebaseRef.child("Card"+getElementById(this.id)).on("value", function(snapshot) {
    var corr = snapshot.val();// Alerts "San Francisco"
});

if(ans.equals(corr)){
	storeAnswer();
var element = document.getElementById("gen");
element.parentNode.removeChild(element);
}
} else {
 alert("This value cannot be null!");
}
    });
    
    gen.appendChild(div);
    iter++;
};

var left = 0;
var t = 0;

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

function uploadQuestions(){
    var qArray = new Array();
    var ref = new Firebase("https://blocklearn.firebaseio.com/Users/user1/Deck");
    ref.once("value", function (snapshot) {
    // The callback function will get called twice, once for "fred" and once for "barney"
        snapshot.forEach(function(childSnapshot) {
            // key will be "fred" the first time and "barney" the second time
            var key = childSnapshot;
            // childData will be the actual contents of the child
            var childData = childSnapshot.val();

            qArray.push(childData.Question);
        });
    });

    return qArray;
}

function storeAnswer(){
	// add one to the value under each card
}
}

loadScript("https://cdn.firebase.com/js/client/2.4.2/firebase.js", code);