function characterCounter({ string }) {
    let mappingObj = {};
    for (s of string) {
        if (mappingObj.hasOwnProperty(s)) {
            mappingObj[s] = mappingObj.s + 1;
        } else {
            mappingObj[s] = 1;
        }
    }
    return mappingObj;
};


// let resultObj = characterCounter({ string: 'test' });
// console.log(resultObj);

function changeOoneTime({ itemCost, amountPaid }) {

    itemCost = itemCost * 100
    amountPaid = amountPaid * 100
    let denominationsObj = {};
    let change = amountPaid - itemCost;
    let twentiesDenomination = 2000;
    let fivesDenomination = 500;
    let onesDenomination = 100;
    let quartersDenomination = 25;
    let nicklesDenomination = 5;
    let penniesDenomination = 1;

    denominationsObj.twenties = Math.floor(change / twentiesDenomination);
    change -= denominationsObj.twenties * twentiesDenomination;

    denominationsObj.fives = Math.floor(change / fivesDenomination);
    change = change - (denominationsObj.fives * fivesDenomination);

    denominationsObj.ones = Math.floor(change / onesDenomination);
    change -= denominationsObj.ones * onesDenomination;

    denominationsObj.quarters = Math.floor((change - (change % quartersDenomination)) / quartersDenomination);
    change -= denominationsObj.quarters * quartersDenomination;
    ;
    denominationsObj.nickles = Math.floor((change - (change % nicklesDenomination)) / nicklesDenomination);
    change -= denominationsObj.nickles * nicklesDenomination;
    ;
    denominationsObj.pennies = Math.floor((change - (change % penniesDenomination)) / penniesDenomination);
    change -= denominationsObj.pennies * penniesDenomination;

    return denominationsObj;
}


function changeOnTime({ itemCost, amountPaid }) {

    let denominationsObj = {
        twenties: 20,
        fives: 5,
        ones: 1,
        quarters: 0.25,
        nickles: 0.05,
        pennies: 0.01,
    };

    let change = amountPaid - itemCost;

    let changeObj = {};

    for (denProp in denominationsObj) {
        while ((change - denominationsObj[denProp]) >= 0) {
            change -= denominationsObj[denProp];
            if (changeObj[denProp]) {
                changeObj[denProp]++;
            } else {
                changeObj[denProp] = 1;
            }
        }   
    }
    return changeObj;
}

// let denominationsObjResultOne = changeDenominationsOne({ itemCost: 20, amountPaid: 66.56});
// let denominationsObjResultTwo = changeDenominationsTwo({ itemCost: 20, amountPaid: 66.56});
// console.log(denominationsObjResultOne);
// console.log(denominationsObjResultTwo);




function subtractTwoXTimesO_nTime(startingNumber, timesToSubtract) {
    let timesSubtracted = timesToSubtract
    let endingNumber = startingNumber
    while (timesSubtracted !== 0) {
        endingNumber -= 2
        timesSubtracted -= 1
    }

    return endingNumber
}


function subtractTwoXTimesO_oneTime(startingNumber, timesToSubtract) {
    let endingNumber = startingNumber - (timesToSubtract * 2)
    return endingNumber
}

console.log("Starting O(n) Time Function")
console.log(subtractTwoXTimesO_nTime(1000, 3000000000))
console.log("Finished O(n) Time Function")

console.log("Starting O(1) Time Function")
console.log(subtractTwoXTimesO_oneTime(1000, 3000000000))
console.log("Finished O(1) Time Function")
