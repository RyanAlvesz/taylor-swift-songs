'use strict'

const songID = localStorage.getItem('song-id')
const songTitle = localStorage.getItem('song-title')
const albumTitle = localStorage.getItem('album-title')

const createSong = () => {
    
    const albumImg = document.getElementById('album-img')
    albumImg.src = `../img/${albumTitle.toLowerCase().replace(' ', '-')}-cover.jpg`
    albumImg.alt = `Capa do ${albumTitle}`
    const songName = document.getElementById('song-title').textContent = songTitle.replace('(Taylor’s version)', ' ')
    document.getElementsByTagName("title")[0].innerText = songTitle.replace('(Taylor’s version)', ' ')

}

const getLyrics = async() => {

    try{

        let url = `https://taylor-swift-api.sarbo.workers.dev/lyrics/${songID}`
        const response = await fetch(url)
        let lyric = await response.json()

        createLyrics(lyric)

    } catch (err) {
        console.error(err)
    }       

}

const createLyrics = (lyricData) => {

    const lyricsContainer = document.getElementById('lyrics')

    let resp = lyricData.lyrics.split(/\r?\n/)

    resp.forEach(lyrics => {
        const lyric = document.createElement('p')
        lyric.textContent = lyrics
        lyricsContainer.appendChild(lyric)
    })
    
}

createSong()
getLyrics()