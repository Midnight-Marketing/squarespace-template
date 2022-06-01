function compInit() {
  if (!$('[data-page-type="compilation"]')) return
  compCount()
}

function compCount() {
  var iC = $('[data-item-count]')

  iC.each(function() {
    var c = $(this).attr('data-item-count')
    if (c >= 10) return

    c = '0' + c
    $(this).text(c)
  })
}