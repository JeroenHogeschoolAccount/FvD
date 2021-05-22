

/* ZOEKEN MET ZOEKBALK */
var options = {
  valueNames: [ 'afbeelding' ]
};

var charactersList = new List('theList', options);



/* ZOEKEN MET SORTEREN */
charactersList.sort('afbeelding', { order: "asc" });



/* POP-UP SCHERM */
var vierkant = document.getElementById("vierkant");

// Button dat het vierkant laat zien
var button = document.getElementById("opgeslagenKnop");

// kruisje dat de vierkant laat verdwijnen
var kruisje = document.getElementsByClassName("kruisje")[0];


button.addEventListener("click", zien); 

function zien() {
    vierkant.classList.add ("block");
}

kruisje.addEventListener("click", weg); 

function weg(){
    vierkant.classList.remove ("block");
}
       


//var afbeeldingClick = document.getElementById("foto");
//
//afbeeldingClick.addEventListener("click", groot);
//
//function groot() {
//    groot.classList.add ("fullSize");
//}

//var optieOranje = document.getElementById("filter-oranje");
//
//optieOranje.addEventListener("change", myFunction);
//
//var weg = document.getElementById("rood");
//
//function myFunction() {
//  weg.remove();
//}





/* FILTEREN OP KLEUR */
var optionOranje = document.querySelector("#filter-oranje");
var optionGeel = document.querySelector("#filter-geel");
var optionGroen = document.querySelector("#filter-groen");
var optionBlauw = document.querySelector("#filter-blauw");
var optionPaars = document.querySelector("#filter-paars");
var optionRood = document.querySelector("#filter-rood");
var optionZwartwit = document.querySelector("#filter-zwartwit");
var optionAlle = document.querySelector("#filter-alle");


function filteren(event){
  var lijst = document.querySelector("ul");
  var filterMetKleurtje = event.target.value;

  lijst.className = "";

  lijst.classList.add(filterMetKleurtje);
}

optionOranje.addEventListener("change", filteren);
optionGeel.addEventListener("change", filteren);
optionGroen.addEventListener("change", filteren);
optionBlauw.addEventListener("change", filteren);
optionPaars.addEventListener("change", filteren);
optionRood.addEventListener("change", filteren);
optionZwartwit.addEventListener("change", filteren);
optionAlle.addEventListener("change", filteren);

