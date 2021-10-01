/**
 * References:
 * https://developer.mozilla.org/en-US/docs/Web/API/Response/blob
 * https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL
 * */
async function downloadImage(url) {
  // fetch to get readable stream
  const img = await fetch(url)
  // change stream to blob
  const imgBlob = await img.blob()
  // create image url to download imageBlob
  const imageURL = URL.createObjectURL(imgBlob)
  // auto download the image
  // don't forget to destory link element
  const link = document.createElement('a')
  link.href = imageURL
  link.download = 'fileName :3'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

const url = "https://cdn.pixabay.com/photo/2017/03/28/22/55/night-photograph-2183637_640.jpg"
const img = document.querySelector('#image')
const downloadBtn = document.querySelector('#download-btn')

img.src = url; // set image

downloadBtn.addEventListener('click', ()=> {
  // make cb to avoid auto call tothe downloadImage
  downloadImage(url) // you can  provide src attriute => img.src
})
