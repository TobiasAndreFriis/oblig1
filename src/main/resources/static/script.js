//Opprettelse av arrayet med bestillinger av filmer
let filmer = [];

//Printer tekst hvis det mangler innhold
function manglerInnhold(input){
    document.getElementById(input+"Info").innerHTML = "Må skrive noe inn i "+input;
}

//Fjerner teksten fra mangler info label i rød tekst
function fjernManglerInnhold(){
    document.getElementById("filmerInfo").innerHTML = "";
    document.getElementById("antallInfo").innerHTML = "";
    document.getElementById("fornavnInfo").innerHTML = "";
    document.getElementById("etternavnInfo").innerHTML = "";
    document.getElementById("telefonnrInfo").innerHTML = "";
    document.getElementById("epostInfo").innerHTML = "";
}

//Fjerner innhold i input bokser
function fjernInnhold(){
    document.getElementById("filmer").value = "";
    document.getElementById("antall").value = "";
    document.getElementById("fornavn").value = "";
    document.getElementById("etternavn").value = "";
    document.getElementById("telefonnr").value = "";
    document.getElementById("epost").value = "";
}

//Valideringer på input verdier
function fornavnValidering(fornavn){
    const gyldigNavn = /^[a-zA-Z+æ+ø+å+Æ+Ø+Å]+$/;
    if (fornavn.match(gyldigNavn)){
        return true;
    }
    else{
        document.getElementById("fornavnInfo").innerHTML = "Vennligst skriv inn et gyldig navn!";
        return false;
    }
}
function etternavnValidering(etternavn){
    const gyldigNavn = /^[a-åA-Å+æ+ø+å+Æ+Ø+Å]+$/;
    if (etternavn.match(gyldigNavn)){
        return true;
    }
    else{
        document.getElementById("etternavnInfo").innerHTML = "Vennligst skriv inn et gyldig navn!";
        return false;
    }
}
function telefonnrValidering(telefonnr){
    const gyldigTelefonnr = /^[0-9]{8}$/im;
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

//Kjører alle valideringer og sjekker om det mangler innhold
function innholdSjekk(film, antall, fornavn, etternavn, telefonnr, epost){
    let gyldig = true;
    if (film === ""){
        manglerInnhold("filmer");
        gyldig = false;
    }
    if (antall === ""){
        manglerInnhold("antall");
        gyldig = false;
    }
    if(fornavn === ""){
        manglerInnhold("fornavn");
        gyldig = false;
    }
    else if (fornavnValidering(fornavn) === false){
        gyldig = false;
    }
    if (etternavn === ""){
        manglerInnhold("etternavn");
        gyldig = false;
    }
    else if (etternavnValidering(etternavn) === false){
        gyldig = false;
    }
    if(telefonnr === ""){
        manglerInnhold("telefonnr");
        gyldig = false;
    }
    else if (telefonnrValidering(telefonnr) === false){
        gyldig = false;
    }
    if(epost === ""){
        manglerInnhold("epost");
        gyldig = false;
    }
    else if (epostValidering(epost) === false){
        gyldig = false;
    }
    return gyldig;
}


function kjopBillett(){
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
        li.innerText = filmer[i][0] + ", Antall: " + filmer[i][1] + ", Navn: " +
            filmer[i][2] + " " + filmer[i][3] + ", Telefonnr: " + filmer[i][4] + ", Epost: " + filmer[i][5];
        liste.appendChild(li);
    }
    fjernInnhold();
}
function slettBilletter(){
    fjernManglerInnhold();
    filmer = [];
    document.getElementById("filmListe").innerText = "";
    fjernInnhold();
}