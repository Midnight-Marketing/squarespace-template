function compInit() {
  if (!$('[data-page-type="compilation"]')) return
  compCount()
}

function compCount() {
  var iC = $('[data-item-count]')

  iC.each(function() {
    // Just for verifying if a leading 0 is needed
    var c = $(this).attr('data-item-count')

    // Don't run if greater than 10
    if (c >= 10) return

    // Get current text to modify
    var t = $(this).text()

    t = '0' + t
    $(this).text(t)
  })
}