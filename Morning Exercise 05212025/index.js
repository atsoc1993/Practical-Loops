function createTicTacToeBoxes() {
    let ticTacToeBoxes = [];
    let newArray = [];

    for (let i = 1; i <= 10; i++) {
        if ((i - 1) % 3 === 0 && i !== 1) {
            ticTacToeBoxes.push(newArray);
            newArray = [];
        };
        let ticTacToeBox = document.createElement('div');
        newArray.push(ticTacToeBox);
    };

    return ticTacToeBoxes;
};

function styleTicTacToeBoxes(ticTacToeBoxes) {
    ticTacToeBoxes.forEach((boxes) => {
        let outerDiv = document.createElement('div');
        outerDiv.style.display = 'flex';
        outerDiv.style.flexDirection = 'row';
            
        boxes.forEach((box) => {
            box.style.border = '1px solid black';
            box.style.width = '200px';
            box.style.height = '200px';
            box.style.margin = '10px';
            box.style.textAlign = 'center';
            box.style.alignContent = 'center';
            box.classList.add('test')

            box.addEventListener('click', () => {
                if (!box.id) {
                    box.id = 'clicked';
                    if (drawX === true) {
                        box.textContent = 'X';
                        drawX = false;
                    } else {
                        box.textContent = 'O';
                        drawX = true;
                    };
                };
            });
            outerDiv.appendChild(box);
        });
            document.body.appendChild(outerDiv);
    });
};

function createResetButton() {
    let resetButtonDiv = document.createElement('div');
    resetButtonDiv.style.border = '1px solid black';
    resetButtonDiv.style.width = (document.body.children[1].children[0].style.width);
    resetButtonDiv.style.height = '50px';
    resetButtonDiv.style.margin = '10px';
    resetButtonDiv.style.textAlign = 'center';
    resetButtonDiv.style.alignContent = 'center';
    resetButtonDiv.textContent = 'Reset';
    resetButtonDiv.addEventListener('click', (e) => {
        resetBoard();
    });
    document.body.appendChild(resetButtonDiv);
};

function resetBoard () {
    let ticTacToeRows = document.body.children;

    for (let ticTacToeRow of ticTacToeRows) {
        let rowChildren = ticTacToeRow.children;
        for (let ticTacToeDiv of rowChildren) {
            ticTacToeDiv.textContent = '';
            ticTacToeDiv.id = '';
        };
    };
    drawX = true;
};

let drawX = true;

let ticTacToeBoxes = createTicTacToeBoxes()
styleTicTacToeBoxes(ticTacToeBoxes);
createResetButton();

