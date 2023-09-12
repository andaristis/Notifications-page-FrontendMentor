const notificaciones = document.querySelectorAll(".contenedor-notificacion")
const notificacion = document.querySelector(".contenedor-notificacion")
const contadorNotificaciones = document.querySelector(".contadorNotificaciones")
const all = document.querySelector(".all")


let contadorNoLeidas = 0;

notificaciones.forEach(function(notificacion) {
    notificacion.addEventListener("click", function() {
        notificacion.classList.toggle("no-leida");
    
        contadorNoLeidas = document.querySelectorAll(".contenedor-notificacion.no-leida").length;
        contadorNotificaciones.innerText = contadorNoLeidas
    });
})

all.addEventListener("click", function() {
    notificaciones.forEach(function(notificacion) {
        notificacion.classList.remove("no-leida")
    })
   contadorNoLeidas = 0
    contadorNotificaciones.innerText = contadorNoLeidas
})
