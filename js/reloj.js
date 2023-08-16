export default function reloj(){
    const d=document;
    document.addEventListener('click',e=>{
        if(e.target.matches('#inc-rel')){
            //desabilitar bonton desde js e.trahet.disabled=true;
            d.getElementById('inc-rel').classList.add('desactivar');
            relojin();
        }else if(e.target.matches('#det-rel')){
            d.getElementById('inc-rel').classList.remove('desactivar');
            parar(relojs);
            rel.textContent='00:00:00';
        }else if(e.target.matches('#inc-alm')){
            d.getElementById('inc-alm').classList.add('desactivar');
            alarma();
        }else if(e.target.matches('#det-alm')){
            d.getElementById('inc-alm').classList.remove('desactivar');
            pararal(alarm);
        }
    });
}

let relojs;
let alarm;
const rel=document.getElementById('reloj');

function relojin(){
    relojs=setInterval(()=>{
        let hora=new Date();
        console.log(hora.toLocaleTimeString());
        rel.textContent=hora.toLocaleTimeString();
    },1000);
}

const $aud=document.createElement('audio');
function alarma(){
   
    $aud.src="assets/alarm.mp3";
    alarm=setTimeout(()=>{
        $aud.play();
        
    },1000);
    console.log(alarm);
}
function parar(intervar){
    clearInterval(intervar);
}
function pararal(alarm){
    clearTimeout(alarm);
    $aud.pause();
    $aud.currentTime();
}