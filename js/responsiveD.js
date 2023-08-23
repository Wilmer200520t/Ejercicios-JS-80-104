const d=document,
    w=window;

export default function responsive(id,dimension,mobilectn,desktopctn){
    let breakpoint=w.matchMedia(dimension);//comprobar si es verdarero o falso
    const responsiveds=(e)=>{
        if(e.matches){
            d.getElementById(id).innerHTML=desktopctn;
        }else{
            d.getElementById(id).innerHTML=mobilectn;
        }
        
    };  

    breakpoint.addEventListener("change",responsiveds);
    responsiveds(breakpoint);//ejecutar al cargar la page
}