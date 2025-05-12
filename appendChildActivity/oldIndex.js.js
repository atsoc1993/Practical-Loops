// for (let i = 0; i < 2; i++) {
//     let div = document.createElement('div');
//     for (let j = 0; j < 1; j++) {
//         let ol = document.createElement('ol');
//         div.appendChild(ol);
//         for(let k = 0; k < 3; k++) {
//             let li = document.createElement('li');
//             ol.appendChild(li);
//         };
//     };
//     console.log(div)
//     document.body.appendChild(div)
// };




function createFormattedDiv(useAnOrderedList) {

    let songs = [
        'Starships',
        'Always Be My Baby', 
        'Clarity',
        'Promiscuous',
        'Ordinary',
        'Pink Pony Club',
        'Waterfalls',
        'I Just Called To Say I Love You',
        'Only Girl (In The World)'
    ]

    let div = document.createElement('div');

    let listType = useAnOrderedList ? document.createElement('ol') : document.createElement('ul');

    songs.forEach((song) => {
        let listItem = document.createElement('li');
        listItem.innerText = song;
        listType.append(listItem);
    })

    // for (let i = 0; i < songs.length; i++) {
    //     let listItem = document.createElement('li');
    //     listItem.innerText = songs[i];
    //     listType.append(listItem);
    // }

    // let listItem1 = document.createElement('li');
    // let listItem2 = document.createElement('li');
    // let listItem3 = document.createElement('li');

    // listType.appendChild(listItem1);
    // listType.appendChild(listItem2);
    // listType.appendChild(listItem3);

    div.appendChild(listType);

    document.body.appendChild(div);
}

let useAnOrderedList = true;
createFormattedDiv(useAnOrderedList);
useAnOrderedList = false;
createFormattedDiv(useAnOrderedList);



