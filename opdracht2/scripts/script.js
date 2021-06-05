/* ZOEKEN MET ZOEKBALK */
var options = {
    valueNames: ['afbeelding']
};

var charactersList = new List('theList', options);




/* ZOEKEN MET SORTEREN */
charactersList.sort('afbeelding', {
    order: "asc"
});




/* POP-UP SCHERM OPGESLAGEN */
var vierkant = document.getElementById("vierkant");
var button = document.getElementById("opgeslagenKnop");
var kruisje = document.getElementsByClassName("sluiten")[0];


button.addEventListener("click", zien);

function zien() {
    vierkant.classList.add("block");
}

kruisje.addEventListener("click", weg);

function weg() {
    vierkant.classList.remove("block");
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


function filteren(event) {
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




///* AFBEELDING TOEVOEGEN AAN OPGESLAGEN */
//var buttonToevoegen = document.getElementsByClassName("buttonHart");
//var lijstOpgeslagen = document.getElementsByClassName("list2");




/* AFBEELDING GROOT BEKIJKEN */
/* Bron: https://www.youtube.com/watch?v=4SQXOA8Z-lo */
var modal = document.querySelector(".modal");
var previews = document.querySelectorAll(".list img");
var original = document.querySelector(".full-img");


previews.forEach(preview => {
    preview.addEventListener('click', () => {
        modal.classList.add("open");
        original.classList.add("open");
        var originalSrc = preview.getAttribute("data-original");
        original.src = originalSrc;
    });
});

modal.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal")) {
        modal.classList.remove("open");
        original.classList.remove("open");
    }
});


/* POP UP SCHERM GROTE AFBEELDING SLUITEN MET KRUISJE */
var sluit = document.querySelector(".modal button.sluiten");

sluit.addEventListener("click", doeiGroteAfbeelding);

function doeiGroteAfbeelding() {
    modal.classList.remove("open");
    original.classList.remove("open");
}


/* POP-UP AFSLUITEN MET TOETS */
/* Bron hulp: https://stackoverflow.com/questions/3369593/how-to-detect-escape-key-press-with-pure-js-or-jquery */
document.addEventListener('keydown', function (e) {
    if (e.keyCode == 27) {
        vierkant.classList.remove("block");
        modal.classList.remove("open");
        original.classList.remove("open");
    }
});





/* OPGESLAGEN LIJST OPENEN MET TOETS OMHOOG */
document.addEventListener('keydown', function (e) {
    if (e.keyCode == 38) {
        vierkant.classList.add("block");
    }
});





/* AFBEELDING TOEGEVOEGEN EN VERWIJDEREN LIJST MET FAVORIETEN */
/* Bron: docent Sanne */
var deOpgeslagenLi = document.getElementById("testLi");
//var hartjeKnop = document.getElementById("hartjeKnopTest");
var opgeslagenLijst = document.getElementById("list");
var alleHartjeKnoppen = document.querySelectorAll("ul.list button.buttonHart");

alleHartjeKnoppen.forEach(function (hartjeKnop) {
    hartjeKnop.addEventListener("click", toggleFavoriet);
});

function toggleFavoriet(event) {
    //    check of die foto favoriet is
    var foto = event.target.closest("li");
    if (foto.classList.contains("toegevoegd")) {
        favorietVerwijderen(foto);
    } else {
        favorietToevoegen(foto);
    }
    //    als favoriet verwijderen
    //    als niet favoriet toevoegen
}

function favorietToevoegen(foto) {
    //   foto opzoeken 
    //   class toevoegen aan de foto
    foto.classList.add("toegevoegd");
    //   met css hartje rood maken
    //   foto clone
    var fotoClone = foto.cloneNode(true);
    var opgeslagenKnop = document.getElementById("opgeslagenKnop")
    var fotoCloneButton = fotoClone.querySelector("button");
    fotoCloneButton.addEventListener("click", favorietVerwijderenInFavorietenlijst);
    //   clone toevoegen aan lijst met favorieten
    opgeslagenLijst.appendChild(fotoClone);
    //    teller +1
    var tellerKnop = document.querySelector("#opgeslagenKnop span");
    var tellerTitel = document.querySelector("#vierkant h2 span");
    var huidigeAantal = tellerKnop.textContent;
    var nieuweAantal = parseInt(huidigeAantal) + 1;
    tellerKnop.textContent = nieuweAantal;
    tellerTitel.textContent = nieuweAantal;
    opgeslagenKnop.classList.add("jaa");
}

/* FAVORIET VERWIJDEREN NORMALE LIJST */
function favorietVerwijderen(foto) {
    //    foto opzoeken 
    //    de class weghalen 
    foto.classList.remove("toegevoegd");
    //    de foto opzoeken in de lijst met favorieten 
    var fotoId = foto.dataset.id;
    var fotoInFavorietenLijst = document.querySelector("ul.list2 li[data-id='" + fotoId + "']");
    //    foto weghalen uit de lijst
    fotoInFavorietenLijst.remove();
    //    teller -1
    var tellerKnop = document.querySelector("#opgeslagenKnop span");
    var tellerTitel = document.querySelector("#vierkant h2 span");
    var huidigeAantal = tellerKnop.textContent;
    var nieuweAantal = parseInt(huidigeAantal) - 1;
    tellerKnop.textContent = nieuweAantal;
    tellerTitel.textContent = nieuweAantal;
        opgeslagenKnop.classList.add("nee");
}

/* FAVORIET VERWIJDEREN POP-UP LIJST */
function favorietVerwijderenInFavorietenlijst(event) {
    //    foto opzoeken
    var fotoInFavorietenLijst = event.target.closest("li");
    //    class weg uit normale lijst 
    var fotoId = fotoInFavorietenLijst.dataset.id;
    var fotoInNormaleLijst = document.querySelector("ul.list li[data-id='" + fotoId + "']");
    fotoInNormaleLijst.classList.remove("toegevoegd");
    //    foto weg uit favorietenlijst
    fotoInFavorietenLijst.remove();
    //    teller -1
    var tellerKnop = document.querySelector("#opgeslagenKnop span");
    var tellerTitel = document.querySelector("#vierkant h2 span");
    var huidigeAantal = tellerKnop.textContent;
    var nieuweAantal = parseInt(huidigeAantal) - 1;
    tellerKnop.textContent = nieuweAantal;
    tellerTitel.textContent = nieuweAantal;
}
