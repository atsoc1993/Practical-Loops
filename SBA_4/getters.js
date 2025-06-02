async function getLatestBlockHash() {
    console.log("Got latest block hash")
    let response = await axios.get('https://blockchain.info/q/latesthash')
    let lastBlockHash = response.data
    return lastBlockHash;
}

async function getLatestBlockHashTransactions(lastBlockHash) {
    let response = await axios.get(`https://blockchain.info/rawblock/${lastBlockHash}?cors=true`)
    let transactions = response.data.tx;
    let txHashes = transactions.map((tx) => {
        return tx.hash
    })
    return txHashes
}

export { getLatestBlockHash, getLatestBlockHashTransactions };