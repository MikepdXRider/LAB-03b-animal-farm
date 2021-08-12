// import functions and grab DOM elements

// initialize state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

const catJpg = document.getElementById('catJpg');
const catWav = document.getElementById('catWav');
const dogJpg = document.getElementById('dogJpg');
const dogWav = document.getElementById('dogWav');
const horseJpg = document.getElementById('horseJpg');
const horseWav = document.getElementById('horseWav');
const header = document.getElementById('header');

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
        header.textContent = 'Choose another animal!';
    }, 1000);
};

// MOUSE EVENTS
catJpg.addEventListener('click', () => {
    playSoundAndChangeTextAndTimeout(catWav, 'Kitty-Cat');
});

dogJpg.addEventListener('click', () => {
    playSoundAndChangeTextAndTimeout(dogWav, 'Doggo');
});

horseJpg.addEventListener('click', () => {
    playSoundAndChangeTextAndTimeout(horseWav, 'Horsey-Poo');
});


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



