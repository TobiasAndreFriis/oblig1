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
    document.getElementById(input+"Info").innerHTML = "Må skrive noe inn i "+input;
}
function fjernManglerInnhold(){
    document.getElementById("antallInfo").innerHTML = "";
    document.getElementById("fornavnInfo").innerHTML = "";
    document.getElementById("etternavnInfo").innerHTML = "";
    document.getElementById("telefonnrInfo").innerHTML = "";
    document.getElementById("epostInfo").innerHTML = "";
}
function fjernInnhold(){
    document.getElementById("filmer").value = "";
    document.getElementById("antall").value = "";
    document.getElementById("fornavn").value = "";
    document.getElementById("etternavn").value = "";
    document.getElementById("telefonnr").value = "";
    document.getElementById("epost").value = "";
}
function antallValidering(){

}
function fornavnValidering(){

}
function etternavnValidering(){

}
function telefonnrValidering(telefonnr){
    const gyldigTelefonnr = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    if(telefonnr.match(gyldigTelefonnr)){
        return true;
    }
    else{
        document.getElementById("telefonnrInfo").innerHTML = "Vennligst skriv inn et gyldig telefonnr!";
        return false;
    }
}
function epostValidering(epost){
    const gyldigEpost = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(epost.match(gyldigEpost)){
        return true;
    }
    else{
        document.getElementById("epostInfo").innerHTML = "Vennligst skriv inn en gyldig e-postadresse!";
        return false;
    }
}
function gyldigInfoSjekker(film, antall, fornavn, etternavn, telefonnr, epost){
    let gyldig = true;
    if (innholdSjekk(film, antall, fornavn, etternavn, telefonnr, epost) === false){
        gyldig = false;
    }
    if (epostValidering(epost) === false){
        gyldig = false;
    }
    if (telefonnrValidering(telefonnr) === false){
        gyldig = false;
    }
    return gyldig;
}
function kjopBilett(){
    fjernManglerInnhold();
    let film = document.getElementById("filmer").value;
    let antall = document.getElementById("antall").value;
    let fornavn = document.getElementById("fornavn").value;
    let etternavn = document.getElementById("etternavn").value;
    let telefonnr = document.getElementById("telefonnr").value;
    let epost = document.getElementById("epost").value;
    if (gyldigInfoSjekker(film, antall, fornavn, etternavn, telefonnr, epost) === false){
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
    fjernInnhold();
}
function slettBiletter(){
    fjernManglerInnhold();
    filmer = [];
    document.getElementById("filmListe").innerText = "";
    fjernInnhold();
}

