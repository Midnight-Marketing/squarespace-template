function imgLoadInit() {
  // Put image loaders here to call the single init in the inits file
}

function imgResizeInit() {
  // Put image loaders here to call the single resize function for all in the inits file.
}


function loadCustomImages(prop = '') {
  var images = document.querySelectorAll('img[data-src]' + prop)
  for (var i = 0; i < images.length; i++) {
    ImageLoader.load(images[i], {
      load: true
    })
  }
}

function reloadCustomImages(prop = '') {
  var images = document.querySelectorAll('img[data-src]' + prop)
  for (var i = 0; i < images.length; i++) {
    ImageLoader.load(images[i], {
      load: true
    })
  }
}
