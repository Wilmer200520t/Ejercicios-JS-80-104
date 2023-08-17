 export default function cuentaRegresiva(fecha,id,mensaje){
    //conversion a secnds
    let $span=document.getElementById(id);
    let fechalim=new Date(fecha).getTime();
    
 
    let countdown=setInterval(()=>{
        let fechaact=new Date().getTime();
        let fechafaltante=fechalim-fechaact;
        if(fechafaltante<=0){
            alert(mensaje);
            clearInterval(countdown);
        }else{
            let dias=Math.floor(fechafaltante/(1000*60*60*24)),
            horas=Math.floor(fechafaltante%(1000*60*60*24)/(1000*60*60)),
            minutos=Math.floor(fechafaltante%(1000*60*60)/(1000*60)),
            segundos=Math.floor(fechafaltante%(1000*60)/(1000));
            $span.textContent=`Faltan ${dias} dias ${horas} Horas ${minutos} minutos ${segundos} Segundos`;
        }
        
    },1000)
    
}
