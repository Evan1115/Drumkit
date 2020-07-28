
var drumButton = document.querySelectorAll("button");
for(var i = 0 ; i < drumButton.length ; i++){
    drumButton[i].addEventListener("click", function(){
      alert("hello");
    });
}
