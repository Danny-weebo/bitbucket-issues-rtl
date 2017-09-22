const detect = {
  hebrew: '/[\u0590-\u05FF]/'
}

function isElContainHebrew(el) {
  return el.search(detect.hebrew) >= 0  
}

const elementsTarget = [
  'table.issues-list .issue-list--title',
  '.issue-description p',
  '.comment-content p',
]

$(function() {
  
  $.each(elementsTarget, function(key, el) {
    console.log('key', key, 'el', el)
    if(isElContainHebrew($(el).text())) {
      $(el).css('direction', 'rtl');
      $(el).css('text-align', 'right');
    }
  })

})