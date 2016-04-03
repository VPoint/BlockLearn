window.onload = function(){
if (document.readyState == 'complete') {
chrome.runtime.sendMessage({active: "true"}, function(response) {
  console.log(response.farewell);
})
}// endif
}// end function