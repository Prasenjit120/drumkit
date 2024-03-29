for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
    function handleClick(){
        var buttonText= this.innerHTML;
        makeSound(buttonText); 
        animationnew(buttonText); 
    }
}
document.addEventListener("keypress",function(event){
    makeSound(event.key);
    animationnew(event.key);
});
function makeSound(key){
switch(key){
    case "w": 
    var tom1 = new Audio("sounds/tom-1.mp3");
    tom1.play();
    break;

    case "a": 
    var tom2 = new Audio("sounds/tom-2.mp3");
    tom2.play();
    break;

    case "s": 
    var tom3 = new Audio("sounds/tom-3.mp3");
    tom3.play();
    break;

    case "d": 
    var tom4 = new Audio("sounds/tom-4.mp3");
    tom4.play();
    break;

    case "j": 
    var tomc = new Audio("sounds/crash.mp3");
    tomc.play();
    break;

    case "k": 
    var tomk = new Audio("sounds/kick-bass.mp3");
    tomk.play();
    break;

    case "l": 
    var toms = new Audio("sounds/snare.mp3");
    toms.play();
    break;

    default: console.log(buttonText);

}
}

function animationnew(currentkey){
    var xyz= document.querySelector("."+currentkey);
    xyz.classList.add("pressed");
    setTimeout(function(){
        xyz.classList.remove("pressed");
    }, 100);
}
//