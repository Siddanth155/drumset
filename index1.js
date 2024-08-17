var len=document.querySelectorAll(".drum").length;
for(var i=0;i<len;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
         var alpahbet=this.textContent;
         sound(alpahbet);
         activeAnimation1(alpahbet);
         
        
    })
}
document.addEventListener("keypress",function(event){
    sound(event.key);
    activeAnimation1(event.key);
});
function sound(key){
    switch(key){
        case "w":var crash=new Audio("sounds/crash.mp3");
        crash.play();
        break;

        case "a":var kick_bass=new Audio("sounds/kick-bass.mp3");
        kick_bass.play();
        break;
        case "s":var snare=new Audio("sounds/snare.mp3");
        snare.play();
        break;
        case "d":var tom1=new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;
        case "j":var tom2=new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;
        case "k":var tom3=new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;
        case "l":var tom4=new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;
        default:alert("error");
     }
}

function activeAnimation1(but){
    var activeButtonClass=document.querySelector("."+but);
    activeButtonClass.classList.add("pressed");
    setTimeout(function(){
        activeButtonClass.classList.remove("pressed");
    }, 100);

}
