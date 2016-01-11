$bouton = document.getElementById("bouton");
$multiplicateur = document.getElementById("multiplicateur");
$affichage = document.getElementById("affichage");
$autoclick = document.getElementById("autoclick");

score = 0;
multiplicateur1 = 1;

var bouton = document.getElementById("bouton");

function mouseDown() {
    bouton.style.height = "195px";
}

function mouseUp() {
    bouton.style.height = "200px";
}

function afficherScore() {
    $affichage.innerHTML = "Votre score : " + score + " cookies";
}

function afficherMultiplicateur() {
    $multiplicateur.innerHTML = "Multiplicateur de score x" + multiplicateur1 + "(prix : " + prix() + ")";
}

function afficherPrixAutoclick(){
    $autoclick.innerHTML = "Acheter un autoclick pour " + prixAutoClick() + " cookies";
}

function clic() {
    score = score + multiplicateur1;
    afficherScore();
}

function prix() {
    return 5 * multiplicateur1 * multiplicateur1;
}

function prixAutoClick(){
    return 20;
}

function acheterMultiplicateur() {
    if (score >= prix()) {
        score = score - prix();
        multiplicateur1 = multiplicateur1 + 1;
        afficherMultiplicateur();
        afficherScore();
    } else {
        alert("Vous n'avez pas assez de cookies !");
    }
}

function acheterAutoclick() {
    if (score >= prixAutoClick()) {
        score = score - prixAutoClick();
        autoclicker();
    } else {
        alert("Votre score est insuffisant !");
    }
};

function autoclicker(){
     $stop = setInterval($bouton.onclick,1000);
 
}

$bouton.onclick = clic;
$multiplicateur.onclick = acheterMultiplicateur;
$autoclick.onclick = acheterAutoclick;
afficherScore();
afficherMultiplicateur();
afficherPrixAutoclick();