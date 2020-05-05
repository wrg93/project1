//creating Input in which user enters number of dependents
var dependentsInput = document.createElement("INPUT");
document.body.appendChild(dependentsInput);
dependentsInput.setAttribute("type", "text");
dependentsInput.setAttribute("class", "only-numeric");


//creating errorSpan
var errorSpan = document.createElement("span");
errorSpan.setAttribute("class", "error");
errorSpan.textContent="Error. Please input digits only";

//function which will not allow you to enter values other than numbers
$(document).ready(function() {
    $(".only-numeric").bind("keypress", function (e) {
        var keyCode = e.which ? e.which : e.keyCode
             
        if (!(keyCode >= 48 && keyCode <= 57)) {
          $(".error").css("display", "inline");
          return false;
        }else{
          $(".error").css("display", "none");
        }
    });
  });