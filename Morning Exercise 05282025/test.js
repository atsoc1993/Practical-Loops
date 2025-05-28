class Hamster {
    constructor(name) {
        this.owner = '';
        this.name = name;
        this.price = 15;
    };
    wheelRun() {
        console.log("Squeak Squeak!");
    };
    eatFood() {
        console.log("Nibble Nibble!");
    };
    getPrice() {
        return this.price;
    };
};

const myHamster = new Hamster("Hal");
console.log(myHamster);
myHamster.wheelRun();
myHamster.eatFood();
console.log(myHamster.getPrice());
console.log(myHamster.owner);


class Person {
    constructor(name) {
        this.name = name;
        this.age = 0;
        this.height = 0;
        this.weight = 0;
        this.mood = 0;
        this.hamsters = [];
        this.bankAccount = 0;
    };
    getName() {
        return this.name;
    };
    getAge() {
        return this.age;
    };
    getWeight() {
        return this.weight;
    };
    greet(name) {
        console.log(`Hello, ${name}`);
    };
    eat() {
        this.weight += 1;
        this.mood += 1;
    };
    exercise() {
        this.weight -= 1;
    };
    ageUp() {
        this.age += 1;
        this.height += 1;
        this.weight += 1;
        this.mood += 1;
        this.bankAccount += 10;
    };
    buyHamster(hamster) {
        this.hamsters.push(hamster);
        this.mood += 10;
        this.bankAccount -= hamster.getPrice();
    };
};

const timmy = new Person('Timmy');
for (let i = 0; i < 5; i++) {
    timmy.ageUp();
    timmy.eat();
    timmy.exercise();
};

for (let i = 0; i < 9; i++) {
    timmy.ageUp();
};

const gus = new Hamster('Gus');
gus.owner = 'Timmy'

timmy.buyHamster(gus);

for (let i = 0; i < 15; i++) {
    timmy.ageUp();
};

for (let i = 0; i < 2; i++) {
    timmy.eat();
    timmy.exercise();
};


console.log(timmy);
console.log(gus);