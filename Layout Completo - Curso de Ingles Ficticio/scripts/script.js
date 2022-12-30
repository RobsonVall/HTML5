var slideAtual = 1;
var slideMax = 3;
var slideTemp = 5000;

function troca() {
    document.getElementById("banner1").style.visibility = "hidden"
    document.getElementById("banner2").style.visibility = "hidden"
    document.getElementById("banner3").style.visibility = "hidden"

    document.getElementById("banner" + slideAtual).style.visibility = "visible"

    slideAtual++

    if(slideAtual > slideMax){
        slideAtual = 1
    }
}

function slider() {
    document.getElementById("banner1").style.visibility = "visible"
    document.getElementById("banner2").style.visibility = "hidden"
    document.getElementById("banner3").style.visibility = "hidden"

    slideAtual++

    let slideTimer = setInterval(troca, slideTemp)
    
}

