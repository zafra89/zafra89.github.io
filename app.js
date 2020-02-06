window.onload = function() {
  var src = document.getElementById("cloneSource"),
      dst = document.getElementById("textarea");
      dst1 = document.getElementById("textarea1");
      dst2 = document.getElementById("textarea2");
      dst3 = document.getElementById("textarea3");
      dst4 = document.getElementById("textarea4");
      dst5 = document.getElementById("textarea5");
      dst6 = document.getElementById("textarea6");
      dst7 = document.getElementById("textarea7");
  src.addEventListener('input', function() {
      dst.value = src.value;
      dst1.value = src.value;
      dst2.value = src.value;
      dst3.value = src.value;
      dst4.value = src.value;
      dst5.value = src.value;
      dst6.value = src.value;
      dst7.value = src.value;
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
      const text = document.getElementById("textarea");
      const text1 = document.getElementById("textarea1");
      const text2 = document.getElementById("textarea2");
      const text3 = document.getElementById("textarea3");
      const text4 = document.getElementById("textarea4");
      const text5 = document.getElementById("textarea5");
      const text6 = document.getElementById("textarea6");
      const text7 = document.getElementById("textarea7");
      const size = document.getElementById("select-size");

      if (size.value == 20) {
        text.style.fontSize = '20px';
        text1.style.fontSize = '20px';
        text2.style.fontSize = '20px';
        text3.style.fontSize = '20px';
        text4.style.fontSize = '20px';
        text5.style.fontSize = '20px';
        text6.style.fontSize = '20px';
        text7.style.fontSize = '20px';
      } else if (size.value == 25) {
        text.style.fontSize = '25px';
        text1.style.fontSize = '25px';
        text2.style.fontSize = '25px';
        text3.style.fontSize = '25px';
        text4.style.fontSize = '25px';
        text5.style.fontSize = '25px';
        text6.style.fontSize = '25px';
        text7.style.fontSize = '25px';
      } else if (size.value == 30) {
        text.style.fontSize = '30px';
        text1.style.fontSize = '30px';
        text2.style.fontSize = '30px';
        text3.style.fontSize = '30px';
        text4.style.fontSize = '30px';
        text5.style.fontSize = '30px';
        text6.style.fontSize = '30px';
        text7.style.fontSize = '30px';
      } else if (size.value == 35) {
        text.style.fontSize = '35px';
        text1.style.fontSize = '35px';
        text2.style.fontSize = '35px';
        text3.style.fontSize = '35px';
        text4.style.fontSize = '35px';
        text5.style.fontSize = '35px';
        text6.style.fontSize = '35px';
        text7.style.fontSize = '35px';
      } else if (size.value == 40) {
        text.style.fontSize = '40px';
        text1.style.fontSize = '40px';
        text2.style.fontSize = '40px';
        text3.style.fontSize = '40px';
        text4.style.fontSize = '40px';
        text5.style.fontSize = '40px';
        text6.style.fontSize = '40px';
        text7.style.fontSize = '40px';
      }
  }

window.onclick = function() {
  document.getElementById('reset-button').addEventListener('click', clear);
}

function resetInputs() {
  document.getElementById("search-bar").value='';
  document.getElementById("cloneSource").value='';
  document.getElementById("select-size").value='20';
  
  searchFunction();
  sizeChange();
}
  