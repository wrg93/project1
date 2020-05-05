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


//creating radio buttons confirming if user or dependents are handicapped
var radioForm = document.createElement("FORM");
document.body.appendChild(radioForm);

var yesRadio = document.createElement("INPUT");
yesRadio.setAttribute("type", "radio");
yesRadio.setAttribute("id","yesRadio");
yesRadio.setAttribute("name","radio")
yesRadio.setAttribute("value","yes");
radioForm.appendChild(yesRadio);

var yesRadioLabel = document.createElement("LABEL");
yesRadioLabel.setAttribute("for","yes");
yesRadioLabel.textContent="Yes";
yesRadio.appendChild(yesRadioLabel);


var noRadio = document.createElement("INPUT");
noRadio.setAttribute("type", "radio");
noRadio.setAttribute("id","noRadio");
noRadio.setAttribute("name","radio");
noRadio.setAttribute("value","no");
radioForm.appendChild(noRadio);

var noRadioLabel = document.createElement("LABEL");
noRadioLabel.setAttribute("for","noRadio");
noRadioLabel.textContent="No";
noRadio.appendChild(noRadioLabel);
