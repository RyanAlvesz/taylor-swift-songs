'use strict'

const getAlbuns = async() => {

    try{
        let url = 'https://taylor-swift-api.sarbo.workers.dev/albums'
        const response = await fetch(url)
        let albuns = await response.json()

        createAlbumCard(albuns)

    } catch (err) {
        console.error(err)
    }    

}

const createAlbumCard = (albuns) => {

    const albunsContainer = document.getElementById('album-container')
    
    albuns.forEach(album => {

        const albumButton = document.createElement('button')
        albumButton.classList.add('album')    
        
        const albumLink = document.createElement('a')
        albumLink.href = './assets/html/album-songs.html'
        albumLink.addEventListener('click', () => {

            localStorage.setItem('album-title', album.title)
            localStorage.setItem('album-id', album.album_id)

        })

        const albumImg = document.createElement('img')
        albumImg.classList.add('album-img')
        albumImg.src = `./assets/img/${album.title.toLowerCase().replace(' ', '-')}-cover.jpg`
        albumImg.alt = `Capa do ${album.title}`

        const albumTitle = document.createElement('h2')
        albumTitle.classList.add('album-title')
        albumTitle.textContent = album.title

        albumButton.style.order = album.album_id

        if(album.title.includes('1989')){
            albumButton.style.order = ('6')
        }
        
        albumButton.appendChild(albumLink)
        albumLink.replaceChildren(albumImg, albumTitle)
        albunsContainer.appendChild(albumButton)

    })

}

getAlbuns()