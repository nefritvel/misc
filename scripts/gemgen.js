let first = [
    'Sea',
    'Dragon\'s',
    'Red',
    'Moon',
    'Shining',
    'Crystal',
    'Solar',
    'Blue',
    'Cerulean',
    'Azure',
    'Violet',
    'Crimson',
    'Verdigris',
    'Scarlet',
    'Golden',
    'Devil\'s',
    'Black',
    'Midnight',
    'Queen\'s',
    'Royal',
    'Celestial',
    'Divine',
    'Weeping',
    'Sallow',
    'Sable',
    'Raven',
    'Starless',
    'Stygian',
    'Wicked',
    'Silver'
];
let last = [
    'Tear',
    'Mother',
    'Fist',
    'Beryl',
    'Dream',
    'Inferno',
    'Eye',
    'Claw',
    'Heart',
    'Soul',
    'Flower',
    'Crown',
    'Pearl',
    'Treasure',
    'Petal',
    'Brooch',
    'Smile',
    'Sunrise',
    'Sun',
    'Sliver',
    'Child',
    'Rose',
    'Cabochon',
    'Visage',
    'Clasp',
    'Darling',
    'Cameo',
    'Chain',
    'Finery',
    'Egg'
];
let previous = [];

document.getElementById("gemGenButton").onclick = gemGen;

let displayArea = document.getElementById("gemGenResult");
let prevDisplay = document.getElementById("prevResults")

function gemGen() {
    console.log('I was clicked');

    let pre = first[Math.floor(Math.random() * first.length)];
    let suf = last[Math.floor(Math.random() * first.length)];
    result = pre + ' ' + suf;
    displayArea.innerHTML = result;
    makeList(previous);
    previous.push(result);
}

function makeList(array) {
    let item = array[array.length - 1];
    if (item == "" || array.length == 0) {
        return false; //stop the function since the value is empty.
    }
    prevDisplay.children[0].innerHTML += "<li>" + item + "</li>";
}