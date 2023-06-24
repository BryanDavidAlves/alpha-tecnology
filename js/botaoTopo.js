const btn = document.getElementById("btnTop");
function ocultar() {
    if (window.scrollY > 20) {
        btn.style.display = "flex"
    } else {
        btn.style.display = "none"
    }
}
ocultar()

document.addEventListener('scroll', ocultar)

function clickMenu() {
    if (itens.style.display == 'block' && bgColorJs.style.display == 'block') {
        itens.style.display = 'none'
        bgColorJs.style.display = 'none'
    } else {
        itens.style.display = 'block'
        bgColorJs.style.display = 'block'
    }
}

