'use strict'

const albumTitle = localStorage.getItem('album-title')
const albumID = localStorage.getItem('album-id')

const createAlbum = () => {
    
    const albumImg = document.getElementById('album-img')
    albumImg.src = `../img/${albumTitle.toLowerCase().replace(' ', '-')}-cover.jpg`
    albumImg.alt = `Capa do ${albumTitle}`
    const albumName = document.getElementById('album-title').textContent = albumTitle 
    document.getElementsByTagName("title")[0].innerText = albumTitle

}

const getSongs = async() => {

    try{

        let url = `https://taylor-swift-api.sarbo.workers.dev/songs`
        const response = await fetch(url)
        let songs = await response.json()

        createSongsCard(songs)

    } catch (err) {
        console.error(err)
    }       

}

const createSongsCard = (songs) => {
    

    songs.forEach(song => {

        if(song.album_id == albumID){

            const listSongs = document.getElementById('list-songs')
        
            const songLink = document.createElement('a')
            songLink.href = './song-lyrics.html'
            songLink.classList.add('song')
            songLink.addEventListener('click', () => {

                localStorage.setItem('song-id', song.song_id)
                localStorage.setItem('song-title', song.title)

            })

            const songInfo = document.createElement('div')
            songInfo.classList.add('song-info')

            const songTitle = document.createElement('span')
            songTitle.classList.add('song-title')
            songTitle.textContent = song.title.replace('(Taylor’s version)', ' ')

            const singer = document.createElement('span')
            singer.textContent = 'Taylor Swift'

            listSongs.appendChild(songLink)
            songLink.appendChild(songInfo)
            songInfo.replaceChildren(songTitle, singer)

        }

    })

}

createAlbum()
getSongs()

