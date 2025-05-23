// Cat/Pirate

class Cat {
    breed = 'Saimese';
    eyeColor = 'Green';
    tail = 'Long';
    Meow () {
        console.log("Meow!");
    }
    Purr () {
        console.log("Purrr!");
    }
    CommunicateToHuman () {
        console.log("I find that this empty food bowl sometimes feel deeper than the abyss that is the forbidden cat tunnels.")    ;
    }
}

let catOne = new Cat();
console.log(catOne);
catOne.Meow();
catOne.Purr();
catOne.CommunicateToHuman();

let catTwo = new Cat();
console.log(catTwo);
catTwo.Meow();
catTwo.Purr();
catTwo.CommunicateToHuman();


class Pirate {
    constructor(name, hasEyePatch, hasWoodenLeg, hasStolenTreasure) {
        this.name = name;
        this.hasEyePatch = hasEyePatch;
        this.hasWoodenLeg = hasWoodenLeg;
        this.hasStolenTreasure = hasStolenTreasure;
        this.hasDugUpTreasure = false;
    }
    Speak () {
        console.log("Arrrrrrggghhh!");
    }
    DiscloseBooty () {
        console.log("The left one is slightly larger than the right; but the actual treasure is on that island over here!");
    }
    async DigUpTreasure () {
        console.log("*Digging*");
        await new Promise((resolve) => {
            setTimeout(() => {
                console.log("*Still Digging*");
                this.hasDugUpTreasure = true;
                setTimeout(() => {
                    console.log("Found Treasure!");
                    this.hasDugUpTreasure = true;
                    resolve();
                }, 3_000);
            }, 3_000);
        });
    };
};

let jack = new Pirate("Jack", false, false, false);
console.log(`Has Dug Up Treasure: ${jack.hasDugUpTreasure}`);
await jack.DigUpTreasure();
console.log(`Has Dug Up Treasure: ${jack.hasDugUpTreasure}`);

let john = new Pirate("John", true, false, false);
let beadyEyes = new Pirate("Beady Eyes", true, true, true);
let toeBiter = new Pirate("Toe Biter", true, true, true);
let stinkyPits = new Pirate("Stinky Pits", true, false, false);
let bootLicker = new Pirate("Boot Licker", false, false, true);

let jollyRoger = [jack, john, beadyEyes];
let blackPearl = [toeBiter, stinkyPits, bootLicker];


if (jollyRoger.length === blackPearl.length) {
    for (let i = 0; i < jollyRoger.length; i++) {
        console.log(`Ship: Jolly Roger; Name: ${jollyRoger[i].name}; Eye Patch: ${jollyRoger[i].hasEyePatch}; Wooden Leg: ${jollyRoger[i].hasWoodenLeg}; Has Stolen Treasure: ${jollyRoger[i].hasStolenTreasure}`);
        console.log(`Ship: Black Pearl; Name: ${blackPearl[i].name}; Eye Patch: ${blackPearl[i].hasEyePatch}; Wooden Leg: ${blackPearl[i].hasWoodenLeg}; Has Stolen Treasure: ${blackPearl[i].hasStolenTreasure}`);
    };
} else {
    for (let pirate of jollyRoger) {
        console.log(`Ship: Jolly Roger; Name: ${pirate.name}; Eye Patch: ${pirate.hasEyePatch}; Wooden Leg: ${pirate.hasWoodenLeg}; Has Stolen Treasure: ${pirate.hasStolenTreasure}`);
    };

    for (let pirate of blackPearl) {
        console.log(`Ship: Black Pearl; Name: ${pirate.name}; Eye Patch: ${pirate.hasEyePatch}; Wooden Leg: ${pirate.hasWoodenLeg}; Has Stolen Treasure: ${pirate.hasStolenTreasure}`);
    };
};


// Dealership

class Car {
    year = '2025';
    model = 'Betterthanlastyearota';
    wheels = 4;
};

let freight = [];

for (let i = 0; i < 3; i++) {
    freight.push(new Car);
};

console.log(freight);
