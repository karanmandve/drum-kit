// FOR KEYBOARD KEY LISTENING

document.addEventListener('keydown', (event) => {
    var name = event.key;

    animation(name);

    handleClick(name);

  }, false);

// FOR MOUSE CLICK LISTENING

document.addEventListener("click", (event) => {
    key = event.path[0].classList[0];
    animation(key);
    handleClick(key);
})

// FOR ANIMATION OF DRUMS

function animation(name){

    document.querySelector("."+name).classList.add("pressed");

    setTimeout(function() {
        document.querySelector("."+name).classList.remove("pressed");
      }, 100)
}

// FOR SOUND WHEN DRUP CLICKED

function handleClick(letter){

    var soundsOfLetter = {
        "w": "sounds/crash.mp3",
        "a": "sounds/kick-bass.mp3",
        "s": "sounds/snare.mp3",
        "d": "sounds/tom-1.mp3",
        "j": "sounds/tom-2.mp3",
        "k": "sounds/tom-3.mp3",
        "l": "sounds/tom-4.mp3"
    }
    
    var audio = new Audio(soundsOfLetter[letter]);
    audio.play();

}



