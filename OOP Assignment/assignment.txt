// 📱 OOP Assignment: Build a Phone Class in JavaScript

// 📝 Objective:
// Create a Phone class that simulates basic functionalities of a mobile phone using classes and encapsulation.

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

// 🎯 Bonus Challenges 1:
// - Add  field `contacts` (array of objects `{name, number}`)  
// - Add method `addContact(name, number)` to add contacts
// - update  `makeCall(contactOrNumber)` method to accept a contact name or number string 
// if a number is passed function will run normally,
// If name is passed, look up number by name on contacts array log ("calling {name} and their number is {number}"), if the name doesn't exist the method should throw an error 
// update call history to store array objects instead of simple stringw, you should save {contactName:null if there is no contact, number,timeOfCall:when the call was made}

// 🎯 Bonus Challenges 2:
// if the brand is samsung, there is 30% percent chance that everytime a method is invoked, print instead WARNING: Your Samsung phone is on fire! It's toast now. Goodbye
// if brand is nokia, the phone never loses battery, If battery level hits 0, it automatically resets to 100% because "Nokia never dies"
//If you try to call any contact whose name includes "pizza", "burger", "fries", or "fast food" (case-insensitive), the phone interrupts you with this message: 
//"Alert! 🚨 Fast food hotline detected. Your phone just ordered a gym membership on your behalf. Time to sweat it out! 🏃‍♂️🔥"