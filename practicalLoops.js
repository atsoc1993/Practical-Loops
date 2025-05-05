/*
Part 1: Fizz Buzz
To begin, solve the following classic “Fizz Buzz” problem. There are a few different ways to do this - experiment with what you think is the most efficient. Once you have solved the problem, ask yourself if there could be another way; and if so, would it be better.
Accomplish the following:

Loop through all numbers from 1 to 100.
If a number is divisible by 3, log “Fizz.”
If a number is divisible by 5, log “Buzz.”
If a number is divisible by both 3 and 5, log “Fizz Buzz.”
If a number is not divisible by either 3 or 5, log the number.
Remember to commit your solution once it is working.
*/

for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("Fizz Buzz.");

    } else if (i % 5 == 0) {
        console.log("Buzz.");

    } else if (i % 3 == 0) {
        console.log("Fizz.");

    } else {
        console.log(i);
    }
}

/*
Part 2: Prime Time
Now we will move onto something slightly more complex.
Context: A prime number is any whole number greater than 1 that cannot be exactly divided by any whole number other than itself and 1. For example,
 the number 5 is prime because it cannot be divided by 4, 3, or 2; it can only be divided by itself (5) and 1. Similarly, the numbers 7 and 11 are prime. 
 As numbers become larger, determining whether or not they are prime is increasingly difficult, but loops make this process relatively easy!

 Write a script that accomplishes the following:
Declare an arbitrary number, n.
Create a loop that searches for the next prime number, starting at n and incrementing from there.
As soon as you find the prime number, log that number and exit the loop.

Continuing with the example above, if n is equal to 4, your loop should log 5. Similarly, if n is 5, it should log 7, and if n is 9, it should log 11.
 Test your loop with higher numbers and reference an online prime number table to determine the accuracy of your code.
Be careful! If you set n to a number too large, your loop could take a long time to process.
*/

let n = 20;

for (let i = n + 1; ; i++) {
    let divisors = 0;

    for (let j = 1; j <= i; j++) {
        if (i % j == 0) {
            divisors++
        }
    }

    if (divisors === 2) {
        console.log(i)
        break
    }
}

/*
Part 3: Feeling Loopy
As a final task, solve the following practical problem regarding string processing.
Context: A CSV file, or “Comma-Separated Values” file is traditionally used to store tabular data. You may be familiar with CSVs through past use of programs such as Microsoft Excel or Google Sheets. While each of these programs save their data in different formats to preserve style (e.g., font color or cell backgrounds), at their core, they are storing CSV data.
CSV data looks like this:
ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26
Not very nice to look at. The “\n” is an escaped Line Feed, which indicates that the following data should begin on a new line, as follows:
ID,Name,Occupation,Age 42,Bruce,Knight,41 57,Bob,Fry Cook,19 63,Blaine,Quiz Master,58 98,Bill,Doctor’s Assistant,26
As you may have guessed, these values being “comma-separated” means that each comma is also a delimiter. This is why this type of data is traditionally viewed in tables. Here is how the data looks once fully parsed:

*/


let cell1 = '';
let cell2 = '';
let cell3 = '';
let cell4 = '';

let currentStr = '';

let cell1Complete = false;
let cell2Complete = false;
let cell3Complete = false;
let cell4Complete = false;

let foundSpace = false;
let numCommas = 0;
let loggingComplete = false;
let i = 0;

while (!loggingComplete) {

    if (numCommas === 3 ){
        while (true) {
            if (str[i] === '\n' || i === str.length) {
                break
            } else { 
                cell4 += str[i]
                i ++
            }
        }
        console.log(`${cell1},${cell2},${cell3},${cell4}`)
        numCommas= 0
        cell1Complete = false;
        cell2Complete = false;
        cell3Complete = false;
        cell4Complete = false;
        cell1 = ''
        cell2 = ''
        cell3 = ''
        cell4 = ''
    }
    else if (str[i] === ',') {
        numCommas++

        if (!cell1Complete) {
            cell1 = currentStr
            currentStr = ''
            cell1Complete = true

        } else if (!cell2Complete) {

            cell2 = currentStr
            currentStr = ''
            cell2Complete = true;

        } else if (!cell3Complete) {

            cell3 = currentStr
            currentStr = ''
            cell3Complete = true;

        } else if (!cell4Complete) {
        
            cell4 = currentStr
            currentStr = ''
            cell4Complete = true;
}

    } else {
        if (i >= str.length) {
            loggingComplete = true;
        }
        currentStr += str[i]
    }
    i ++
}

