window.onload = function() {
  var src = document.getElementById("cloneSource"),
      dst = document.querySelectorAll("textarea");
  src.addEventListener('input', function() {
    dst.forEach(typing => typing.value = src.value)
  });
};

function searchFunction() {
    var input, filter, divs, i, txtValue;
    input = document.getElementById('search-bar');
    filter = input.value.toUpperCase();
    divs = document.getElementsByClassName('font-cards');
  
    for (i = 0; i < divs.length; i++) {
      const fontname = divs[i].getElementsByClassName('fontname')[0];
      txtValue = fontname.textContent || fontname.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        divs[i].style.display = "";
      } else {
        divs[i].style.display = "none";
      }
    }
  }


  function sizeChange() {
      const text = document.querySelectorAll("textarea");
      const size = document.getElementById("select-size");
      size.addEventListener('click', function() {
        text.forEach(pixels => pixels.style.fontSize = size.value)
      });
    };

const textareaDefaultValue = 'Then Came the night of the first falling star.';
document.getElementById("reset-button").addEventListener("click", function(){
  document.querySelectorAll("textarea").forEach(reset => reset.value = textareaDefaultValue);
  document.getElementById("search-bar").value='';
  document.getElementById("cloneSource").value='';
  document.getElementById("select-size").value='20px';

  searchFunction();
  sizeChange();
}); 
  
