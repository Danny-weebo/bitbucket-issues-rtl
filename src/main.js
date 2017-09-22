const detect = {
  hebrew: '/[\u0590-\u05FF]/'
}

const elementsTarget = [
  'table.issues-list .issue-list--title',
  '.issue-description p',
  '.comment-content p',
]

function isElContainHebrew(el) {
  return el.search(detect.hebrew) >= 0  
}

$(function() {
  
  $.each(elementsTarget, function(key, el) {
    console.log('key', key, 'el', el)
    if(isElContainHebrew($(el).text())) {
      $(el).css('direction', 'rtl');
      $(el).css('text-align', 'right');
    }
  })

})