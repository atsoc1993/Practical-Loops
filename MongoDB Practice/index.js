

let setButton = document.getElementById('setData')
let getButton = document.getElementById('getData')
let inputField = document.querySelector('input')


setButton.addEventListener('click', async (e) => {
    let result = await fetch(`http://localhost:3000/setData/${inputField.value}`)
    let response = await result.json()
    let data = response.message
})

getButton.addEventListener('click', async (e) => {
    let result = await fetch(`http://localhost:3000/getData`)
    let response = await result.json()
    let data = response.data
    let mainDiv = document.getElementById('mainDiv')
    let newMainDiv = document.createElement('div')
    newMainDiv.id = 'mainDiv'
    for (item of data) {
        if ('message' in item) {
            let pElement = document.createElement('p');
            pElement.textContent = `Index: ${item.index}; Message: ${item.message}`
            newMainDiv.appendChild(pElement);
        }
    }

    if (mainDiv) {
        document.body.replaceChild(newMainDiv, mainDiv)
    } else {
        document.body.appendChild(newMainDiv);
    }
});