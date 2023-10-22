'use strict'

 import ColorThief from '../node_modules/colorthief/dist/color-thief.mjs';

var colorThief = new ColorThief();

const getColor = async() => {
  
  const albumImg = document.getElementById('album-img')
  let color

  if (albumImg.complete) {

      let r = colorThief.getPalette(albumImg)[3][0];
      let g = colorThief.getPalette(albumImg)[3][1];
      let b = colorThief.getPalette(albumImg)[3][2];
      color = `${r}, ${g}, ${b}`
      changeColor(color)

    } else {

    albumImg.addEventListener('load', function() {
      let r = colorThief.getPalette(albumImg)[3][0];
      let g = colorThief.getPalette(albumImg)[3][1];
      let b = colorThief.getPalette(albumImg)[3][2];
      color = `${r}, ${g}, ${b}`
      changeColor(color)

    })

  }

  
}

const changeColor = (color) => {
  
  const songContainer = document.getElementById('lyrics-container')
  songContainer.style.backgroundColor = `rgb(${color})`
songContainer.style.boxShadow = `0px 0px 10px rgb(${color})` 

}

getColor()