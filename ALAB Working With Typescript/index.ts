class Vehicle {
  status: string = "stopped";
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

function printStatus(vehicle: Vehicle | Car | MotorCycle) {
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
