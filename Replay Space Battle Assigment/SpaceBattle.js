const prompt = require('prompt-sync')(); // import and use "npm install prompt-sync"

// let responseText = prompt('Enter Text Here');
// console.log(responseText);

class USSAssembly {
    hull = 20;
    firepower = 5;
    accuracy = 0.7;
}

// console.log(ussAssembly); // USSAssembly { hull: 20, firepower: 5, accuracy: 0.7 }

class AlienShip {
    hull = this.getRandomHull(); // 3 - 6
    firepower = this.getRandomFirepower(); // 2 - 4
    accuracy = this.getRandomAccuracy(); // 0.6 - 0.8
                
    getRandomHull() {
        return ((Math.floor(Math.random() * 100) + 1) % 4) + 3 
    };
    getRandomFirepower() {
        return ((Math.floor(Math.random() * 100) + 1) % 3) + 2

    };
    getRandomAccuracy() {
        return (Number((Math.random() * 100).toFixed()) % 3 + 6) / 10;
    };
};


function attackAlienShip(ussAssembly, alienShip) {
    let hitChanceRoll = Math.random()
    if (hitChanceRoll > ussAssembly.accuracy) {
        console.log("We missed!")
    } else {
        console.log("We hit the Alien Ship!")
        alienShip.hull -= ussAssembly.firepower;
    }
    return alienShip

}


function receiveAttackFromAlienShip(ussAssembly, alienShip) {
    let hitChanceRoll = Math.random()
    if (hitChanceRoll > alienShip.accuracy) {
        console.log("Aliens missed!")
    } else {
        console.log("We were hit by the Alien Ship!")
        ussAssembly.hull -= alienShip.firepower;
    }
    return ussAssembly

}

let ussAssembly = new USSAssembly;

let alienShipsArray = []
for (let i = 0; i < 6; i++) {
    let newAlienShip = new AlienShip;
    alienShipsArray.push(newAlienShip);
}

let currentAlienShip = null;

while (true) {
    if (alienShipsArray.length > 0) {
        currentAlienShip = alienShipsArray[0]
    } else {
        console.log("We won! All alien ships were defeated! GG");
        break;
    }

    let nextAction = prompt('Attack the Ship?').toLowerCase();

    if (nextAction === 'y') {
        console.log("Attacking the ship!");
        currentAlienShip = attackAlienShip(ussAssembly, currentAlienShip);
        console.log(`Alien Ship Health: ${currentAlienShip.hull}`)
        if (currentAlienShip.hull <= 0) {
            console.log("Alien Ship was destroyed!")
            alienShipsArray.shift();
            console.log(`Ships Destroyed: ${6 - alienShipsArray.length}`)
            // Present a new ship
        } else {
        ussAssembly = receiveAttackFromAlienShip(ussAssembly, currentAlienShip);
        console.log(`USS Ship Health: ${ussAssembly.hull}`)

        if (ussAssembly.hull <= 0) {
            console.log("USS Assembly ran out of hitpoints! We lost, game over!")
            break;
        };
        };
    } else if (nextAction === 'n') {
        console.log("Retreating!")
        break;
    } else {
        console.log("Invalid Key!")
    }
    console.log('')
}
