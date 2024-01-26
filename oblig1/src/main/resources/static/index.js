let filmer = [];


function innholdSjekk(film, antall, fornavn, etternavn, telefonnr, epost){
    let sjekk = true;
    if (antall == null || antall === ""){
        manglerInnhold("antall");
        sjekk = false;
    }
    if(fornavn == null || fornavn === ""){
        manglerInnhold("fornavn");
        sjekk = false;
    }
    if (etternavn == null || etternavn === ""){
        manglerInnhold("etternavn");
        sjekk = false;
    }
    if(telefonnr == null || telefonnr === ""){
        manglerInnhold("telefonnr");
        sjekk = false;
    }
    if(epost == null || epost === ""){
        manglerInnhold("epost");
        sjekk = false;
    }
    return sjekk;
}
function manglerInnhold(input){
    document.getElementById(input+"Mangler").innerHTML = "Må skrive noe inn i "+input;
}
function fjernManglerInnhold(){
    document.getElementById("antallMangler").innerHTML = "";
    document.getElementById("fornavnMangler").innerHTML = "";
    document.getElementById("etternavnMangler").innerHTML = "";
    document.getElementById("telefonnrMangler").innerHTML = "";
    document.getElementById("epostMangler").innerHTML = "";
}
function kjopBilett(){
    fjernManglerInnhold();
    let film = document.getElementById("filmer").value;
    let antall = document.getElementById("antall").value;
    let fornavn = document.getElementById("fornavn").value;
    let etternavn = document.getElementById("etternavn").value;
    let telefonnr = document.getElementById("telefonnr").value;
    let epost = document.getElementById("epost").value;
    if (innholdSjekk(film, antall, fornavn, etternavn, telefonnr, epost) === false){
        return;
    }
    let bestilling = [];
    bestilling.push(film, antall, fornavn, etternavn, telefonnr, epost);
    filmer.push(bestilling);
    let liste = document.getElementById("filmListe");
    liste.innerText = "";
    for (i = 0; i < filmer.length; i++){
        let li = document.createElement('li');
        li.innerText = filmer[i][0] + ", Antall: " + filmer[i][1];
        liste.appendChild(li);
    }
}
function slettBiletter(){
    fjernManglerInnhold();
    filmer = [];
    document.getElementById("filmListe").innerText = "";
    document.getElementById("antall").value = "";
    document.getElementById("fornavn").value = "";
    document.getElementById("etternavn").value = "";
    document.getElementById("telefonnr").value = "";
    document.getElementById("epost").value = "";
}

