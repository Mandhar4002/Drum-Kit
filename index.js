let len = document.querySelectorAll(".drum").length;

for (let i = 0; i < len; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click",function () {
        handleClick(this.innerHTML);

        buttonAnimation(this.innerHTML);
    });
}

document.addEventListener("keydown", function(e) {
    handleClick(e.key);

    buttonAnimation(e.key);
})

function handleClick(key) {
    var audio = new Audio('sounds/tom-1.mp3');
    switch (key) {
        case 'w' : audio.play();
                   break;
        case 'a' : audio = new Audio('sounds/tom-2.mp3');
                   audio.play();
                   break;
        case 's' : audio = new Audio('sounds/tom-3.mp3');
                   audio.play();
                   break;
        case 'd' : audio = new Audio('sounds/tom-4.mp3');
                   audio.play();
                   break;
        case 'j' : audio = new Audio('sounds/snare.mp3');
                   audio.play();
                   break;
        case 'k' : audio = new Audio('sounds/crash.mp3');
                   audio.play();
                   break;
        case 'l' : audio = new Audio('sounds/kick-bass.mp3');
                   audio.play();
                   break;
    }
}

function buttonAnimation(input) {
    let keyPressed = document.querySelector("." + input);

    keyPressed.classList.toggle("pressed");
    setTimeout(() => {
        keyPressed.classList.toggle("pressed");
    }, 100);

}