/* Imports */

/* Get DOM Elements */
const roofDropdown = document.getElementById('roof-dropdowns'); 
const roofImage = document.getElementById('roof-image');
const roofCountEl = document.getElementById('roof-count');
const mottoButton = document.getElementById('motto-button');
const mottoInputEl = document.getElementById('motto-input');
const mottosEl = document.getElementById('mottos');
/* State */
let roofCount = 0;
let mottos = ['Welcome to my home'];

/* Events */
roofDropdown.addEventListener('change', () => {
    roofImage.src = makeImageURL('roof', roofDropdown.value);
    roofCount++;
    displayStats();
});

mottoButton.addEventListener('click', () => {
    mottos.push(mottoInputEl.value);

    displayMottos();
});

/* Display Functions */
function makeImageURL(location, value) {
    return `assets/${location}-${value}.png`;
}

function displayStats() {
    roofCountEl.textContent = roofCount;
}

function displayMottos() {
    mottosEl.textContent = '';

    for (let motto of mottos) {
        const newElement = document.createElement('p');
        newElement.classList.add('motto');
        newElement.textContent = motto;
        mottosEl.append(newElement);
    }
}


// (don't forget to call any display functions you want to run on page load!)
