let radio = {
     changeStation: function changeStation() {
        let randomStationIndex = Math.trunc(Math.random() * 100) % radio.stations.length
        let randomStation = radio.stations[randomStationIndex]
        let randomSongIndex = Math.trunc(Math.random() * 100) % randomStation.songs.length % 3
        let randomSong = radio.stations[randomStationIndex].songs[randomSongIndex]
        
        let stationName = randomStation.name
        let songTitle = randomSong.title
        let songArtist = randomSong.artist
        console.log(`Now Playing ${songTitle} by ${songArtist}, only on ${stationName}`)
     },
     stations: [
        { 
            name: '106.7 Lite FM', 
            songs: [
                { title: 'Only Girl (In The World)', artist: 'Rihanna' },
                { title: 'I Just Called To Say I Love You', artist: 'Stevie Wonder' },
                { title: 'Waterfalls', artist: 'TLC' }
            ] 
        },
        { 
            name: '100.0 Z100', 
            songs: [
                { title: 'Pink Pony Club', artist: 'Chappell Roan' },
                { title: 'Ordinary', artist: 'Alex Warren' },
                { title: 'Promiscuous', artist: 'Nelly Furtado feat. Timbaland' }
            ] 
        },
        { 
            name: '1035 KTU', 
            songs: [
                { title: 'Starships', artist: 'Nicki Minaj' },
                { title: 'Always Be My Baby', artist: 'Stevie Wonder' },
                { title: 'Clarity', artist: 'Zedd feat. Foxes' }
            ] 
        } 
    ] 
}


radio.changeStation()