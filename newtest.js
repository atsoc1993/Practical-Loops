/*
-------------------------------
1. Greet User
-------------------------------
Write a function greetUser(name) that returns "Hello, <name>!"
    
    Example:
    greetUser("Alice"); -> "Hello, Alice!"

*/

function greetUser(name) {
    return `Hello, ${name}!`;
}

let result1 = greetUser("Leo");
// console.log(result1);


/*
-------------------------------
2. Add Two Numbers
-------------------------------
Write a function addNumbers(a, b) that returns the sum of two numbers.

    Example:
    addNumbers(3, 5); -> 8
*/

function addNumbers(a, b) {
    return a + b;
}

let result2 = addNumbers(7, 3);
// console.log(result2);

/*
-------------------------------
3. Check Even or Odd
-------------------------------
Write a function isEven(num) that returns true if the number is even, false if odd.

    Example:
    isEven(4); -> true
    isEven(7); -> false
*/


function isEven(num) {
    return num % 2 === 0;
};

let result3 = isEven(7);
// console.log(result3);

/*
-------------------------------
4. Find the Larger Number
-------------------------------
Write a function maxOfTwo(a, b) that returns the larger of the two numbers.

    Example:
    maxOfTwo(10, 20); -> 20
*/


function maxOfTwo(a, b) {
    if (a > b) {
        return a;
    } else if (b > a) {
        return b;
    } else {
        return a;
    };
};

let result4 = maxOfTwo(3, 3);
// console.log(result4); 

/*
-------------------------------
5. Repeat a Word
-------------------------------
Write a function repeatWord(word, times) that returns the word repeated X 
number of times.

    Example:
    repeatWord("hi", 3); -> "hihihi"
*/

function repeatWord(word, times) {
    return word.repeat(times)
};

let result5 = repeatWord("Goodbye", 56);
console.log(result5);

/*
-------------------------------
6. Convert Celsius to Fahrenheit
-------------------------------
Write a function toFahrenheit(celsius) that converts Celsius to Fahrenheit.

    Formula: F = C * 9/5 + 32

    Example:
    toFahrenheit(0); -> 32
    toFahrenheit(100); -> 212
*/

function toFahrenheit(celcius) {
    return celcius * 9/5 + 32;
}

let result6 = toFahrenheit(7);
console.log(result6);