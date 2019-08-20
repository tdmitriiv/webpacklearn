import wallpaper from './wallpaper.jpg'

function addImage () {
  const img = document.createElement('img')
  img.src = wallpaper
  img.alt = 'witcher'
  img.width = 300

  const body = document.querySelector('body')
  body.appendChild(img)
}

export default addImage