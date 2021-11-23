function inits() {
  pluginVideoLightbox()
  imgLoadInit()
}

function resizeInits() {
  imageResizeInit()
}

document.addEventListener("DOMContentLoaded", function() {
  inits()
})

window.addEventListener("resize", function() {
  resizeInits()
})

window.addEventListener("mercury:load", function() {
  // Loading event for SS AJAX
  inits()
})
