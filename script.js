// div disaster-list   div to append disaster history to 
// state1 and calledState  varriable indicating the state chosen 
// \n is a line break
// selectValue = the selcted state

// 1.we need to first select option child form our select parent in our form control.
// 1a. we first have to select the options, and then the child to grab the value.
// 1b. $(".form-control") > $("option") > $(this)
// 2. based on the value input, we must find a match in our 4 arrays to determine which region they are in.
// 2a. first determine the length of each array, if they are the same, we can use one loop for all 4 and if not, we need to create 4 
// loops to handle each array.
// 2b. Once looped we need to take our value and match it to each array so we can establish a match.
// 3.Once we determine which region they are in, we then display the corresponding text associated with the region.



var westernStates = ["AK", "AR", "AZ", "CA", "CO", "HI", "ID", "MT", "NV", "NM", "OR", "UT", "WA", "WY" ]
var northeasternStates = ["PA", "NY", "MD", "ME", "DE", "RI", "NJ", "MA", "VT", "CT", "NH"]
var midwesternState = ["ND", "SD", "NE",  "KS", "MN", "IA", "MO", "WI", "IL", "MI", "IN", "OH"]
var southernStates= ["TX", "OK", "AR", "LA", "MS", "KY", "TN", "AL", "WV", "VA", "NC", "SC", "GA", "FL", "MD" ]

var southText = "Hurricane katrina: 2005, 1836 deaths, $125billion in damages Hurricane Maria: 2017, 2982 deaths,\n $90bilion in damage 1980 heatwave: 1980, 1700 deaths, $20billion in damages 1928 Okeechobee hurricane: 1928, 2823 deaths, $800million in damages Hurricane Audrey: 1957, 416 deaths, $147million in damages"
var southElement = document.createElement("p")
southElement.innerHTML=southText

var midwestText = "1993, Great Flood of 1993, 50 dead, 37.3 billion damages 2012-13, North American Drought , 123 dead, 33.6 billion 1871, Peshitgo Forrest Fire, 1200 dead,  $170 million damages 2011, Super Outbreak, 324 dead, $3.2 billion damages"
var midwestElement = document.createElement("p")
midwestElement.innerHTML=westText

var northeastText = "1889,  Johnstown Flood, 2208 dead, $497 million damages 1888, Great White Hurricane, 400+ dead, $710 million damages 1938, Great New England Hurricane, 682 dead, $4.7 billion damages 1927, Vermont Flood, 84+ dead, $5.5 billion"
var northeastElement = document.createElement("p")
northeastPrint.innerHTML=northeastText

var westText = "1906 san Francisco earthquake: 1906,3000+ deaths, 7.9mg Paradise California wildfire: 2018, 85 deaths, deadliest fire in California history Los Angeles flood: 1938, 115 deaths, deadliest disaster in LA history.\n Northridge earthquake: 1994, 60 deaths, 6.9 mg"
var westElement = document.createElement("p")
westElement.innerHTML=westText

function southPrint(){
    $("#disaster-list").append(southElement);
}

function westPrint(){
    $("#disaster-list").append("westText");
}

function midwestPrint(){
    $(".disaster-list").append("midwestText");
}

function northeastPrint(){
    $(".disaster-list").append("northeastText");
}





var AL = {
    earthquakes: true,
    floods: false,
    hurricanes: true,
    tornados: false,
    wildfires: true,
    zombieApocalypse: false,
    alienInvasion: false
};
    
var AK= {
    earthquakes: true,
    floods: false,
    hurricanes: false,
    tornados: false,
    wildfires: false,
    zombieApocalypse: false,
    alienInvasion: false
};

var AZ= {
    earthquakes: false,
    floods: false,
    hurricanes: false,
    tornados: false,
    wildfires: true,
    zombieApocalypse: false,
    alienInvasion: false
};

var AR= {
    earthquakes: true,
    floods: true,
    hurricanes: true,
    tornados: false,
    wildfires: false,
    zombieApocalypse: false,
    alienInvasion: false
};

var CA= {
    earthquakes: true,
    floods: false,
    hurricanes: false,
    tornados: false,
    wildfires: true,
    zombieApocalypse: false,
    alienInvasion: false
};

var CO= {
    earthquakes: false,
    floods: true,
    hurricanes: false,
    tornados: true,
    wildfires: true,
    zombieApocalypse: false,
    alienInvasion: false
};

var CT= {
    earthquakes: false,
    floods: false,
    hurricanes: true,
    tornados: false,
    wildfires: false,
    zombieApocalypse: false,
    alienInvasion: false
};

var DE= {
    earthquakes: false,
    floods: false,
    hurricanes: true,
    tornados: false,
    wildfires: false,
    zombieApocalypse: false,
    alienInvasion: false
};

var FL= {
    earthquakes: false,
    floods: false,
    hurricanes: true,
    tornados: false,
    wildfires: true,
    zombieApocalypse: false,
    alienInvasion: false
};

var GA= {
    earthquakes: false,
    floods: false,
    hurricanes: true,
    tornados: false,
    wildfires: false,
    zombieApocalypse: false,
    alienInvasion: false
};

var HI= {
    earthquakes: true,
    floods: true,
    hurricanes: true,
    tornados: false,
    wildfires: false,
    zombieApocalypse: false,
    alienInvasion: false
};

var ID= {
    earthquakes: false,
    floods: false,
    hurricanes: false,
    tornados: false,
    wildfires: true,
    zombieApocalypse: false,
    alienInvasion: false
};

var IL= {
    earthquakes: true,
    floods: true,
    hurricanes: false,
    tornados: false,
    wildfires: false,
    zombieApocalypse: false,
    alienInvasion: false
};

var IN= {
    earthquakes: false,
    floods: false,
    hurricanes: false,
    tornados: false,
    wildfires: false,
    zombieApocalypse: false,
    alienInvasion: false
};

var IA= {
    earthquakes: false,
    floods: true,
    hurricanes: false,
    tornados: false,
    wildfires: false,
    zombieApocalypse: false,
    alienInvasion: false
};

var KS= {
    earthquakes: false,
    floods: true, 
    hurricanes: false,
    tornados: true,
    wildfires: false,
    zombieApocalypse: false,
    alienInvasion: false
};

var KY= {
    earthquakes: true,
    floods: true,
    hurricanes: false,
    tornados: false,
    wildfires: false,
    zombieApocalypse: false,
    alienInvasion: false
};

var LA = {
    earthquakes: false,
    floods: false,
    hurricanes: true,
    tornados: false,
    wildfires: false,
    zombieApocalypse: false,
    alienInvasion: false
};

var ME= {
    earthquakes: false,
    floods: false,
    hurricanes: true,
    tornados: false,
    wildfires: false,
    zombieApocalypse: false,
    alienInvasion: false
};

var MD= {
    earthquakes: false,
    floods: false,
    hurricanes: true,
    tornados: false,
    wildfires: false,
    zombieApocalypse: false,
    alienInvasion: false
};

var MA= {
    earthquakes: false,
    floods: false,
    hurricanes: true,
    tornados: false,
    wildfires: false,
    zombieApocalypse: false,
    alienInvasion: false
};

var MI= {
    earthquakes: false,
    floods: true, 
    hurricanes: true,
    tornados: false,
    wildfires: false,
    zombieApocalypse: false,
    alienInvasion: false
};

var MN= {
    earthquakes: false,
    floods: true, 
    hurricanes: false,
    tornados: false,
    wildfires: false,
    zombieApocalypse: false,
    alienInvasion: false
};

var MS= {
    earthquakes: false,
    floods: true,
    hurricanes: false,
    tornados: false,
    wildfires: false,
    zombieApocalypse: false,
    alienInvasion: false
};

var MO= {
    earthquakes:true,
    floods: false,
    hurricanes: false,
    tornados: false,
    wildfires: true,
    zombieApocalypse: false,
    alienInvasion: false
};

var MT= {
    earthquakes: false,
    floods: false,
    hurricanes: false,
    tornados: false,
    wildfires: false,
    zombieApocalypse: false,
    alienInvasion: false
};

var NE= {
    earthquakes: false,
    floods: true,
    hurricanes: false,
    tornados: true,
    wildfires: false,
    zombieApocalypse: false,
    alienInvasion: false
};

var NV= {
    earthquakes: false,
    floods: false,
    hurricanes: false,
    tornados: false,
    wildfires: true, 
    zombieApocalypse: false,
    alienInvasion: false
};

var NH= {
    earthquakes: false,
    floods: false,
    hurricanes: true,
    tornados: false,
    wildfires: false,
    zombieApocalypse: false,
    alienInvasion: false
};

var NJ = {
    earthquakes: false,
    floods: false,
    hurricanes: true,
    tornados: false,
    wildfires: false,
    zombieApocalypse: false,
    alienInvasion: false
};

var NM = {
    earthquakes: false,
    floods: true,
    hurricanes: false,
    tornados: false,
    wildfires: true, 
    zombieApocalypse: false,
    alienInvasion: false
};

var NY= {
    earthquakes: false,
    floods: false,
    hurricanes: true,
    tornados: false,
    wildfires: false,
    zombieApocalypse: false,
    alienInvasion: false
};

var NC= {
    earthquakes: false,
    floods: false,
    hurricanes: true,
    tornados: false,
    wildfires: false,
    zombieApocalypse: false,
    alienInvasion: false
};

var ND= {
    earthquakes: false,
    floods: true,
    hurricanes: false,
    tornados: false,
    wildfires: false,
    zombieApocalypse: false,
    alienInvasion: false
};

var OH= {
    earthquakes: false,
    floods: false,
    hurricanes: false,
    tornados: false,
    wildfires: false,
    zombieApocalypse: false,
    alienInvasion: false
};

var OK= {
    earthquakes: false,
    floods: false,
    hurricanes: false,
    tornados: true,
    wildfires: false,
    zombieApocalypse: false,
    alienInvasion: false
};

var OR= {
    earthquakes: true,
    floods: false,
    hurricanes: false,
    tornados: false,
    wildfires: true,
    zombieApocalypse: false,
    alienInvasion: false
};

var PA= {
    earthquakes: false,
    floods: false,
    hurricanes: true,
    tornados: false, 
    wildfires: false,
    zombieApocalypse: false,
    alienInvasion: false
}; 

var RI= {
    earthquakes: false,
    floods: false,
    hurricanes: true,
    tornados: false,
    wildfires: false,
    zombieApocalypse: false,
    alienInvasion: false
};

var SC = {
    earthquakes: false,
    floods: false,
    hurricanes: true, 
    tornados: false,
    wildfires: false,
    zombieApocalypse: false,
    alienInvasion: false
};

var SD = {
    earthquakes: false,
    floods: true,
    hurricanes: false,
    tornados: true,
    wildfires: false,
    zombieApocalypse: false,
    alienInvasion: false
};

var TN = {
    earthquakes: true,
    floods: false,
    hurricanes: false,
    tornados: false,
    wildfires: false,
    zombieApocalypse: false,
    alienInvasion: false
};

var TX= {
    earthquakes: false,
    floods: true,
    hurricanes: true, 
    tornados: true,
    wildfires: true,
    zombieApocalypse: false,
    alienInvasion: false
};

var UT = {
    earthquakes: true,
    floods: false,
    hurricanes: false,
    tornados: false,
    wildfires: true, 
    zombieApocalypse: false,
    alienInvasion: false
};

var VT= {
    earthquakes: false,
    floods: false,
    hurricanes: true,
    tornados: false,
    wildfires: false,
    zombieApocalypse: false,
    alienInvasion: false
};

var VA = {
    earthquakes: false,
    floods: false,
    hurricanes: true,
    tornados: false,
    wildfires: false,
    zombieApocalypse: false,
    alienInvasion: false
};

var WA = {
    earthquakes: true,
    floods: false,
    hurricanes: false,
    tornados: false,
    wildfires: true,
    zombieApocalypse: false,
    alienInvasion: false
};

var WV = {
    earthquakes: false,
    floods: false,
    hurricanes: false,
    tornados: false,
    wildfires: false,
    zombieApocalypse: false,
    alienInvasion: false
};

var WI = {
    earthquakes: false,
    floods: false,
    hurricanes: false,
    tornados: false,
    wildfires: false,
    zombieApocalypse: false,
    alienInvasion: false
};

var WY= {
    earthquakes: false,
    floods: false,
    hurricanes: false,
    tornados: false,
    wildfires: true, 
    zombieApocalypse: false,
    alienInvasion: false
};




//variables to plug in dependents number
var depNum = 0;
var babNum=0;

//creation of Lists


//function which takes items from any any list given and appends them to list

var listsDiv=document.getElementById("lists");

var supplyList = document.createElement("ul");
    supplyList.style.listStyleType="none";
    listsDiv.appendChild(supplyList);

function generateList (anyList){
    
    for (var i=0; i<anyList.length; i++){
    var supplyItems=document.createElement("UL");
    supplyItems.innerHTML= anyList[i];
    supplyItems.setAttribute("class", "list");
    supplyList.appendChild(supplyItems);

    var supplySpan=document.createElement("span");
    supplySpan.setAttribute("class", "fa-li");
    supplyItems.appendChild(supplySpan);

    var supplyIcon = document.createElement("i");
    supplyIcon.setAttribute("class", "fas fa-check-square");
    supplySpan.appendChild(supplyIcon);

    
    }
}





//On click event to add and display basket items from local storage
var basketArray = [];
$(".list").on("click", function(){
    this.setAttribute("class","toBeRemoved");
    basketArray.push(this.innerHTML);
    localStorage.setItem("basket",JSON.stringify(basketArray));
    renderBasket();
})

//function that renders Basket Items
function renderBasket(){
    basketItems = localStorage.getItem("basket");
    if (basketItems === null){
        return;
    }
    console.log(basketItems);
    document.body.appendChild(basketItems);
}

var state1="";
function currentLocation () {
    // geolocation function to get latitude and longitude
    navigator.geolocation.getCurrentPosition(function(position){
        console.log(position);
        var lat = position.coords.latitude;
        var long= position.coords.longitude;
        
        // call to google API to get location by longitude and latitude
        $.get("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + long + "&key=AIzaSyCfzql8n3orawbtaEJs17tPctto036AFeg",function(){
            // create img element and getting map image of longitude and latitude location and append to index.html
            var imgEl = $("<img width=80%>");
            imgEl.attr("src", "https://maps.googleapis.com/maps/api/staticmap?center=" + lat + "," + long + "&zoom=13&size=250x250&key=AIzaSyCfzql8n3orawbtaEJs17tPctto036AFeg")
            imgEl.attr("class", "map-image")
                $("#current-location").append(imgEl)
            
        });
        //  call to mapquest API to get city and state of longitude and latitude
        var queryURL = "http://www.mapquestapi.com/geocoding/v1/address?key=iJn3fnxq6GVxdR2Czn9tCFjMdpiLFMPf&location=" + lat + "," + long;
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then (function(response){
            city1 = response.results[0].locations[0].adminArea4
            state1 = response.results[0].locations[0].adminArea3
            console.log(response)
            var h6El = $("<h6>")
            h6El.attr("class", "city-name")
            h6El.text("You are in " + city1 + ", " +state1)
            weather(city1);
            $("#current-location").prepend(h6El)
            
            
            
            $("#generate").on("click",function(){
                if ($("#option1").parent().attr("class").includes("active")){
                    // selectValue is used to grab the form select drop down's value
                    var selectValue = $(".form-control option:selected").val();
                    var disabilitiesSubmit = document.getElementById("exampleFormControlSelect3").value;
                    var numberSubmit = document.getElementById("exampleFormControlSelect1").value;
                    var babiesSubmit = document.getElementById("exampleFormControlSelect2").value;
                    depNum=parseInt(numberSubmit) + 1;
                    babNum=parseInt(babiesSubmit);
                    var generalSupplyList = document.createElement("UL");
                    generalSupplyList.setAttribute("id", "generalSupplyList");
                    generalSupplyList.setAttribute("class","list");
                    generalSupplyList = [(depNum*3) + "Water: one gallon per day per person", 
                    "Food:  Minimum 3 day supply of non perishable food.  Factor in 2000 calories per day per person",
                    "Radio:  Should include NOAA Weather chanels.  Ideally solar or hand cranked",
                    "Flashlight",
                    "First aid kit",
                    "Extra batteries",
                    "Whistle",
                    "Dust mask",
                    "Plastic tarps",
                    "Duct tape",
                    "Moist towelettes, garbage bags and plastic ties",
                    "Wrench or pliers",
                    "Manual can opener",
                    "Local maps",
                    "Cell phone with chargers and a backup battery",
                    "Cloth face coverings",
                    "Soap",
                    "Hand sanitizer", 
                    "Disinfecting wipes",
                    "Prescription medications",
                    "Over the counter medications:  pain relievers, anti-diarrhea medication, antacids, laxatives, etc.",
                    "Prescription eyeglasses and contact lens solution",
                    "Pet food and water",
                    "Cash or traveler's checks",
                    "Important documents: insurance policies, identification, bank records, etc.",
                    "Sleeping bag or warm blanket",
                    "Extra clothing and shoes: limate appropriate and sturdy",
                    "Fire extinguisher",
                    "Matches and lighters",
                    "Feminine supplies and personal hygiene items",
                    "Mess kits, paper cups, plates, paper towels and plastic utensils",
                    "Paper and pencil"  
                    ];
                    
                    var childrenSupplyList = [
                        "Entertainment: books, games, puzzles, etc", 
                        "Infant formula", 
                        "Bottles", 
                        (babNum*3) +" days supply of diapers", 
                        "Baby wipes", 
                        "Diaper rash cream"  
                    ];
                    
                    var disabilitiesSupplyList = [
                        "Medical alert tags or bracelets.",
                        "Associated medications",
                        "Braille communication cards",
                        "Spare batteries or power supplies for medical equipment",    
                        "Map of nearest treatment facilities"
                    ];
                    
                    var earthquakeSupplyList = [
                        "Fastening hardware: duct tape, paracord, etc.",
                        "Utility shutoff tools",   
                        "Zip-ties",
                        "Tent or auxillary shelter"
                    ];
                    
                    var floodSupplyList = [
                        "Sandbags",
                        "Sump pump with spare power supply",
                        "Waterproof storage containers",  
                        "Rain jacket",
                        "Waterproof boots"                      
                    ];
                    
                    var hurricaneSupplyList = [
                        "Cordage and rope",
                        "Poncho",
                        "Map with evacuation routes",
                        "Barricading hardware: plywood, tie-down ropes, etc"
                    ];
                    
                    var tornadoSupplyList = [
                        "Directives and maps for evacuation",
                        "Evacuation vehicle",
                        "Map of utility shutoff valves",
                        "Cleared basement access"
                    ]
                    
                    var widlfireSupplyList = [
                        "N95 mask",
                        "CO2 detectors",
                        "Fire extinguishers",
                        "Rakes, shovels and tools",
                        "Debris clearance perimeter of 30 fett from shelter",
                        "Fire-proof storage container for important documents",
                        "Fire blankets",
                        "Supplies to seal oppenings: duct tape, sand bags, etc.",
                    ];
                    
                    
                    
            var calledState=window[state1];
                $("#disaster-prone").empty();
                h4El= $("<h4>")
                h4El.text(city1+", "+state1 + " is prone to: ")
                $("#disaster-prone").append(h4El)
            if (calledState.earthquakes==true){
                console.log("true")
                h5El= $("<h5>")
                h5El.text("Earthquakes")
                $("#disaster-prone").append(h5El)
                generateList(earthquakeSupplyList);
            }
            if (calledState.floods==true){
                console.log("true")
                h5El= $("<h5>")
                h5El.text("Floods")
                $("#lists").append(h5El)
                generateList(floodSupplyList);
            }
            if (calledState.hurricanes==true){
                console.log("true")
                h5El= $("<h5>")
                h5El.text("Hurricanes")
                $("#lists").append(h5El)
                generateList(hurricaneSupplyList);
            }
            if (calledState.tornados==true){
                console.log("true")
                h5El= $("<h5>")
                h5El.text("Tornados")
                $("#lists").append(h5El)
                generateList(tornadoSupplyList);
            }
            if (calledState.wildfires==true){
                console.log("true")
                h5El= $("<h5>")
                h5El.text("Wildfires")
                $("#disaster-prone").append(h5El)
                generateList(widlfireSupplyList);
            }
            
            if (babiesSubmit!=="0"){
                generateList(childrenSupplyList);
            }
            
            if (disabilitiesSubmit!=="no"){
                generateList(disabilitiesSupplyList);
            }
            generateList(generalSupplyList);
        }else{
            if ($("#option2").parent().attr("class").includes("active")){
                var zombieSupplyList = [
                    "Cross-bow",
                    "Strong deodarant",
                    "Solid head gear",
                    "Motorcycle"
                    
                    
                ]
                generateList(zombieSupplyList);
            }
            
            if ($("#option3").parent().attr("class").includes("active")){
                var alienSupplyList = [
                    "Reese's Pieces",
                    "Rifle with plenty of spare ammo",
                    "Tin foil",
                    "Remove all tooth fillings"
                ]
                generateList(alienSupplyList);
            }}
            
        })
    });
})
}

currentLocation();














// function to change location
$("#new-location").on("click", function(){
    event.preventDefault();
    var city1 = $("input").val();
    var state1 = $("select").val();
    // weather(city1);
    $(".map-image").attr("src", "https://maps.googleapis.com/maps/api/staticmap?center="+ city1 + "," + state1 + "&zoom=13&size=950x950&key=AIzaSyCfzql8n3orawbtaEJs17tPctto036AFeg")
   $(".city-name").text("You are in " + city1 + ", " +state1)


   $("#generate").on("click",function(){
    $("#disaster-prone").empty();
            h4El= $("<h4>")
            h4El.text(city1+", "+state1 + " is prone to: ")
            $("#disaster-prone").append(h4El)
            
    if ($("#option1").parent().attr("class").includes("active")){
    var calledState=window[state1];
    
    if (calledState.earthquakes===true){
        h5El= $("<h5>")
        h5El.text("Earthquakes")
        $("#disaster-prone").append(h5El)
        generateList(earthquakeSupplyList);
    }
    if (calledState.floods===true){
        h5El= $("<h5>")
        h5El.text("Floods")
        $("#disaster-prone").append(h5El)
        generateList(floodSupplyList);
    }
    if (calledState.hurricanes===true){
        h5El= $("<h5>")
        h5El.text("Hurricanes")
        $("#disaster-prone").append(h5El)
        generateList(hurricaneSupplyList);
    }
    if (calledState.tornados===true){
        h5El= $("<h5>")
        h5El.text("Tornadoes")
        $("#disaster-prone").append(h5El)
        generateList(tornadoSupplyList);
    }
    if (calledState.wildfires===true){
        h5El= $("<h5>")
        h5El.text("Wildfires")
        $("#disaster-prone").append(h5El)
        generateList(widlfireSupplyList);
    }
    

    var disabilitiesSubmit = document.getElementById("exampleFormControlSelect3").value;
    var numberSubmit = document.getElementById("exampleFormControlSelect1").value;
    var babiesSubmit = document.getElementById("exampleFormControlSelect2").value;
    console.log(disabilitiesSubmit);
    console.log(numberSubmit);
    console.log(babiesSubmit);

   console.log(babiesSubmit);
    if (babiesSubmit!=="0"){
        generateList(childrenSupplyList);
    }

    if (disabilitiesSubmit!=="no"){
        generateList(disabilitiesSupplyList);
    }
    generateList(generalSupplyList);
}else{
    if ($("#option2").parent().attr("class").includes("active")){
        generateList(zombieSupplyList);
    }

    if ($("#option3").parent().attr("class").includes("active")){
        generateList(alienSupplyList);
    }}
    

    //gathering which other lists to display based on state
   
   
    // if (calledState.alienInvasion=true){
    //     generateList(alienSupplyList);
    // }
    // if (calledState.zombieApocalypse=true){
    //     generateList(zombieSupplyList);
    // }

})


});

// function to get weather
function weather(city1){
    var apiKey = "bb06c0b8789f5256fcbbe492b33425e3";
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city1 + "&appid=" + apiKey + "&units=imperial";
    
    
    $.ajax({
    
    url: queryURL,
    method: "GET"
    
    })
    .then(function(response){
        var icon = response.weather[0].icon;
        var pEl = $("<p id='weather-status'>Weather: " + response.main.temp +"°F; " + response.weather[0].description +  "</p>")
        
        imageEl=$("<img>")
        imageEl.attr("src", "http://openweathermap.org/img/wn/" + icon + "@2x.png")
        imageEl.attr("class", "weather-icon")
        $("#current-location").append(pEl)
        $("#current-location").append(imageEl)
    });
    }

// Logic to compare which region the value exists in
function comparison(state) {
    for(let i = 0; i < westernStates.length; i++) {
        if(state === westernStates[i]) {
           return console.log(westText);
           westPrint;
        }
    }
    for(let i = 0; i < northeasternStates.length; i++) {
        if(state === northeasternStates[i]) {
            return console.log(northeastText);
            northeastPrint;
        }
    }
    for(let i = 0; i < midwesternState.length; i++) {
        if(state === midwesternState[i]) {
            return console.log(midwestText);
            midwestPrint;
        }
    }
    for(let i = 0; i < southernStates.length; i++) {
        if(state === southernStates[i]) {
            southPrint;
            return console.log(southElement);
        }
    }
}


