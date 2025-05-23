
// 🔧 Requirements:
// Create a class called `Phone` with the following:

//  Fields:
// - brand (string)
// - model (string)
// - batteryLevel (number, 0 to 100)
// - isOn (boolean)
// - callHistory (array of strings)

// ✅ Constructor:
// - Takes brand, model as arguments
// - Initializes batteryLevel to 100, isOn to false, callHistory to an empty array

// 📦 Methods:
// 🔌 turnOn(): turns the phone on if battery > 0
// 📴 turnOff(): turns the phone off
// 📞 makeCall(number): makes a call, drains 10% battery, adds to call history
// 🔋 charge(amount): increases battery level up to 100
// 📄 getCallHistory(): returns a copy of call history
// 📱 getInfo(): returns brand, model, battery level, and power status



// // // 🎯 Bonus Challenges 1:
// // // - Add  field `contacts` (array of objects `{name, number}`)  (Create a new property called contacts)
// // // - Add method `addContact(name, number)` to add contacts
// // // - update  `makeCall(contactOrNumber)` method to accept a contact name or number string
// // // if a number is passed function will run normally,
// // // If name is passed, look up number by name on contacts array log ("calling {name} and their number is {number}"), if the name doesn't exist the method should throw an error
// // // update call history to store array objects instead of simple stringw, you should save {contactName:null if there is no contact, number,timeOfCall:when the call was made}

// // // 🎯 Bonus Challenges 2:
// // // if the brand is samsung, there is 30% percent chance that everytime a method is invoked, print instead WARNING: Your Samsung phone is on fire! It's toast now. Goodbye
// // // if brand is nokia, the phone never loses battery, If battery level hits 0, it automatically resets to 100% because "Nokia never dies"
// // //If you try to call any contact whose name includes "pizza", "burger", "fries", or "fast food" (case-insensitive), the phone interrupts you with this message:
// // //"Alert! 🚨 Fast food hotline detected. Your phone just ordered a gym membership on your behalf. Time to sweat it out! 🏃‍♂️🔥"


// = is assigning a value eg; x = 1
// == check if these two things are the same, also don't care if they are different types eg; 2 == '2' (true)
// === check if these two things are the same AND the same type eg; 2 === 2
// x >= y is x greater than y
// x <= y is x less than y 
// x !== y is x not equal to y

class Phone {
    constructor(x, y) {
        this.brand = x;
        this.model = y;
        this.batteryLevel = 100;
        this.isOn = false;
        this.callHistory = [];
        this.contacts = [];
        if (self.brand === 'Samsung') {
            if (this.samsungCheckFire()) return;
        };
    };
    // 🔌 turnOn(): turns the phone on if battery > 0
    turnOn() {
        if (self.brand === 'Samsung') {
            if (this.samsungCheckFire()) return;
        };
        if (this.batteryLevel > 0 && this.isOn === false) {
            this.isOn = true;
            console.log("Phone is now on!");

        } else if (this.batteryLevel === 0) {
            console.log("No battery, please charge!");

        } else if (this.isOn === true) {
            console.log("Phone is already on");
        };
    };
    // 📴 turnOff(): turns the phone off
    turnOff() {
        if (self.brand === 'Samsung') {
            if (this.samsungCheckFire()) return;
        };
        if (this.isOn === true) {
            this.isOn = false;
            console.log("Phone turned off!");
        } else {
            console.log("Phone is already off!");
        };
    };
    // 📞 makeCall(number): makes a call, drains 10% battery, adds to call history
    // makeCall(number) {
    //     if (this.batteryLevel > 0) {
    //         console.log(`We called ${number}!`)
    //         this.batteryLevel -= 10
    //         this.callHistory.push(number)

    //         if (this.batteryLevel === 0) {
    //             this.isOn = false;
    //             console.log("Phone died!")
    //         };
    //     };
    // };
    // 🔋 charge(amount): increases battery level up to 100
    charge() {
        if (self.brand === 'Samsung') {
            if (this.samsungCheckFire()) return;
        };
        if (this.batteryLevel < 100) {
            this.batteryLevel = 100;
            console.log("Phone charged to 100%");
        } else {
            console.log("Phone is already charged!");
        };
    };
    // 📄 getCallHistory(): returns a copy of call history
    getCallHistory() {
        if (self.brand === 'Samsung') {
            if (this.samsungCheckFire()) return;
        }
        return this.callHistory;
    };
    // 📱 getInfo(): returns brand, model, battery level, and power status
    getInfo() {
        if (self.brand === 'Samsung') {
            if (this.samsungCheckFire()) return;
        }
        let brand = this.brand;
        let model = this.model;
        let batteryLevel = this.batteryLevel;
        let isOn = this.isOn;

        let listOfInfo = [];
        listOfInfo.push(brand);
        listOfInfo.push(model);
        listOfInfo.push(batteryLevel);
        listOfInfo.push(isOn);
        listOfInfo.push(brand);
        return listOfInfo;
    };
    addContact(name, number) {
        if (self.brand === 'Samsung') {
            if (this.samsungCheckFire()) return;
        };
        let contactObject = { name: name, number: number };
        this.contacts.push(contactObject);
    };

    makeCall(contactNameOrNumber) { 
        if (self.brand === 'Samsung') {
            if (this.samsungCheckFire()) return;
        }
        if (this.batteryLevel > 0) {
            if (typeof contactNameOrNumber === 'number') {
                console.log("Calling Unsaved Number");
                let dateObj = new Date();
                let dateStr = dateObj.toDateString()
                let timeStr = dateObj.toTimeString();
                let dateTimeString = dateStr + ' ' + timeStr;
                let callHistoryObject = {contactName: null, number: contactNameOrNumber, timeOfCall: dateTimeString}
                this.contacts.push(callHistoryObject);
            } else {
                if (
                    contactNameOrNumber === "pizza" ||
                    contactNameOrNumber === "burger" ||
                    contactNameOrNumber === "fries" ||
                    contactNameOrNumber === "fast food" 
                ) {
                    console.log("Alert! 🚨 Fast food hotline detected. Your phone just ordered a gym membership on your behalf. Time to sweat it out! 🏃‍♂️🔥");
                    return;
                }
                foundContact = false;
                for (let contact of this.contacts) {
                    if (contact.name === contactNameOrNumber) {
                        contactNumber = contact.number;
                        console.log(`Called ${contact.name}`);
                        foundContact = true;

                        if (this.batteryLevel === 0) {
                            if (this.brand.toLowercase() === 'Nokia') {
                                this.batteryLevel = 100;
                                console.log("Nokia never dies")
                            } else {
                                this.isOn = false;
                                console.log("Phone died!");
                            }

                        };
                    };
                };
                if (!foundContact) {
                    throw Error("Could not find a contact for this name!")
                };
            };
        } else {
            console.log("Phone is off!");
        };
    };

    samsungCheckFire() {
        let phoneOnFire = ((Math.random() * 100) < 30)
        if (phoneOnFire) {
            console.log("WARNING: Your Samsung phone is on fire! It's toast now. Goodbye")
        };
        return True
    };
};



// let myPhone = new Phone('iPhone', '10');
// myPhone.addContact("Kevin", 1111111111)
// myPhone.makeCall("Kevin")
// myPhone.turnOn();
// console.log(myPhone.isOn);

// myPhone.makeCall(6316801234)
// myPhone.makeCall(6316803456)
// myPhone.makeCall(6316808422)
// myPhone.makeCall(6316801111)
// myPhone.makeCall(6316803333)
// myPhone.makeCall(6316803456)
// myPhone.makeCall(6316803333)
// myPhone.makeCall(6316808422)
// myPhone.makeCall(6316803333)
// myPhone.makeCall(6316808422)
// myPhone.makeCall(6316803456)

// myPhone.turnOn();

// myPhone.charge();

// myPhone.turnOn();

// let callHistory = myPhone.getCallHistory();
// console.log(callHistory);


// num = 5
// console.log(typeof num === 'number')





























// // class Phone {
// //     constructor(brand, model) {
// //         this.brand = brand;
// //         this.model = model;
// //         this.batteryLevel = 100; // 100%
// //         this.isOn = false;
// //         this.callHistory = [];
// //         this.contacts = [];
// //     };
// //     turnOn() {
// //         if (this.batteryLevel > 0) {
// //             this.isOn = true;
// //             console.log("Phone turned on!")
// //         } else {
// //             console.log("Cant turn on phone! No battery.")
// //         };
// //     };
// //     turnOff() {
// //         this.isOn = false;
// //         console.log("Phone turned off!")
// //     };
// //     makeCall(number) {

// //         if (this.isOn === false) {
// //             console.log("Phone is off!");

// //         } else {
// //             console.log(`Called ${number}`);
// //             this.batteryLevel -= 10; // - 10%
// //             console.log(`Call History Before Call: ${this.callHistory}`);
// //             this.callHistory.push(number);
// //             console.log(`Call History After Call: ${this.callHistory}`);
// //             if (this.batteryLevel < 1 ) {
// //                 this.isOn = false;
// //                 console.log("Phone died!");
// //             }
// //         };
// //     };
// //     charge () {
// //         this.batteryLevel = 100;
// //     };
// //     getCallHistory () {
// //         return this.callHistory;
// //     };
// //     getInfo() {
// //         return [this.brand, this.model, this.batteryLevel, this.isOn];
// //     };

// //     addContact(name, number) {
// //         let contactObject = {name: name, number: number};
// //         this.contacts.push(contactObject);
// //     };
// // };


// // let myPhone = new Phone('iPhone', '10' );
// // myPhone.turnOn();
// // console.log(myPhone.isOn);

// // myPhone.makeCall('631-680-1234')
// // myPhone.makeCall('631-680-3456')
// // myPhone.makeCall('631-680-8422')
// // myPhone.makeCall('631-680-1111')
// // myPhone.makeCall('631-680-3333')
// // myPhone.makeCall('631-680-3456')
// // myPhone.makeCall('631-680-3333')
// // myPhone.makeCall('631-680-8422')
// // myPhone.makeCall('631-680-3333')
// // myPhone.makeCall('631-680-8422')
// // myPhone.makeCall('631-680-3456')

// // myPhone.turnOn();

// // myPhone.charge();

// // myPhone.turnOn();

// // let callHistory = myPhone.getCallHistory();

// // let [brand, model, batteryLevel, isOn] = myPhone.getInfo()

// // myPhone.contacts = []

// // // 🎯 Bonus Challenges 1:
// // // - Add  field `contacts` (array of objects `{name, number}`)  (Create a new property called contacts)
// // // - Add method `addContact(name, number)` to add contacts
// // // - update  `makeCall(contactOrNumber)` method to accept a contact name or number string
// // // if a number is passed function will run normally,
// // // If name is passed, look up number by name on contacts array log ("calling {name} and their number is {number}"), if the name doesn't exist the method should throw an error
// // // update call history to store array objects instead of simple stringw, you should save {contactName:null if there is no contact, number,timeOfCall:when the call was made}

// // // 🎯 Bonus Challenges 2:
// // // if the brand is samsung, there is 30% percent chance that everytime a method is invoked, print instead WARNING: Your Samsung phone is on fire! It's toast now. Goodbye
// // // if brand is nokia, the phone never loses battery, If battery level hits 0, it automatically resets to 100% because "Nokia never dies"
// // //If you try to call any contact whose name includes "pizza", "burger", "fries", or "fast food" (case-insensitive), the phone interrupts you with this message:
// // //"Alert! 🚨 Fast food hotline detected. Your phone just ordered a gym membership on your behalf. Time to sweat it out! 🏃‍♂️🔥"