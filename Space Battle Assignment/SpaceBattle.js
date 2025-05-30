const prompt = require('prompt-sync')(); // importing prompt-sync, installed with npm install prompt-sync

class USSAssembly {
    hull = 20;
    firepower = 5;
    accuracy = 0.7;
};

class AlienShip {
    hull = this.getRandomHullHealth();
    firepower = this.getRandomFirepower();
    accuracy = this.getRandomAccuracy();
    
    getRandomHullHealth() {
        return Number((Math.random() * 100).toFixed()) % 4 + 3; 
        // Math.random gives us a number like this: 0.11343243 (Between 0 - 1)
        // Multiplying it by 100 gives us this: 11.343243
        // toFixed() translates it to a whole number, but as a string: '11'
        // Number(x) converts x from a string to a number: 11
        // 11 % 4 = 3, % means get the remainder after dividing
        // We add 3, because the % 4 will either produce 0, 1, 2, or 3
        // We need at minimum the health for the Alien Ship to be between 3 and 6
        // If the number % 4 = 0, then we add 3 to make sure it is at least 3
        // The max is 6, and we will never go over 6 with the current logic
    };
    getRandomFirepower() {
        return Number((Math.random() * 100).toFixed()) % 3 + 2;
    };
    getRandomAccuracy() {
        return Number((Math.random() * 100).toFixed() % 3 + 6) / 10;
    };
};


function attackAlienShip(ussAssembly, alienShip) {
    let chanceRollAccuracy = parseFloat(Math.random().toPrecision(1));
    if (ussAssembly.accuracy <= chanceRollAccuracy) {
        console.log("Hit alien ship!");
        alienShip.hull -= ussAssembly.firepower;
    } else {
        console.log("We missed!");
    };
    return [ussAssembly, alienShip];
};

function receiveAttackFromAlienShip(ussAssembly, alienShip) {
    let chanceRollAccuracy = parseFloat(Math.random().toPrecision(1));
    if (alienShip.accuracy <= chanceRollAccuracy) {
        console.log(`We were hit by the alien ship for ${alienShip.firepower}!`);
        ussAssembly.hull -= alienShip.firepower;
    } else {
        console.log("The aliens missed!");
    };
    return [ussAssembly, alienShip];
};

let ussAssembly = new USSAssembly;

let alienShips = [];
for (let i = 0; i < 6; i ++) {
    let alienShip = new AlienShip;
    alienShips.push(alienShip);
};

let currentAlienShip = null;
let shipsDestroyed = 0;
while (true) {
    if (currentAlienShip === null) {
        if (alienShips.length === 0) {
            console.log("We defeated all six Alien Ships! We win!");
            break;
        } else {
            currentAlienShip = alienShips[0];
        };
    };

    let responseText = prompt('Attack Alien ship?');

    if (responseText === 'y') {
        [ussAssembly, currentAlienShip] = attackAlienShip(ussAssembly, currentAlienShip);


        if (currentAlienShip.hull <= 0) {
            alienShips.shift();
            currentAlienShip = null;
            shipsDestroyed ++;
            console.log(`Ships Destroyed: ${shipsDestroyed}`);
            console.log(`Current Alien Ships Array: ${alienShips}`);
        } else {
            [ussAssembly, currentAlienShip] = receiveAttackFromAlienShip(ussAssembly, currentAlienShip);
            console.log(`USS Assembly Current Health: ${ussAssembly.hull}`);
            console.log(`Alien Ship Current Health: ${currentAlienShip.hull}`);
            if (ussAssembly.hull <= 0) {
                console.log("We lost to the aliens! Game over.")
                break;
            }
        }

        console.log('');


    } else if (responseText === 'n') {
        console.log('Retreating!');
        console.log(`Ships Destroyed: ${shipsDestroyed}`);
        break;

    } else {
        console.log("Invalid option, please try again!");
    };
};









