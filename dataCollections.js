
// // Part 1.1
// const fizzBuzzList = []
// const buzzList = []
// const fizzList = []
// const numsNeitherFizzOrBuzz = []

// for (let i = 1; i <= 100; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//         fizzBuzzList.push(i)

//     } else if (i % 5 == 0) {
//         buzzList.push(i)

//     } else if (i % 3 == 0) {
//         fizzList.push(i)

//     } else {
//         numsNeitherFizzOrBuzz.push(i)
//     }
// }

// console.log(`Fizz Buzzes: ${fizzBuzzList}`);
// console.log(`Buzzes: ${buzzList}`);
// console.log(`Fizzes: ${fizzList}`);
// console.log(`Not Fizz or Buzz: ${numsNeitherFizzOrBuzz}`);


// Part 1.2
// Arrays not necessary for part 2 because the output is only 1 integer



// let csv = 'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26';
// Super Easy version:
// const allArrays = []
// const splitResult = csv.split('\n').forEach((array) => allArrays.push([array]))
// console.log(allArrays)



// let csv = 'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26';
// let columnCount = 0;
// let count = 1;

// for (let i = 0; i < csv.length; i++) {
//     if (csv[i] !== ',') {
//         columnCount ++
//     } else if (csv[i] !== '\n') {
//         columnCount += 2
//         break
//     }
// } 
// for (let i = 0; i < csv.length; i++) {
//     if (csv[i] !== ',' && csv[i] !== '\n') {
//         tmp += csv[i];
//     } else {
//         if (count === 1) {
//             id = tmp;
//         } else if (count === 2) {
//             userName = tmp;
//         } else if (count === 3) {
//             occupation = tmp;
//         } else {
//             age = tmp;
//         }

//         if (count < columnCount) {
//             count++;
//         } else {
//             outPutTable.push([id, userName, occupation, age])
//             count = 1;
//         }
//         tmp = '';
//     }
//     if (i === csv.length - 1) {
//         outPutTable.push([id, userName, occupation, age])
//     }
// }
// console.log(outPutTable)


let csv = 'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26';
let row = [];
let table = [];
let tmp = '';

for (let i = 0; i < csv.length; i++) {
    if (csv[i] !== ',' && csv[i] !== '\n') {
        tmp += csv[i];
    } else {
        row.push(tmp);
        tmp = '';

        if (csv[i] === '\n') {
            table.push(row);
            row = [];
        }
    }
}
row.push(tmp);
table.push(row);
console.log(table)