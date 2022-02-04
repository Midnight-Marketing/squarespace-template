function inits() {
  pluginVideoLightbox()
  imgLoadInit()
}

function resizeInits() {
  imgResizeInit()
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
