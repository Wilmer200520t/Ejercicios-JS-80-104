import hambgrmMenu from "./hamburguer.js";
import {shortCd,moviment} from "./movimiento.js";
import reloj from "./reloj.js";
import cuentaRegresiva from "./cuentaR.js";
import scrollUp from "./scroll.js";
import darkmode from "./darkmode.js";
import responsive from "./responsiveD.js";
import responsiveTester from "./pruba_respo.js";
import deteccionDispositivos from "./Detecion.js";
import estadoConexion from "./estadoConexion.js";
const d=document;

d.addEventListener('DOMContentLoaded',e=>{
    hambgrmMenu('.panel-btn','.panel','a');
    //cuenta regresiva
    cuentaRegresiva('2024-08-17T16:35:00','cuentaRegresiva','Cuenta regresiva terminada');

    //scroll top bottom
    scrollUp('.scrolltop');
    
    //reponsive desing
    responsive('youtube','(min-width:1024px)','<a href="https://www.youtube.com/embed/2HCPHNuTK0Q" target="_blank" rel="noopener noreferrer">Ver video</a>',`<iframe width="560" height="315" src="https://www.youtube.com/embed/2HCPHNuTK0Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`);
    responsive('gmaps','(min-width:1024px)','<a href="https://goo.gl/maps/bPd6TAzJ2WBz12sP6" target="_blank" rel="noopener noreferrer">Ver Mapa</a>',`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15610.074288449943!2d-77.04492145!3d-12.007777947354334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105cf0280a5e19d%3A0x66cdc63aa76d33c!2sGrand%20Terminal%20Terrestre%20Plaza%20Norte!5e0!3m2!1ses-419!2spe!4v1692465484901!5m2!1ses-419!2spe" width="560" height="315" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`);
    //resposive Tester
    responsiveTester('responsiveTester');
    //deteccion de dispositivos
    deteccionDispositivos('dispositivos');
    //estado conexion
    estadoConexion('estadoConexion');
});


reloj();

d.addEventListener('keydown',e=>{
    switch (e.key){
        case 'ArrowLeft':
        case 'ArrowDown':
        case 'ArrowRight':
        case 'ArrowUp':
            const $cajon=document.getElementById('cajon'),//valor
            $elemntstyle=window.getComputedStyle($cajon),//obtner todos los css
            $width=$elemntstyle.getPropertyValue('width').split('px')[0]-70, //especificar que dato, menos el ancho de la bolita
            $heigth=$elemntstyle.getPropertyValue('height').split('px')[0]-70; //
            e.preventDefault();
            moviment('ArrowLeft','ArrowDown','ArrowRight', 'ArrowUp',$width,$heigth,e);
        break;
    }   
});

d.addEventListener('keyup',e=>{
    switch (e.key){
        case 'a':
        case 'c':
        case 'p':
        console.log(e.altKey);
        shortCd('a','c','p',e);
        break;
    }
});


//dark mode sacarlo del DOMcontentLoad para que no tenga error
darkmode('.modedark');