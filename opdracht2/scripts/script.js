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

var kruisje = document.getElementsByClassName("kruisje")[0];


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
    if (e.target.classList.contains("modal")) {
        modal.classList.remove("open");
        original.classList.remove("open");
    }
});



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




/* AFBEELDING WORDT TOEGEVOEGD AAN LIJST MET FAVORIETEN*/
var deOpgeslagenLi = document.getElementById("testLi");
//var hartjeKnop = document.getElementById("hartjeKnopTest");
var opgeslagenLijst = document.getElementById("list");
var alleHartjeKnoppen = document.querySelectorAll("ul.list button.buttonHart");

alleHartjeKnoppen.forEach(function (hartjeKnop) {
    hartjeKnop.addEventListener("click", toevoegen);
});

function toevoegen(event) {
    var itm = event.target.closest("li");
    var cln = itm.cloneNode(true);
    var clnButton = cln.querySelector("button");
    console.log(clnButton);
    clnButton.classList.add("toegevoegd");
    opgeslagenLijst.appendChild(cln);
}





//
//
//
///* Animatie van de opgeslagen knop en bewaar knop van de oranje rots - versie van gesprek  */
//var hartjeKnop = document.getElementById("hartjeKnopTest");
//opgeslagenKnop = document.getElementById("opgeslagenKnop")
//
//hartjeKnop.addEventListener("click", animatie);
//
//function animatie() {
//    console.log(this)
//    opgeslagenKnop.classList.add("jaa");
//    this.classList.add("toegevoegd");
//}



/* Animatie van de opgeslagen knop en bewaar knop van de oranje rots - versie voor gesprek  */ 
var hartjeKnop = document.getElementById("hartjeKnopTest");
opgeslagenKnop = document.getElementById("opgeslagenKnop")

hartjeKnop.addEventListener("click", animatie);

function animatie() {
    opgeslagenKnop.classList.add("jaa");
    hartjeKnop.classList.add("toegevoegd");
}


/* Animatie van de opgeslagen knop en bewaar knop van de oranje rots - versie met class - werkt niet  */ 
//
//
//var hartjeKnop = document.getElementsByClassName("buttonHart");
//opgeslagenKnop = document.getElementById("opgeslagenKnop")
//
//hartjeKnop.addEventListener("click", rood);
//
//function rood() {
//    opgeslagenKnop.classList.add("jaa");
//    hartjeKnop.classList.add("buttonHartToegevoegd");
//}






/* Bron: stukje JavaScript bekeken/gebruikt van Muhammet */
var favorietKnop2 = document.querySelector(
    ".list li:nth-child(2) .buttonHart"
);

favorietKnop2.addEventListener("click", favorietOpslaan2);

function favorietOpslaan2() {
    if (favorietKnop2.classList.contains("test")) {
        favorietKnop2.classList.remove("test");
        favorietKnop2.style.color = "red";
        opgeslagenKnop.classList.add("jaa");

    } else {
        favorietKnop2.classList.add("test");
        favorietKnop2.style.color = "white";
        //            opgeslagenLijst.remove("itm");
    }
}



var favorietKnop3 = document.querySelector(
    ".list li:nth-child(3) .buttonHart"
);

favorietKnop3.addEventListener("click", favorietOpslaan3);

function favorietOpslaan3() {
    if (favorietKnop3.classList.contains("test")) {
        favorietKnop3.classList.remove("test");
        favorietKnop3.style.color = "red";
        opgeslagenKnop.classList.add("jaa");

    } else {
        favorietKnop3.classList.add("test");
        favorietKnop3.style.color = "white";
    }
}



var favorietKnop4 = document.querySelector(
    ".list li:nth-child(4) .buttonHart"
);

favorietKnop4.addEventListener("click", favorietOpslaan4);

function favorietOpslaan4() {
    if (favorietKnop4.classList.contains("test")) {
        favorietKnop4.classList.remove("test");
        favorietKnop4.style.color = "red";
        opgeslagenKnop.classList.add("jaa");

    } else {
        favorietKnop4.classList.add("test");
        favorietKnop4.style.color = "white";
    }
}




