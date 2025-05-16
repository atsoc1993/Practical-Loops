// Leave the <body> tag empty in your HTML file. 
// Generate all the boxes using DOM Manipulation

//      HINT: Use for loops
//      HINT: Use the classes mentioned in the CSS file
//      HINT: Use the commented out div structure in the HTML for reference


for (let i = 0; i < 4; i++) {
    let newDiv = document.createElement('div');
    newDiv.classList.add('p-div');
    for (let j = 0; j < 4; j++) {
        let innerDiv = document.createElement('div');
        innerDiv.classList.add('s-div');
        for (let k = 0; k < 4; k++) {
            let innerInnerDivs = document.createElement('div');
            innerDiv.appendChild(innerInnerDivs);
        };
    newDiv.appendChild(innerDiv);
    document.body.appendChild(newDiv);
    };
};