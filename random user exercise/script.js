
async function getRandomUserData() {
    // let randomUserDataResponse = await fetch('https://randomuser.me/api/');
    let randomUserDataResponse = await fetch('https://randomuser.me/api/?inc=picture,name,email,info'); // Only include picture, email, and name
    let responseData = await randomUserDataResponse.json();
    let userData = responseData.results[0];
    let seed = responseData.info.seed;
    let userImageUrl = userData.picture.thumbnail;
    let usersName = `${userData.name.first} ${userData.name.last}`;
    let userEmail = userData.email;
    return [userImageUrl, usersName, userEmail, seed];
};

function setUserDataInHTML(userImageUrl, usersName, userEmail) {
    let usersImageElement = document.getElementById('user-image');
    let usersNamePTagElement = document.getElementById('user-name');
    let userEmailPTagElement = document.getElementById('user-email');
    usersImageElement.src = userImageUrl;
    usersNamePTagElement.textContent =`Name: ${usersName}`;
    userEmailPTagElement.textContent =`Email: ${userEmail}`;
};

async function getLargeImage(seed) {
    let randomUserDataResponse = await fetch(`https://randomuser.me/api/?inc=picture&seed=${seed}`); 
    let responseData = await randomUserDataResponse.json();
    console.log(responseData);
    let userData = responseData.results[0];
    let userLargeImageUrl = userData.picture.large;
    return userLargeImageUrl;
};

function setLargeImageInHTML(largeImageUrl) {


    let userLargeImageElement = document.getElementById('large-image');

    if (!userLargeImageElement) {
        let firstbreakElement = document.createElement('br');
        document.body.appendChild(firstbreakElement);

        let pLargeImageLabelPTag = document.createElement('p');
        pLargeImageLabelPTag.textContent = 'Large Image[Same size as thumbnail so manually enlarged]:';
        document.body.appendChild(pLargeImageLabelPTag);

        let secondbreakElement = document.createElement('br');
        document.body.appendChild(secondbreakElement);

        userLargeImageElement = document.createElement('img');
    };

    userLargeImageElement.id = 'large-image'
    userLargeImageElement.src = largeImageUrl;
    userLargeImageElement.style.border = '2px solid black';
    userLargeImageElement.style.boxShadow = '2px 3px 4px black';
    userLargeImageElement.style.transform = 'scale(3)';
    userLargeImageElement.style.margin = '120px';
    document.body.appendChild(userLargeImageElement);

};

let getNewUserButton = document.getElementById('new-user-btn');

getNewUserButton.addEventListener('click', async () => {
    getRandomUserData()
        .then((res) => {
            const [userImageUrl, usersName, userEmail, seed] = res;
            setUserDataInHTML(userImageUrl, usersName, userEmail);
            
            getLargeImage(seed)
                .then((res) => {
                    const largeImageUrl = res;
                    setLargeImageInHTML(largeImageUrl, seed);
                })
                .catch((err) => {
                    console.log(`Something went wrong when fetching large image: ${err}`);
                })
                .finally(() => {
                    console.log('Finished fetching and setting Large Image!');
                });
        })
        .catch((err) => {
            console.log(`Something went wrong when fetching user data: ${err}`);
        })
        .finally(() => {
            console.log("Finished fetching and setting user data!");
        });
});
