//Selector for Number of dependents
var numberSelector = document.createElement("SELECT");
numberSelector.setAttribute("id", "mySelect");
document.body.appendChild(numberSelector);

var optionOne = document.createElement("OPTION");
optionOne.setAttribute("value", "optionOne");
optionOne.textContent="1";
numberSelector.appendChild(optionOne);

var optionTwo = document.createElement("OPTION");
optionTwo.setAttribute("value", "optionTwo");
optionTwo.textContent="2";
numberSelector.appendChild(optionTwo);

var optionThree = document.createElement("OPTION");
optionThree.setAttribute("value", "optionThree");
optionThree.textContent="3";
numberSelector.appendChild(optionThree);

var optionFour = document.createElement("OPTION");
optionFour.setAttribute("value", "optionFour");
optionFour.textContent="4";
numberSelector.appendChild(optionFour);

var optionFive = document.createElement("OPTION");
optionFive.setAttribute("value", "optionFive");
optionFive.textContent="5";
numberSelector.appendChild(optionFive);

var optionSix = document.createElement("OPTION");
optionSix.setAttribute("value", "optionSix");
optionSix.textContent="6";
numberSelector.appendChild(optionSix);

var optionSeven = document.createElement("OPTION");
optionSeven.setAttribute("value", "optionSeven");
optionSeven.textContent="7";
numberSelector.appendChild(optionSeven);

var optionEight = document.createElement("OPTION");
optionEight.setAttribute("value", "optionEight");
optionEight.textContent="8";
numberSelector.appendChild(optionEight);

var optionNine = document.createElement("OPTION");
optionNine.setAttribute("value", "optionNine");
optionNine.textContent="9";
numberSelector.appendChild(optionNine);

//Selector for disabilities
var disabilities = document.createElement("SELECT");
disabilities.setAttribute("id", "disabilities");
document.body.appendChild(disabilities);

var optionYes = document.createElement("OPTION");
optionYes.setAttribute("value", "optionYes");
optionYes.textContent="Yes";
disabilities.appendChild(optionYes);

var optionNo = document.createElement("OPTION");
optionNo.setAttribute("value", "optionNo");
optionNo.textContent="No";
disabilities.appendChild(optionNo);

