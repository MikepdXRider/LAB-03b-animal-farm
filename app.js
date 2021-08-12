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

// MOUSE EVENTS
catJpg.addEventListener('click', () => {
    catWav.play();
    header.textContent = 'Tigger the tiger said "MEOW!"';
});

dogJpg.addEventListener('click', () => {
    dogWav.play();
    header.textContent = 'Astro the pupper said "RUFF!"';
});

horseJpg.addEventListener('click', () => {
    horseWav.play();
    header.textContent = 'Khan the horsey said "NAYYYY!"';
});


// KEY EVENTS
document.addEventListener('keydown', (event) => {
    if (event.key === 'h') {
        horseWav.play();
        header.textContent = 'Khan the horsey said "NAYYYY!"';
    } else if(event.key === 'd') {
        dogWav.play();
        header.textContent = 'Astro the pupper said "RUFF!"';
    } else if(event.key === 'c'){
        catWav.play();
        header.textContent = 'Tigger the tiger said "MEOW!"';
    }
});



