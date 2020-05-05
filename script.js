//Selector for Number of dependents
var numberSelector = document.createElement("SELECT");
numberSelector.setAttribute("id", "numberSelector");
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

//submit button which gathers results from two first select fields
var savingListButton = document.createElement("BUTTON")
savingListButton.textContent="Build my Life Saving List";
document.body.appendChild(savingListButton);
savingListButton.addEventListener("click", function (){
    var disabilitiesSubmit = document.getElementById("disabilities").value;
    var numberSubmit = document.getElementById("numberSelector").value;
    console.log(disabilitiesSubmit);
    console.log(numberSubmit);
})

//creation of General Supply List
var generalSupplyList = document.createElement("UL");
generalSupplyList.setAttribute("id", "generalSupplyList");
generalSupplyList.setAttribute("class","list");
document.body.appendChild(generalSupplyList);
generalSupplyList = ["Water (one gallon per person per day for at least three days, for drinking and sanitation)", 
"Food (at least a three-day supply of non-perishable food)",
"Battery-powered or hand crank radio and a NOAA Weather Radio with tone alert",
 "Flashlight",
 "First aid kit",
 "Extra batteries",
 "Whistle (to signal for help)",
 "Dust mask (to help filter contaminated air)",
 "Plastic sheeting and duct tape (to shelter in place)",
 "Moist towelettes, garbage bags and plastic ties (for personal sanitation)",
 "Wrench or pliers (to turn off utilities)",
 "Manual can opener (for food)",
 "Local maps",
 "Cell phone with chargers and a backup battery",
];


//function which takes items from any any list given and makes them buttons
function generateList (anyList){
    for (var i=0; i<anyList.length; i++){
    var supplyButton=document.createElement("BUTTON");
    supplyButton.innerHTML=anyList[i];
    document.body.appendChild(supplyButton);
    console.log(supplyButton);
    }
}

generateList(generalSupplyList);



