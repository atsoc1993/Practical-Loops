function createAndAddTxnList(txHashes) {
    let latestBlockTransactionsDiv = document.getElementById('blockTxsDiv')
    let newTxHashList = document.createElement('ul');
    newTxHashList.id = 'txHashList'
    for (let txHash of txHashes) {
        let newTxHashListItem = document.createElement('li');
        newTxHashListItem.textContent = txHash;
        newTxHashList.appendChild(newTxHashListItem);
    };
    if (document.getElementById('txHashList')) {
        latestBlockTransactionsDiv.replaceChildren(newTxHashList);
    } else {
        latestBlockTransactionsDiv.appendChild(newTxHashList);

    }
}

export { createAndAddTxnList };

