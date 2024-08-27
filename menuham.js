const menu = document.querySelector('.menuham');
const navegacion = document.querySelector('.navham');
    
document.addEventListener('DOMContentLoaded',()=>{
    eventos();

});

const eventos =() =>{
    menu.addEventListener('click',abreMenu);

}

const abreMenu =() => {
    navegacion.classList.remove('ocultar');
    botonCerrar();
}

const botonCerrar = () => { 
    const opcionmenu = document.querySelector('.navham');
    const btnHamCerrar = document.createElement('p');
    const overlayham = document.createElement('div');
    overlayham.classList.add('pantalla-completa');
    const body = document.querySelector('body');
    if(document.querySelectorAll('.pantalla-completa').length > 0) return;
    body.appendChild(overlayham);
    btnHamCerrar.textContent ='x';
    btnHamCerrar.classList.add('btnHamCerrar');
    navegacion.appendChild(btnHamCerrar);
    cerrarMenu(btnHamCerrar,overlayham,opcionmenu);
}


const cerrarMenu = (boton,overlayham,opcionmenu) => {
    boton.addEventListener('click',()=>{
        navegacion.classList.add('ocultar');
        overlayham.remove();
        boton.remove();
    });

    overlayham.onclick = function() {
        overlayham.remove();
        navegacion.classList.add('ocultar');
        boton.remove();
    }
    opcionmenu.onclick = function() {
        overlayham.remove();
        navegacion.classList.add('ocultar');
        boton.remove();
    }
    
}