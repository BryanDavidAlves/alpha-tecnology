const btn=document.getElementById("btnTop");
btn.addEventListener("click",function(){
    window.scrollTo(0,0)
});

function ocultar(){
    if(window.scrollY>20){
        btn.style.display="flex"
    }else{
        btn.style.display="none"
    }
}
ocultar()

document.addEventListener('scroll', ocultar)