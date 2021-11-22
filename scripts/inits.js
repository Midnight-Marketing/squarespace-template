function inits() {
  pluginVideoLightbox()
}

function resizeInits() {
  imageResize()
}

document.addEventListener("DOMContentLoaded", function() {
  inits()
})

window.addEventListener("resize", function() {
  resizeInits()
})

window.addEventListener("mercury:load", function() {
  inits()
})
