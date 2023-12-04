const check =document.getElementById("switch-label");
const cuerpo=document.getElementById("cuerpo");
const cabecera=document.getElementById("cabecera");
const p=document.getElementById("p");

inicio();
check.addEventListener("click",function(){
    cambio();
})

function inicio(){

     if(check.checked){
        cambio();
     }
    
}
function cambio(){    
    
    if(check.checked) {
        console.log("modo noche")
        modonoche();
        
    }else{
        console.log("modo dia")
        mododia();
    }
}

function modonoche(){
    cabecera.style.backgroundColor="black";
    cuerpo.style.backgroundColor="black";
    cabecera.style.color="yellow";
    cuerpo.style.color="yellow";
    p.style.color="white";
}
function mododia(){
    cabecera.style.backgroundColor="white";
    cuerpo.style.backgroundColor="white";
    cabecera.style.color="black";
    cuerpo.style.color="black";
    p.style.color="black";
}