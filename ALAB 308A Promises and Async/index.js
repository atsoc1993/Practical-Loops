// Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./databases.js";

async function getUserData(id) {
    const dbs = {
        db1: db1,
        db2: db2,
        db3: db3,
    };

    let usersDatabase = await central(id);
    let userData = await dbs[usersDatabase](id);

    let userVaultInfo = await vault(id)
    for (let vaultInfo of Object.entries(userVaultInfo)) {
        console.log(vaultInfo);
        userData[vaultInfo[0]] = vaultInfo[1];
    };

    return userData;
};

let allUserData = [];

for (let i = 1; i < 10; i++) {
    allUserData.push(await getUserData(i));
};

console.log(allUserData)