document.getElementById("iniciar_regtro").addEventListener("click",register); 
document.getElementById("iniciar_sesion").addEventListener("click",iniciaSesion); 
window.addEventListener("resize", anchoSite);


var contenedor_registro_login = document.querySelector(".contenedor_registro-login");
var formulario_login = document.querySelector(".formulario_login");
var formulario_registro = document.querySelector(".formulario_registro");
var caja_login = document.querySelector(".caja_trasera-login");
var caja_registro = document.querySelector(".caja_trasera-registro");


function anchoSite(){
    if(window.innerWidth > 850){
        caja_login.style.display = "block";
        caja_registro.style.display ="block";
    }else{
        caja_registro.style.display = "block";
        caja_registro.style.opacity="1";
        caja_login.style.display="none";
        caja_login.style.display="block";
        contenedor_registro_login.style.left="0px";
    }
}

anchoSite();

function register(){
    if (window.innerWidth > 850){
        formulario_registro.style.display="block";
        contenedor_registro_login.style.left="410px";
        formulario_login.style.display = "none";
        caja_registro.style.opacity="0";
        caja_login.style.opacity="1";
    }else{
        formulario_registro.style.display="block";
        contenedor_registro_login.style.left="0px";
        formulario_login.style.display = "none";
        caja_registro.style.display="none";
        caja_login.style.display="block";
        caja_login.style.opacity="1";
    }
}

function iniciaSesion(){

    if (window.innerWidth > 850){
        formulario_registro.style.display="none";
        contenedor_registro_login.style.left="10px";
        formulario_login.style.display = "block";
        caja_registro.style.opacity="1";
        caja_login.style.opacity="0";
    }else{
        formulario_registro.style.display="none";
        contenedor_registro_login.style.left="0px";
        formulario_login.style.display = "block";
        caja_registro.style.display="block";
        caja_login.style.display="none";
    }
}