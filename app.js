/* Imports */

/* Get DOM Elements */
const roofDropdown = document.getElementById('roof-dropdowns'); 
const roofImage = document.getElementById('roof-image');
const roofCountEl = document.getElementById('roof-count');

const materialsDropdown = document.getElementById('material-dropdowns');
const materialsImage = document.getElementById('materials-image');
const materialsCountEl = document.getElementById('material-count');

const doorsDropdown = document.getElementById('door-dropdowns');
const doorsImage = document.getElementById('doors-image');
const doorsCountEl = document.getElementById('door-count');

const mottoButton = document.getElementById('motto-button');
const mottoInputEl = document.getElementById('motto-input');
const mottosEl = document.getElementById('mottos');
/* State */
let roofCount = 0;
let materialsCount = 0;
let doorsCount = 0;
let mottos = ['Welcome to my home'];

/* Events */
roofDropdown.addEventListener('change', () => {
    roofImage.src = makeImageURL('roof', roofDropdown.value);
    roofCount++;
    displayStats();
});

materialsDropdown.addEventListener('change', () => {
    materialsImage.src = makeImageURL('materials', materialsDropdown.value);
    materialsCount++;
    displayStats();
});

doorsDropdown.addEventListener('change', () => {
    doorsImage.src = makeImageURL('doors', doorsDropdown.value);
    doorsCount++;
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
    materialsCountEl.textContent = materialsCount;
    doorsCountEl.textContent = doorsCount;
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
