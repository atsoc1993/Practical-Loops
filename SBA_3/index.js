let pageHeight = window.innerHeight
let pageWidth = window.innerWidth

let winsHeader = document.createElement('h1')
winsHeader.style.textAlign = 'center'
winsHeader.style.border = '2px solid black'
winsHeader.style.boxShadow = '2px 5px 7px black'
winsHeader.style.width = pageWidth / 3 + 'px'
winsHeader.style.left = ((pageWidth / 3) + winsHeader.offsetWidth) + 'px'
winsHeader.innerText = 'Wins:0'
winsHeader.style.fontSize = '5em'
winsHeader.style.position = 'absolute'

document.body.appendChild(winsHeader)
let div = document.createElement('div')
div.style.height = '500px'
div.style.width = '500px'
div.style.left = pageWidth / 2 + 'px'
div.style.top = pageHeight / 2 + 'px'
div.style.position = 'absolute'
div.style.justifyContent = 'center'
div.style.alignItems = 'center'
div.style.display = 'flex'
div.style.flexDirection = 'column'
div.id = 'main-div'

let innerDiv = document.createElement('div')
let header = document.createElement('h1')
header.style.fontSize = '3em'
header.textContent = "Click on This Box!"
header.style.textAlign = 'center'

innerDiv.appendChild(header)
div.appendChild(innerDiv)
document.body.appendChild(div)

innerDiv.style.width = Number(innerDiv.parentElement.style.width.split('px')[0]) / 2 + 'px'
innerDiv.style.height = Number(innerDiv.parentElement.style.height.split('px')[0]) / 2 + 'px'

innerDiv.style.display = 'flex'
innerDiv.style.alignItems = 'center'
innerDiv.style.backgroundColor = 'red'
innerDiv.style.boxShadow = '2px 5px 7px black'

let moveRight = true;
let moveUp = true;

const divWidthOffset = div.offsetWidth
const divHeightOffset = div.offsetHeight

let delay = 350;
let interval; 

function moveDivAround() {

    interval = setInterval(() => {
        pageWidth = window.innerWidth
        pageHeight = window.innerHeight
        
        let div = document.getElementById('main-div')
        
        divStyleLeftInt = Number(div.style.left.split('px')[0])
        divStyleTopInt = Number(div.style.top.split('px')[0])

        moveAmount = Math.trunc((Math.random() * 500))

        if (moveRight) {
            if (divStyleLeftInt + moveAmount < pageWidth - divWidthOffset) {
                if (divStyleLeftInt + moveAmount < pageWidth) {
                    div.style.left = String(divStyleLeftInt + moveAmount) + 'px'
                } 
            } else {
                moveRight = !moveRight
            }
        } else {
            if (divStyleLeftInt - moveAmount > 0 + divWidthOffset) {
                if (divStyleLeftInt - moveAmount < pageWidth) {
                    div.style.left = String(divStyleLeftInt - moveAmount) + 'px'
                } 
            } else {
                moveRight = !moveRight
            }
        }

        if (moveUp) {
            if (divStyleTopInt + moveAmount < pageHeight / 2 - divHeightOffset) {
                if (divStyleTopInt + moveAmount < pageHeight) {
                    div.style.top = String(divStyleTopInt + moveAmount) + 'px'
                }
            } else {
                moveUp = !moveUp
            }
        } else {
            if (divStyleTopInt - moveAmount > 0 + divHeightOffset) {
                if (divStyleTopInt - moveAmount > 0) {
                    div.style.top = String(divStyleTopInt - moveAmount) + 'px'
                }
            } else {
                moveUp = !moveUp
            }
        }

    }, delay);
}

let headerChallengeTextCreated = false;

async function clickFast() {
    let mainDiv = document.body.querySelectorAll('div')[0]
    let innerDiv = document.body.querySelector('div').children[0]
    console.log(innerDiv)
    let newHeader = document.createElement('h1')

    if (!headerChallengeTextCreated) {
        newHeader.style.fontSize = '5em'
        newHeader.textContent = 'YOU HAVE 5 SECONDS TO CLICK THE 3 BLUE BOXES'
        mainDiv.prepend(newHeader)
        headerChallengeTextCreated = true;
    }

    let blueBox1 = document.createElement('div')
    let blueBox2 = document.createElement('div')
    let blueBox3 = document.createElement('div')


    blueBox1.style.top = Number(mainDiv.style.top.split('px')[0]) + 750 + 'px'
    blueBox1.style.left = Number(mainDiv.style.left.split('px')[0]) -100 + 'px'
    blueBox2.style.top = Number(mainDiv.style.top.split('px')[0]) + 750 + 'px'
    blueBox2.style.left = Number(mainDiv.style.left.split('px')[0]) + 150 + 'px'
    blueBox3.style.top = Number(mainDiv.style.top.split('px')[0]) + 750 + 'px'
    blueBox3.style.left = Number(mainDiv.style.left.split('px')[0]) + 400 + 'px'

    let blueBoxes = [blueBox1, blueBox2, blueBox3]

    let totalClicks = 0;
    blueBoxes.forEach((box) => {
        box.style.backgroundColor = 'blue'
        box.style.position = 'absolute'
        box.style.height = Number(mainDiv.style.height.split('px')[0]) / 3 + 'px'
        box.style.width = Number(mainDiv.style.width.split('px')[0]) / 3 + 'px'
        box.addEventListener('click', (e) => {
            e.stopPropagation();
            newPElement = document.createElement('p')
            newPElement.textContent = 'CLICKED!'
            newPElement.style.fontSize = '3em'
            box.style.backgroundColor = 'green'
            if (!box.classList.contains('clicked')) {
                box.appendChild(newPElement)
                box.classList.add('clicked')
                totalClicks += 1
            }
        })
        mainDiv.parentElement.appendChild(box);
    })

    await new Promise(resolve => setTimeout(resolve, 10000))
    let leftStart = -300

    let allgrayDivs = []
    if (totalClicks === 3) {
        newHeader.textContent = 'NEW TASK: YOU HAVE 5 SECONDS TO CLICK THE 3 GRAY BOXES'


        mainDiv.prepend(newHeader)

        blueBoxes.forEach((box) => {

            
            grayBox1 = document.createElement('div')
            grayBox2 = document.createElement('div')
            grayBox3 = document.createElement('div')

            grayBox1.style.top = Number(box.style.top.split('px')[0]) + 200 + 'px'
            grayBox1.style.left = Number(box.style.left.split('px')[0]) + leftStart + 'px'
            grayBox2.style.top = Number(box.style.top.split('px')[0]) + 200 + 'px'
            grayBox2.style.left = Number(box.style.left.split('px')[0]) + leftStart + 250 + 'px'
            
            leftStart += 250
            let grayDivs = [grayBox1, grayBox2]

            allgrayDivs.push(...grayDivs)

            
            grayDivs.forEach((grayDiv) => {
                grayDiv.style.backgroundColor = 'grey'
                grayDiv.style.position = 'absolute'
                grayDiv.style.height = Number(mainDiv.style.height.split('px')[0]) / 3 + 'px'
                grayDiv.style.width = Number(mainDiv.style.width.split('px')[0]) / 3 + 'px'
                grayDiv.addEventListener('click', (e) => {
                    e.stopPropagation();
                    newPElement = document.createElement('p')
                    newPElement.textContent = 'CLICKED!'
                    newPElement.style.fontSize = '3em'
                    grayDiv.style.backgroundColor = 'green'
                    if (!grayDiv.classList.contains('clicked')) {
                        grayDiv.classList.add('clicked')
                        grayDiv.appendChild(newPElement)
                        totalClicks += 1
                        if (totalClicks === 9) {
                            winsHeader.innerText = 'Wins:' + (Number(winsHeader.innerText.split(':')[1]) + 1)
                        }
                    }
                })
                mainDiv.parentElement.appendChild(grayDiv);
            })

        })

        await new Promise(resolve => setTimeout(resolve, 5000))



    }

    if (headerChallengeTextCreated) {
        mainDiv.removeChild(newHeader)
        blueBoxes.forEach((box) => {
            console.log(box)
            document.body.removeChild(box)
        })
        allgrayDivs.forEach((grayDiv) => {
            mainDiv.parentElement.removeChild(grayDiv);
        })
        headerChallengeTextCreated = false;

    }
    // mainDiv.removeChild(blueBox1)
    // mainDiv.removeChild(blueBox2)
    // mainDiv.removeChild(blueBox3)
}
moveDivAround()

function displayForm() {
    let form = document.createElement('form')
    form.style.display = 'flex'
    form.style.justifyContent = 'center'
    form.style.flexDirection = 'column'
    form.style.alignItems = 'center'
    form.style.border = '2px solid black'
    form.style.boxShadow = '2px 5px 7px black'
    form.style.height = pageHeight / 2.2 + 'px'
    form.style.position = 'absolute'
    form.style.top = pageHeight / 2 + 'px'
    form.style.width = pageWidth - 500 + 'px';
    form.style.right = 250 + 'px'
    let feedBackLabel = document.createElement('label')
    feedBackLabel.textContent = 'What did you think of the game?'
    feedBackLabel.style.fontSize = '5em'
    let feedbackInput = document.createElement('input')
    feedbackInput.style.margin = '250px'
    feedbackInput.style.width = '2000px'
    feedbackInput.style.height = '750px'
    feedbackInput.placeholder = 'Best Game ever! 10/10'
    feedbackInput.style.fontSize = '5em'
    feedbackInput.minLength = 10_000_000_000
    feedbackInput.style.textAlign = 'center'
    let submitButton = document.createElement('input')
    submitButton.type = 'submit'
    submitButton.style.height = '200px';
    submitButton.style.width = '300px';
    submitButton.style.fontSize = '3em'

    let recommendToAFriendLabel = document.createElement('label')
    recommendToAFriendLabel.textContent = 'Would you recommend this game to a friend?'
    recommendToAFriendLabel.style.fontSize = '3em'

    form.appendChild(feedBackLabel);
    form.appendChild(feedbackInput);
    form.appendChild(recommendToAFriendLabel);
    
    let yesTextLabel = document.createElement('label')
    yesTextLabel.textContent = 'YES'
    yesTextLabel.style.fontSize = '3em'
    let radioButton = document.createElement('input')
    radioButton.type = 'radio'
    radioButton.style.transform = 'scale(2)'
    radioButton.style.marginBottom = '20px'
    
    form.appendChild(yesTextLabel)
    form.appendChild(radioButton)
    
    
    form.appendChild(submitButton)

    document.body.appendChild(form)
}
displayForm()

innerDiv.addEventListener('click', async (e) => {
    clearInterval(interval)
    await clickFast()
    moveDivAround()
})