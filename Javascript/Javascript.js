

// SCROLLING 
function scrollSmoothTo(elementId) {
    var element = document.getElementById(elementId);
    element.scrollIntoView({
    block: 'start',
    behavior: 'smooth'
    });
}


// RATING for articles
var form = document.getElementById('rating_form');
form.onsubmit = function(event)  {
  event.preventDefault();
  var bad = document.getElementById('bad');
  var average = document.getElementById('average');
  var good = document.getElementById('good');
  var result = document.getElementById('form_response');
    if(bad.checked) { 
      result.innerHTML =  'We are sad, that you did not find this article interesting';
      result.style.padding = "2em"; 
      result.style.fontSize = "1.1rem"; 
      result.style.display = "block"; 
      average.disabled = true; 
      good.disabled = true; 
    } else if(average.checked) { 
      result.innerHTML =  'Thank you for your reaction';
      result.style.padding = "2em"; 
      result.style.fontSize = "1.1rem"; 
      result.style.display = "block"; 
      bad.disabled = true; 
      good.disabled = true; 
    } else if(good.checked) { 
      result.innerHTML =  'We are happy, that you enjoyed this article';
      result.style.padding = "2em"; 
      result.style.fontSize = "1.1rem"; 
      result.style.display = "block"; 
      bad.disabled = true; 
      average.disabled = true; 
    } else { 
    alert ("You must select a button"); 
    return false; 
    } 
}; 
