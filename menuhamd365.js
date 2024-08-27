const menu = document.querySelector('.menuhamD365');
const navegacion = document.querySelector('.navhamD365');
    
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
    const opcionmenu = document.querySelector('.navhamD365');
    const btnHamCerrar = document.createElement('p');
    const overlayham = document.createElement('div');
    overlayham.classList.add('pantalla-completaD365');
    const body = document.querySelector('body');
    if(document.querySelectorAll('.pantalla-completaD365').length > 0) return;
    body.appendChild(overlayham);
    btnHamCerrar.textContent ='x';
    btnHamCerrar.classList.add('btnHamCerrarD365');
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