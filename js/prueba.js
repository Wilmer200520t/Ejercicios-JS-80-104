let reloj;
let alarm;

function relojin(){
    //const rel=document.getElementById('reloj');
    
    
    reloj=setInterval(()=>{
        //rel.textContent=hora;
        let hora=new Date();
        console.log(hora.toLocaleTimeString());
    },1000);
}

function parar(intervar){
    clearInterval(intervar);
}

relojin();

setTimeout(()=>{
    parar(reloj);
},5000)