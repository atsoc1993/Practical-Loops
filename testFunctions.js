// Practice Activity 1
function computeArea(width, height) {
    area = width * height;
    return `The area of a rectangle with a width of ${width} and a height of ${height} is ${area} square units.`;
};

let result = computeArea(100, 100);
console.log(result);


// Practice Activity 2
const planetHasWater = function (planet) {
    let lowerCasePlanet = planet.toLowerCase();
    
    if (lowerCasePlanet === "earth" || lowerCasePlanet === "mars") {
        return true;
    } else {
        return false;
    }
};

let result2 = planetHasWater("EArTH");
console.log(result2);

