/* ZOEKEN MET ZOEKBALK */
var options = {
  valueNames: [ 'afbeelding' ]
};

var charactersList = new List('theList', options);



/* ZOEKEN MET SORTEREN */
charactersList.sort('afbeelding', { order: "asc" });



/* POP-UP SCHERM OPGESLAGEN */
var vierkant = document.getElementById("vierkant");

var button = document.getElementById("opgeslagenKnop");

var kruisje = document.getElementsByClassName("kruisje")[0];


button.addEventListener("click", zien); 

function zien() {
    vierkant.classList.add ("block");
}

kruisje.addEventListener("click", weg); 

function weg(){
    vierkant.classList.remove ("block");
}
       


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



/* AFBEELDING TOEVOEGEN AAN OPGESLAGEN */
var buttonToevoegen = document.getElementsByClassName("buttonHart");
var lijstOpgeslagen = document.getElementsByClassName("list2");



/* AFBEELDING GROOT BEKIJKEN */
/* Bron: https://www.youtube.com/watch?v=4SQXOA8Z-lo */
var modal = document.querySelector(".modal");
var previews = document.querySelectorAll(".list img");
var original = document.querySelector(".full-img");
//var imgText = document.querySelector(".caption");

previews.forEach(preview => {
    preview.addEventListener('click', () => {
        modal.classList.add("open");
        original.classList.add("open");
        var originalSrc = preview.getAttribute("data-original");
        original.src = originalSrc;
    });
});

modal.addEventListener("click", (e) => {
    if(e.target.classList.contains("modal")) {
        modal.classList.remove("open");
             original.classList.remove("open");
    }
});



 