// REQUESTS (how we interact with this data):
const personal = () => new Promise((resolve) => setTimeout(() => resolve({ name: 'Bob', lastName: 'Thompson'}), 300))
const business = () => new Promise((resolve) => setTimeout(() => resolve({ occupation: 'Farmer', salary: 300 }), 1000))
const residence = () => new Promise((resolve) => setTimeout(() => resolve({ country: 'USA', state: 'Florida' }), 1000))

// WHAT WE WANT:
// print: [firstName] is a [occupation] from [state] [country]

// OBJECTIVE:
// Extract the data about bob that is currently wrapped in promises
// and piece together the string we want (above). Don't alter any of
// the code above and don't recreate the data yourself.

personal() 
    .then((personalObj) => {
        business()
            .then((businessObj) => { 
                residence()
                .then((residenceObj) => {
                    console.log(`${personalObj.name} is a ${businessObj.occupation} from ${residenceObj.state}, ${residenceObj.country}!`);
                });
            });
    });
// EXTRA: 
// Refactor your code using Promise.all()

// CODE BELOW:

Promise.all([personal(), business(), residence()])
    .then(([personalObj, businessObj, residenceObj]) => console.log(`${personalObj.name} is a ${businessObj.occupation} from ${residenceObj.state}, ${residenceObj.country}!`));

// // Additional Tasks
// // https://www.w3resource.com/javascript-exercises/oop/index.php

// // 1. Person Class with Details

// // Write a JavaScript program to create a class called "Person" with properties for name, age and country. 
// // Include a method to display the person's details. Create two instances of the 'Person' class and display their details.

// // Without Constructor
// class Person {
//     name = 'Bob';
//     age = '31';
//     country = 'USA';
//     getPersonalDetails() {
//         console.log(`Name: ${this.name}; Age: ${this.age}, Country: ${this.country}`);
//         return [this.name, this.age, this.country];
//     };
// };

// // With Constructor
// class Person {
//     constructor(name, age, country) {
//         this.name = name;
//         this.age = age;
//         this.country = country;
//     };
//     getPersonalDetails() {
//         console.log(`Name: ${this.name}; Age: ${this.age}, Country: ${this.country}`);
//         return [this.name, this.age, this.country];
//     };
// };

// let personOne = new Person('Bob', '31', 'USA')
// let personTwo = new Person('John', '26', 'Brazil')

// // I'm  going to do classes with constructors (only) going forward :)

// // 2. Rectangle Class with Area and Perimeter

// // Write a JavaScript program to create a class called 'Rectangle' with properties for width and height.
// //  Include two methods to calculate rectangle area and perimeter. Create an instance of the 'Rectangle' class and calculate its area and perimeter.

// class Rectangle {
//     constructor(area, perimeter) {
//         this.area = area;
//         this.perimeter = perimeter;
//     };
//     calculateArea() {
//         console.log(`Area of this Rectangle is: ${this.area}`);
//         return this.area;
//     };
//     calculatePerimeter() {
//         console.log(`Area of this Rectangle is: ${this.area}`);
//         return this.area;
//     };
// };

// // 3. Vehicle and Car Classes with Inheritance

// // Write a JavaScript program that creates a class called 'Vehicle' with properties for 
// // make, model, and year. Include a method to display vehicle details. 
// // Create a subclass called 'Car' that inherits from the 'Vehicle' class and includes an additional property for the number of doors. 
// // Override the display method to include the number of doors.

// class Vehicle {
//     constructor(make, model, year) {
//         this.make = make;
//         this.model = model;
//         this.year = year;
//     };
//     getDetails() {
//         return [this.make, this.model, this.year];
//     };
// };

// class Car extends Vehicle {
//     constructor(make,model, year, doors) {
//         super(make, model, year);
//         this.doors = doors;
//     };
//     getDetails() {
//         return this.doors;
//     };
// };

// // 4. BankAccount Class with Deposit and Withdrawal

// // Write a JavaScript program that creates a class called "BankAccount" 
// // with properties for account number and balance. Include methods to deposit and withdraw money from the account. 
// // Create some instances of the "BankAccount" class, deposit some money, and withdraw a portion of it.

// class BankAccount {
//     constructor(accountNumber, balance) {
//         this.accountNumber = accountNumber;
//         this.balance = balance;
//     };
//     deposit(amount) {
//         this.balance += amount;
//     };
//     withdraw(amount) {
//         if (this.balance > amount) {
//             this.balance -= amount;
//         } else {
//             console.log("Insufficient Funds...")
//         }
//     };
// };


// let bankAccountOne = new BankAccount('12345', 10);
// bankAccountOne.deposit(100);
// bankAccountOne.withdraw(120);

// let bankAccountTwo = new BankAccount('12345', 10);
// bankAccountOne.deposit(100);
// bankAccountOne.withdraw(80);


// // 5. Shape, Circle, and Triangle Classes with Area Calculation

// // Write a JavaScript program that creates a class called 'Shape' with a method to calculate the area. 
// // Create two subclasses, 'Circle' and 'Triangle', that inherit from the 'Shape' class and override the area calculation method.
// //  Create an instance of the 'Circle' class and calculate its area. Similarly, do the same for the 'Triangle' class.

// class Shape {
//     calculateArea() {
//         // No initial shape instructions >.>
//     };
// };

// // 2 pi r^2
// class Circle extends Shape {
//     calculateArea(radius) {
//         return 2 * Math.PI * (radius**2);
//     };
// };

// // Triangle area equation is area = 0.5 × b × h
// class Triangle extends Shape {
//     calculateArea(base, height) {
//         return 0.5 * base * height;
//     };
// };

// // 6. Employee and Manager Classes with Salary Calculation

// // Write a JavaScript program that creates a class called 'Employee' with properties for name and salary. 
// // Include a method to calculate annual salary. Create a subclass called 'Manager' that inherits from the 
// // 'Employee' class and adds an additional property for department.
// //  Override the annual salary calculation method to include bonuses for managers. 
// // Create two instances of the 'Manager' class and calculate their annual salary.

// class Employee {
//     constructor(name, salary) {
//         this.name = name;
//         this.salary = salary;
//     };
//     getAnnualSalary() {
//         return this.salary;
//     };
// };

// class Manager extends Employee {
//     constructor(name, salary, department) {
//         super(name, salary);
//         this.department = department
//     };
//     getAnnualSalary() {
//         return this.salary + 2500;
//     };
// };

// // 7. Book and Ebook Classes with Price

// // Write a JavaScript program that creates a class `Book` with properties for title, author, and publication year. 
// // Include a method to display book details. Create a subclass called 'Ebook' that inherits from the 'Book' class and 
// // includes an additional property for book price. 
// // Override the display method to include the book price. Create an instance of the 'Ebook' class and display its details.

// class Book {
//     constructor(title, author, publicationYear) {
//         this.title = title;
//         this.author = author;
//         this.publicationYear = publicationYear;
//     };
//     displayBookDetails() {
//         console.log(`Title: ${title}; Author: ${author}; Publication Year: ${this.publicationYear}`);
//     };
// };

// class eBook extends Book {
//     constructor(title, author, publicationYear, bookPrice) {
//         super(title, author, publicationYear);
//         this.bookPrice = bookPrice;
//     };
//     displayBookDetails() {
//         console.log(`Title: ${title}; Author: ${author}; Publication Year: ${this.publicationYear}; Price: ${price}`);
//     };
// };

// // 8. Animal and Dog Classes with Sound

// // Write a JavaScript program that creates a class called 'Animal' with properties for species and sound. 
// // Include a method to make the animal's sound. Create a subclass called 'Dog' that inherits from the 'Animal' class and adds an additional property for color. 
// // Override the make sound method to include the dog's color. Create an instance of the 'Dog' class and make it make its sound.

// class Animal {
//     constructor(species, sound) {
//         this.species = species;
//         this.sound = sound;
//     };
//     makeSound() {
//         console.log(`${this.sound}!`)
//     };
// };

// class Dog extends Animal {
//     constructor(species, sound, color) {
//         super(species, sound);
//         this.color = color;
//     };
//     makeSound() {
//         console.log(`${this.sound}! Color was ${this.color}`)
//     };
// };

// // 9. Bank Class with Branch Management

// // Write a JavaScript program that creates a class called Bank with properties for bank names and branches. 
// // Include methods to add a branch, remove a branch, and display all branches. Create an instance of the Bank class and 
// // perform operations to add and remove branches.

// class Bank {
//     constructor(bankNames, branches) {
//         this.bankNames = bankNames;
//         this.branches = branches;
//     };
//     addBranch(branch) {
//         this.branches.push(branch);
//     };
//     removeBranch(branch) {
//         let newThisBranch = [];
//         this.branches.forEach((branchInBranches) => {
//             if (branchInBranches !== branch) {
//                 newThisBranch.push(branchInBranches);
//             };
//         });
//         this.branches = newThisBranch
//     };
//     logBranches() {
//         console.log(this.branches);
//     }
// };

// let newBank = new Bank(['Bank1', 'Bank2', 'Bank3'], ['Branch1', 'Branch2', 'Branch3'])
// newBank.logBranches();
// newBank.removeBranch('Branch1')
// newBank.logBranches();
// newBank.addBranch('Branch1')
// newBank.logBranches();

// // 10. Product and PersonalCareProduct Classes with Warranty

// // Write a JavaScript program that creates a class called Product with properties for product ID, name, and price.
// //  Include a method to calculate the total price by multiplying the price by the quantity. Create a subclass called PersonalCareProduct that 
// // inherits from the Product class and adds an additional property for the warranty period. 
// // Override the total price calculation method to include the warranty period. Create an instance of the PersonalCareProduct class and calculate its total price.

// class Product {
//     constructor(id, name, price) {
//         this.id = id
//         this.name = name
//         this.price = price
//     };
//     calculatePrice(x) {
//         return x * this.price;
//     };
// };

// class PersonalCareProduct extends Product {
//     constructor(id, name, price, warrantyPeriod) {
//         super(id, name, price);
//         this.warrantyPeriod = warrantyPeriod;
//     };
//     calculatePrice(x) {
//         return [x * this.price, this.warrantyPeriod];
//     };
// };

// // 11. BankAccount Class with Transfers Between Accounts

// // Write a JavaScript program that creates a class called BankAccount with properties for account number, 
// // account holder name, and balance. Include methods to deposit, withdraw, and transfer money between accounts.
// //  Create multiple instances of the BankAccount class and perform operations such as depositing, withdrawing, and transferring money.

// class BankAccount {
//     constructor(accountHolderName, balance) {
//         this.accountHolderName = accountHolderName;
//         this.balance = balance;
//     };
//     deposit(amount) {
//         this.balance += amount;
//     };
//     withdraw(amount) {
//         if (this.balance > amount) {
//             this.balance -= amount;
//         } else {
//             console.log("Insufficient Funds...")
//         }
//     };
//     // ignore transfer method, will take too long
// };

// // 12. University Class with Department Management

// // Write a JavaScript program that creates a class called University with properties for university name and departments.
// //  Include methods to add a department, remove a department, and display all departments. 
// // Create an instance of the University class and add and remove departments.

// class University {
//     constructor(name, departments) {
//         this.name = name;
//         this.departments = departments;
//     };
//     adddepartment(department) {
//         this.departments.push(department);
//     };
//     removedepartment(department) {
//         let newThisdepartment = [];
//         this.departments.forEach((departmentIndepartments) => {
//             if (departmentIndepartments !== department) {
//                 newThisdepartment.push(departmentIndepartments);
//             };
//         });
//         this.departmentes = newThisdepartment;
//     };
//     logDepartments() {
//         console.log(this.departments)
//     };
// };