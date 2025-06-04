class Vehicle {
  status: "started" | "stopped" | "running" = "started"
  make: string;
  model: string;
  wheels: string | number;
  
  constructor(make: string, model: string, wheels: string | number) {
    this.make = make;
    this.model = model;
    this.wheels = wheels;
  }
  start() {
    this.status = "started";
  }
  stop() {
    this.status = "stopped";
  }
}

class Car extends Vehicle {
  constructor(make: string, model: string) {
    super(make, model, "four");
  }
}


class MotorCycle extends Vehicle {
  constructor(make: string, model: string) {
    super(make, model, 2);
  }
}

function printStatus(vehicle: Vehicle ) {
  if (vehicle.status === "running") {
    console.log("The vehicle is running.");
  } else {
    console.log("The vehicle is stopped.");
  }
}

const myHarley = new MotorCycle("Harley-Davidson", "Low Rider S");
myHarley.start();
printStatus(myHarley);
console.log(myHarley.make.toUpperCase());

const myBuick = new Car("Buick", "Regal");
if (typeof myBuick.wheels === "number") {
  myBuick.wheels = myBuick.wheels - 1;
} else {
  console.log('Wheels property must be a number type to perform arithmetic operations on it')
}
console.log(myBuick.wheels);
console.log(myBuick.model);


class NCycle<T> {
  status: "started" | "stopped" | "running" = "started"
  make: T | T[];
  model: T | T[];
  wheels: string | number;
  
  constructor(make: T | T[], model: T | T[], wheels: string | number) {
    this.make = make;
    this.model = model;
    this.wheels = wheels;
  }
  start() {
    this.status = "started";
  }
  stop() {
    this.status = "stopped";
  }
  print(num: number = 0) : void {
    if (typeof this.make === 'string') {
      console.log(`This is a ${this.make} ${this.model} NCycle`)
    } else if (Array.isArray(this.make) && Array.isArray(this.model)) { 
      console.log(`This NCycle has a ${this.make[num]} ${this.model[num]} at Index: ${num}`)
    } else {
      console.log("This NCycle was not created properly")
    }
  }
  printAll(): void {
    if (Array.isArray(this.make) && Array.isArray(this.model)) {
      for (let i in this.make) {
        console.log(`This NCycle has a ${this.make[i]} ${this.model[i]} at Index: ${i}`)
      }
    } else if (typeof this.make === 'string') {
      console.log(`This is a ${this.make} ${this.model} NCycle`)

    } else {
      console.log("This NCycle was not created properly")
    }

  }
}

// let nCycleTest = new NCycle<string[]>(["2025", "2024"], ["Nissan", "Hyundai"], "four")
// let nCycleTest = new NCycle<string>("2025", "Nissan", "four")
let nCycleTest = new NCycle<number>(1, 2, "four")
console.log(nCycleTest)

nCycleTest.printAll();