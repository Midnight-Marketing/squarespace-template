// ===============================
// NUMBER & DATE FORMATTERS
// ===============================
// Format currency (to client local format)
function formatCurrency(number) {
  var CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
    currency: "USD",
    style: "currency"
  })
  return CURRENCY_FORMATTER.format(number)
}

// Format numbers (to client local format)
function formatNumber(number) {
  var NUMBER_FORMATTER = new Intl.NumberFormat(undefined)
  return NUMBER_FORMATTER.format(number)
}

// Format numbers in compact [eg. 1K, 2M etc.] (to client local format)
function formatCompactNumber(number) {
  var COMPACT_NUMBER_FORMATTER = new Intl.NumberFormat(undefined, {
    notation: "compact"
  })
  return COMPACT_NUMBER_FORMATTER.format(number)
}

// Format dates relative [eg. 1 week ago, 4 months from now] (to client local format)
function formatRelativeDate(toDate, fromDate) {
  var DIVISIONS = [
    { amount: 60, name: "seconds" },
    { amount: 60, name: "minutes" },
    { amount: 24, name: "hours" },
    { amount: 7, name: "days" },
    { amount: 4.34524, name: "weeks" },
    { amount: 12, name: "months" },
    { amount: Number.POSITIVE_INFINITY, name: "years" }
  ]
  var RELATIVE_DATE_FORMATTER = new Intl.RelativeTimeFormat(undefined, {
    numeric: "auto"
  })

  if ((fromDate === 'undefined') || (fromDate === null)) {
    fromDate = new Date()
  }

  var duration = (toDate - fromDate) / 1000

  for (var i = 0; i <= DIVISIONS.length; i++) {
    var division = DIVISIONS[i]
    if (Math.abs(duration) < division.amount) {
      return RELATIVE_DATE_FORMATTER.format(Math.round(duration), division.name)
    }
    duration /= division.amount
  }
}

function hashCheck(hash) {
  var h = window.location.hash;
  if (h.includes(hash)) {
    return true;
  } else {
    return false;
  }
}

function subUrlCheck(url) {
  url = "/" + url + "/";
  var p = window.location.pathname;

  p = p.replace(url, "");

  if (p !== "") {
    return true;
  } else {
    return false;
  }
}

function historyReplace(path, subpath) {
  var state = "";
  var title = "";
  var fullPath = path + subpath;

  history.replaceState(state, title, fullPath);
}

function tooltips() {
  // For desktop/mobile - click to stay open (closes any other that may be showing)
  $('.tooltip').click(function() {
    if ($(this).hasClass('show-tooltip')) {
      $(this).removeClass('show-tooltip')
      return
    }

    $('.tooltip').removeClass('show-tooltip')
    $(this).addClass('show-tooltip')
  })

  // For desktop - open on hover
  $('body:not(.is-mobile) .tooltip').hover(function() {
    $(this).addClass('hovered')
  }, function() {
    $(this).removeClass('hovered')
  })
}

