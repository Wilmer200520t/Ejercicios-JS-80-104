import hambgrmMenu from "./hamburguer.js";
import {shortCd,moviment} from "./movimiento.js";
import reloj from "./reloj.js";
import cuentaRegresiva from "./cuentaR.js";
const d=document;

d.addEventListener('DOMContentLoaded',e=>{
    hambgrmMenu('.panel-btn','.panel','a');
    //cuenta regresiva
    cuentaRegresiva('2023-08-17T16:30:00','cuentaRegresiva','Cuenta regresiva terminada');
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

//cuenta regresiva


