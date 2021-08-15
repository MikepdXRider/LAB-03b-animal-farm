

//CACHED VARIABLES
const catJpg = document.getElementById('catJpg');
const catWav = document.getElementById('catWav');
const dogJpg = document.getElementById('dogJpg');
const dogWav = document.getElementById('dogWav');
const horseJpg = document.getElementById('horseJpg');
const horseWav = document.getElementById('horseWav');
const header = document.getElementById('header');
// ---------------------



// CAT = JeffBezos
// DOG = DrEvil
//HORSE = Lex

// CACHED FUNCTIONS
const playSound = (sound) => {
    sound.play();
};

const changeText = (animalType) => {
    header.textContent = animalType;
};

const playSoundAndChangeTextAndTimeout = (sound, animalType) => {
    playSound(sound);
    changeText(animalType);
    setTimeout(() => {
        header.textContent = 'Oh no, the Jeffrey\'s are growing stronger!';
    }, 1500);
};
// ---------------------

// MOUSE EVENTS
catJpg.addEventListener('click', () => {
    playSoundAndChangeTextAndTimeout(catWav, 'It\'s Jeffrey Bezos!!');
});

dogJpg.addEventListener('click', () => {
    playSoundAndChangeTextAndTimeout(dogWav, 'It\'s Dr. Bezos!!');
});

horseJpg.addEventListener('click', () => {
    playSoundAndChangeTextAndTimeout(horseWav, 'It\'s Lex Bezos!!');
});
// ---------------------

// KEY EVENTS
document.addEventListener('keydown', (event) => {
    if (event.key === 'h') {
        playSoundAndChangeTextAndTimeout(horseWav, 'Horsey-Poo');
    }
    if (event.key === 'd') {
        playSoundAndChangeTextAndTimeout(dogWav, 'Doggo');
    }
    if (event.key === 'c'){
        playSoundAndChangeTextAndTimeout(catWav, 'Kitty-Cat');
    }
});



