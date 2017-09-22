const detect = {
  hebrew: '/[\u0590-\u05FF]/'
}

const elementsTarget = [
  'table.issues-list .issue-list--title',
  '.issue-description p',
  '.comment-content p',
]

const cssRtlRules = {
  'direction': 'rtl',
  'text-align': 'right'
}

function isElContainHebrew(el) {
  return el.search(detect.hebrew) >= 0  
}

$(function() {
  
  $.each(elementsTarget, function(key, el) {
    if(isElContainHebrew($(el).text())) {
      $(el).css(cssRtlRules);
    }
  })

})