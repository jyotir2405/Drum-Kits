for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        var case1 = this.innerHTML;
        sound(case1);
        animation(case1);
    });
}

document.addEventListener("keydown", function(event){
    sound(event.key);
    animation(event.key);
});


function sound(event){
    switch (event){
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
        break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
        break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
        break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
        break;
        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
        break;
        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
        break;
        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
        break;
    }
}


function animation(key){
    var value = document.querySelector("."+key);

    value.classList.add("pressed");
    
    setTimeout(function () {
        value.classList.remove("pressed");
    },100);
}