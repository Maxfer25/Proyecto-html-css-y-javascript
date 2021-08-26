let ubicacionprincipal = window.pageYOffset;
window.addEventListener("scroll", function(){
    let desplazamiento = window.pageYOffset;
    if(ubicacionprincipal=desplazamiento){
        document.getElementsByTagName("nav")[0].classList.add("show")
    }else{
        document.getElementsByTagName("nav")[0].classList.remove("show")
    }
    ubicacionprincipal = desplazamiento;
})
//menu
AOS.init();
let enlacesheader = document.querySelectorAll(".enlaces-header")[0];
let semaforo = true;

document.querySelectorAll(".hamburguer")[0].addEventListener("click",function(){
   
    
    enlacesheader.classList.toggle("menudos");
})