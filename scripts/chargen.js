document.getElementById("charGenButton").onclick = charGen;

let displayArea = document.getElementById("charGenResult");
let prevDisplay = document.getElementById("charPrevResults");

let previous = [];

function charGen() {
    let race = getRace(Math.floor(Math.random() * 100) + 1);
    console.log("Race: " + race);
    let charClass = getClass(Math.floor(Math.random() * 10) + 1);
    console.log("Class: " + charClass);
    let align = getAlign(Math.floor(Math.random() * 18) + 1);
    let result = align + " " + race + " " + charClass;
    displayArea.innerHTML = result;
    makeList(previous);
    previous.push(result);
}

function getRace(d100)
{
    console.log("Initial Race Roll: " + d100);
    let exoticRoll = Math.floor(Math.random() * 6) + 1;
    let genasiRoll = Math.floor(Math.random() * 4) + 1;
    switch(true) {
        case (d100 <= 29):
            return "Human";
        case (d100 >= 30 && d100 <= 38):
            return "Half Elf";
        case (d100 >= 39 && d100 <= 47):
            return "Half Orc";
        case (d100 >= 48 && d100 <= 55):
            return "Gnome";
        case (d100 >= 56 && d100 <= 63):
            return "Halfling";
        case (d100 >= 64 && d100 <= 71):
            return "Tiefling";
        case (d100 >= 72 && d100 <= 78):
            return "Dwarf";
        case (d100 >= 79 && d100 <= 85):
            return "Elf";
        case (d100 >= 86 && d100 <= 91):
            return "Dragonborn";
        case (d100 >= 92 && d100 <= 100):
            console.log("Exotic Race Roll: " + exoticRoll);
            switch (exoticRoll) {
                case 1:
                    return "Aarakocra";
                case 2:
                    return "Aasimar";
                case 3:
                    return "Firbolg";
                case 4:
                    return "Goliath";
                case 5: 
                    return "Tabaxi";
                case 6:
                    console.log("Genasi Race Roll: " + genasiRoll);
                    switch (genasiRoll) {
                        case 1:
                            return "Fire Genasi";
                        case 2:
                            return "Water Genasi";
                        case 3:
                            return "Earth Genasi";
                        case 4:
                            return "Air Genasi";
                    }
                    break;
            }
            break;
    }
}

function getClass(d10)
{
    console.log("Initial Class Roll: " + d10);
    let wizRoll = Math.floor(Math.random() * 9) + 1;
    let bardRoll = Math.floor(Math.random() * 8) + 1;
    let sorRoll = Math.floor(Math.random() * 9) + 1;
    let warRoll = Math.floor(Math.random() * 9) + 1;
    let artRoll = Math.floor(Math.random() * 4) + 1;
    let other = Math.floor(Math.random() * 4) + 1;

    if(d10 <= 4) {
        console.log("Initial Wizard Roll: " + wizRoll);
        switch (wizRoll) {
            case 1:
                return "Wizard (School of Abjuration)";
            case 2: 
                return "Wizard (School of Conjuration)";
            case 3:
                return "Wizard (School of Divination)";
            case 4:
                return "Wizard (School of Enchantment)";
            case 5:
                return "Wizard (School of Evocation)";
            case 6:
                return "Wizard (School of Illusion)";
            case 7:
                return "Wizard (Order of Scribes)";
            case 8:
                return "Wizard (School of Transmutation)";
            case 9:
                return "Wizard (School of War Magic)";
        }
    }
    else if (d10 == 5 || d10 == 6) {
        console.log("Initial Bard Roll: " + bardRoll);
        switch (bardRoll) {
            case 1:
                return "Bard (College of Creation)";
            case 2: 
                return "Bard (College of Eloquence)";
            case 3:
                return "Bard (College of Glamour)";
            case 4:
                return "Bard (College of Lore)";
            case 5:
                return "Bard (College of Spirits)";
            case 6:
                return "Bard (College of Swords)";
            case 7:
                return "Bard (College of Valor)";
            case 8:
                return "Bard (College of Whispers)";
        }
    }
    else {
        switch(d10){
            case 7:
                console.log("Initial Sorcerer Roll: " + sorRoll);
                switch (sorRoll) {
                    case 1:
                        return "Aberrant Mind Sorcerer";
                    case 2: 
                        return "Clockwork Soul Sorcerer";
                    case 3:
                        return "Draconic Bloodline Sorcerer";
                    case 4:
                        return "Divine Soul Sorcerer";
                    case 5:
                        return "Shadow Magic Sorcerer";
                    case 6:
                        return "Storm Sorcerer";
                    case 7:
                        return "Wild Magic Sorcerer";
                    case 8:
                        return "Pyromancy Sorcerer";
                    case 9:
                        return "Lunar Magic Sorcerer";
                }
            case 8: 
                console.log("Initial Warlock Roll: " + warRoll);
                switch (warRoll) {
                    case 1:
                        return "Warlock (Archfey Patron)";
                    case 2: 
                        return "Warlock (Celestial Patron)";
                    case 3:
                        return "Warlock (Fathomless Patron)";
                    case 4:
                        return "Warlock (Fiend Patron)";
                    case 5:
                        return "Warlock (Genie Patron)";
                    case 6:
                        return "Warlock (Great Old Patron)";
                    case 7:
                        return "Warlock (Hexblade Patron)";
                    case 8:
                        return "Warlock (Undead Patron)";
                    case 9:
                        return "Warlock (Undying Patron)";
                }
            case 9:
                console.log("Initial Artificer Roll: " + artRoll);
                switch (artRoll) {
                    case 1:
                        return "Artificer (Alchemist)";
                    case 2: 
                        return "Artificer (Armorer)";
                    case 3:
                        return "Artificer (Artillerist)";
                    case 4:
                        return "Artificer (Battle Smith)";
                }
            case 10:
                console.log("Initial Other Roll: " + other);
                switch (other) {
                    case 1:
                        return "Rogue (Arcane Trickster)";
                    case 2: 
                        return "Fighter (Eldritch Knight)";
                    case 3:
                        return "Cleric (Arcana Domain)";
                    case 4:
                        return "Blood Hunter (Profane Soul)";
                }
        }
    }
}

function getAlign(d20) {
    switch(true) {
        case (d20 <= 3):
            return "Lawful Good";
        case (d20 >= 4 && d20 <= 6):
            return "Neutral Good";
        case (d20 >= 7 && d20 <= 9):
            return "Chaotic Good";
        case (d20 == 10 || d20 == 11):
            return "Lawful Neutral";
        case (d20 == 12 || d20 == 13):
            return "True Neutral";
        case (d20 == 14 || d20 == 15):
            return "Chaotic Neutral";
        case (d20 == 16):
            return "Lawful Evil";
        case (d20 == 17):
            return "Neutral Evil";
        case (d20 == 18):
            return "Chaotic Evil";
    }
}

function makeList(array) {
    let item = array[array.length - 1];
    if (item == "" || array.length == 0) {
        return false; //stop the function since the value is empty.
    }
    prevDisplay.children[0].innerHTML += "<li>" + item + "</li>";
}