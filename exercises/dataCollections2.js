
starting_array = [
    ["ID", "Name", "Occupation", "Age"], 
    ["42", "Bruce", "Knight", "41"], 
    ["57", "Bob", "Fry Cook", "19"], 
    ["63", "Blaine", "Quiz Master", "58"], 
    ["98", "Bill", "Doctor’s Assistant", "26"]
];


keys = [starting_array[0][0].toLowerCase(), starting_array[0][1].toLowerCase(), starting_array[0][2].toLowerCase(), starting_array[0][3].toLowerCase()];

let finalArray = [];
for (let i = 1; i < starting_array.length; i++) {
        temp_object = {}
        temp_object[keys[0]] = starting_array[i][0];
        temp_object[keys[1]] = starting_array[i][1];
        temp_object[keys[2]] = starting_array[i][2];
        temp_object[keys[3]] = starting_array[i][3];
        finalArray.push(temp_object);
};



finalArray.pop();

const bilboObject = { id: "7", name: "Bilbo", occupation: "None", age: "111" }
finalArray.push(bilboObject);


const barryObject = { id: "48", name: "Barry", occupation: "Runner", age: "25" }

let finalArraySecondHalf = finalArray.slice(1);

let finalArrayFirstHalf = finalArray.slice(0, 1);

const adjustedArray = [...finalArrayFirstHalf, barryObject, ...finalArraySecondHalf];
console.log(adjustedArray);

