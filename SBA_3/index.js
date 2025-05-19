let pageHeight = window.innerHeight
let pageWidth = window.innerWidth

let winsHeader = document.createElementNS
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

    if (totalClicks === 3) {
        newHeader.textContent = 'NEW TASK: YOU HAVE 5 SECONDS TO CLICK THE 3 GRAY BOXES'


        let leftStart = -300

        blueBoxes.forEach((box) => {

            mainDiv.prepend(newHeader)
            
            grayBox1 = document.createElement('div')
            grayBox2 = document.createElement('div')
            grayBox3 = document.createElement('div')

            grayBox1.style.top = Number(box.style.top.split('px')[0]) + 200 + 'px'
            grayBox1.style.left = Number(box.style.left.split('px')[0]) + leftStart + 'px'
            grayBox2.style.top = Number(box.style.top.split('px')[0]) + 200 + 'px'
            grayBox2.style.left = Number(box.style.left.split('px')[0]) + (leftStart + 250) + 'px'
            grayBox3.style.top = Number(box.style.top.split('px')[0]) + 200 + 'px'
            grayBox3.style.left = Number(box.style.left.split('px')[0]) + (leftStart + 500) + 'px'
            
            grayDivs = [grayBox1, grayBox2, grayBox3]

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
                    grayDiv.appendChild(newPElement)
                    if (!grayDiv.classList.contains('clicked')) {
                        grayDiv.classList.add('clicked')
                        totalClicks += 1
                    }
                })
                mainDiv.parentElement.appendChild(grayDiv);
            })

        })

        await new Promise(resolve => setTimeout(resolve, 10000))




    }

    if (headerChallengeTextCreated) {
        mainDiv.removeChild(newHeader)
        blueBoxes.forEach((box) => {
            console.log(box)
            document.body.removeChild(box)
        })
        headerChallengeTextCreated = false;

    }
    // mainDiv.removeChild(blueBox1)
    // mainDiv.removeChild(blueBox2)
    // mainDiv.removeChild(blueBox3)
}
moveDivAround()

innerDiv.addEventListener('click', async (e) => {
    clearInterval(interval)
    await clickFast()
    moveDivAround()
})