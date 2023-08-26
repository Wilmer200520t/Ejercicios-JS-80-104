export default function generador(clslista,idbtn){
    const d=document,
    $lista=d.querySelectorAll(clslista);

    d.addEventListener("click",e=>{
        if(e.target.matches(idbtn)){
            alert('El ganador es : '+$lista[Math.floor(Math.random()*$lista.length)].textContent)
        }
    });

}