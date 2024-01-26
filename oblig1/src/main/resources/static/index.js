let filmer = [];

function kjopBilett(){
    let bestilling = [];
    let film = document.getElementById("filmer").value;
    let antall = document.getElementById("antall").value;
    let fornavn = document.getElementById("fornavn").value;
    let etternavn = document.getElementById("etternavn").value;
    let telefonnr = document.getElementById("telefonnr").value;
    let epost = document.getElementById("epost").value;
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
    filmer = [];
    document.getElementById("filmListe").innerText = "";
    document.getElementById("antall").value = "";
    document.getElementById("fornavn").value = "";
    document.getElementById("etternavn").value = "";
    document.getElementById("telefonnr").value = "";
    document.getElementById("epost").value = "";
}

