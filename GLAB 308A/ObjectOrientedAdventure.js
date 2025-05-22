// // Part 1
// const adventurer = {
//     name: "Robin",
//     health: 10,
//     inventory: ["sword", "potion", "artifact"],
//     companion: {
//         name: "Leo",
//         type: "Cat",
        

//     }

// }

// adventurer.companion.subcompanion = {
//     name: "Frank",
//     type: "Flea",
//     belongings: ["Small Hat", "Sunglasses"]
// }


// adventurer.roll = function (mod=0) {
//     const result = Math.floor(Math.random() * 20) + 1 + mod;
//     console.log(`${this.name} rolled a ${result}.`)
// }

// adventurer.roll();


// // Part 2
// class Character {
//   constructor (name) {
//     this.name = name;
//     this.health = 100;
//     this.inventory = [];
//   }
//   roll(mod=0) {
//     const result = Math.floor(Math.random() * 20) + 1 + mod;
//     console.log(`${this.name} rolled a ${result}.`)
//   }
// }

// let robinChar = new Character('Robin', 20, 'Adventurer')
// let traceyChar = new Character('Tracey', 23, 'Healer')
// let batmanChar = new Character('Batman', 35, 'Fighter')

// // Part 3

// class Adventurer extends Character {
//   constructor (name, age, role) {
//     super(name);
//     this.age = age
//     this.role = role;
//     this.inventory.push("bedroll", "50 gold coins");
//   }
//   scout () {
//     console.log(`${this.name} is scouting ahead...`);
//     super.roll();
//   }
//   logItemList () {
//     console.log(this.inventory)
//   }
// }

// let robinAdvent = new Adventurer('Robin', 20, 'Adventurer')
// let traceyAdvent = new Adventurer('Tracey', 23, 'Healer')
// let batmanAdvent = new Adventurer('Batman', 35, 'Fighter')

// class Companion {
//     constructor (name, type, belongings) {
//         this.name = name
//         this.type = type
//         this.belongings = belongings
//     }
// }

// let frank = new Companion("Frank", "Flea", ["Small Hat", "Sunglasses"])
// let leo = new Companion("Leo", "Cat", [])

// Part 4
class Character {
  constructor (name) {
    this.name = name;
    this.health = 100;
    this.inventory = [];
  }
  static maxHealth = 100;
  roll(mod=0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`)
  }
}

class Adventurer extends Character {
  constructor (name, age, role) {
    super(name);
    this.age = age
    this.role = role;
    this.inventory.push("bedroll", "50 gold coins");
    this.checkRole()
  }
  static roles = ["Fighter", "Healer", "Wizard", "Ninja"]
  checkRole () {
    if (Adventurer.roles.includes(this.role)) {
        console.log("Valid Role")
    } else {
        console.log("Invalid role, will set role to empty string")
        this.role = ''
    }
  }
  scout () {
    console.log(`${this.name} is scouting ahead...`);
    super.roll();
  }
  logItemList () {
    console.log(this.inventory)
  }
}

let john = new Adventurer('John', 40, 'Something Else')
console.log(john.role)

