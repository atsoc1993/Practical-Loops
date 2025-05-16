const form = document.getElementById('registration')
const inputs = form.children
const userNameInput = inputs[0]
const emailInput = inputs[3]
const passwordInput = inputs[6]
const registerDiv = inputs[13]
const registerSubmit = registerDiv.children[2]


registerSubmit.addEventListener('submit', (event) => {
    console.log("Submitted")
    localStorage.setItem("username", userNameInput.textContent);
    localStorage.setItem("email", emailInput.textContent);
    localStorage.setItem("password", passwordInput.textContent);
    console.log(localStorage.getItem("username"))
    console.log(localStorage.getItem("email"))
    console.log(localStorage.getItem("password"))
})


