function greetUser(name) {
    return `Hello, ${name}!`;
};
let result1 = greetUser("Alice");
console.log(result1);




function addNumbers(a, b) {
    return a + b;
};
let result2 = addNumbers(1, 2);
console.log(result2);




function isEven(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    };
};
let result3 = isEven(7);
console.log(result3);




function maxOfTwo(a, b) {
    if (a > b) {
        return a;
    } else if (b > a) {
        return b;
    } else {
        return a;
    };
};
let result4 = maxOfTwo(7, 1);
console.log(result4);




function repeatWord(word, times) {
    return word.repeat(times);
};
let result5 = repeatWord("Hello", 3);
console.log(result5);




function toFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
let result6 = toFahrenheit(7);
console.log(result6);




// function reverseString(str) {
//     // str = hello!
//     let split = str.split('');
//     console.log(split) // [ 'h', 'e', 'l', 'l', 'o', '!' ]
//     let reverseSplit = split.reverse(); 
//     console.log(reverseSplit) //  [ '!', 'o', 'l', 'l', 'e', 'h' ]
//     let rejoinedStrings = reverseSplit.join(''); 
//     console.log(rejoinedStrings) // !olleh
//     return rejoinedStrings;
// };
// let result7 = reverseString("hello!");
// console.log(result7);

function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    };
    return reversed;
}

let result7 = reverseString("hello!");
console.log(result7); // !olleh


function countVowels(str) {
    let vowelCount = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u' || str[i] === 'y') {
            vowelCount ++;
        };
    };
    return vowelCount;
};
let result8 = countVowels("Catdog");
console.log(result8);



function filterEvenNumbers(arr) {
    let newArray = [];
    for (num of arr) {
        if (num % 2 === 0) {
            newArray.push(num);
        };
    };
    return newArray;
}
let result9 = filterEvenNumbers([1,2,3,4,5,6,7]);
console.log(result9);


