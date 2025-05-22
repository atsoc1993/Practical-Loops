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


let resultObj = characterCounter({ string: 'test' });
console.log(resultObj);

function changeDenominationsOne({ itemCost, amountPaid }) {

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
    ;
    denominationsObj.fives = Math.floor(change / fivesDenomination);
    change = change - (denominationsObj.fives * fivesDenomination);
    ;
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


function changeDenominationsTwo({ itemCost, amountPaid }) {

    let denominationsObj = {
        twentiesDenomination: 2000,
        fivesDenomination: 500,
        onesDenomination: 100,
        quartersDenomination: 25,
        nicklesDenomination: 5,
        penniesDenomination: 1,
    };

    let changeObj = {
        twentiesDenomination: 0,
        fivesDenomination: 0,
        onesDenomination: 0,
        quartersDenomination: 0,
        nicklesDenomination: 0,
        penniesDenomination: 0
    };

    let change = amountPaid - itemCost;
    console.log("Test")
    for (denProp in denominationsObj) {
        console.log(denProp)
        while ((change - denominationsObj[denProp]) > 0) {
            change -= denominationsObj[denProp];
            changeObj[denProp] += 1;
        }
    }
    return changeObj;
}

let denominationsObjResultOne = changeDenominationsOne({ itemCost: (20 * 100), amountPaid: (66.56 * 100) });
let denominationsObjResultTwo = changeDenominationsTwo({ itemCost: (20 * 100), amountPaid: (66.56 * 100) });
console.log(denominationsObjResultOne);
console.log(denominationsObjResultTwo);


