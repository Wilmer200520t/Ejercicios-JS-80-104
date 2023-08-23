const d=document;

export default function deteccionDispositivos(id){
    let user=navigator.userAgent,
    plataforma=navigator.userAgentData.platform,
    navegador=navigator.userAgentData.brands[2].brand,
    $span=d.getElementById(id),
    tipo='No definido';
    
    let html=`
    <span>UserAgent:${user}</span><br>
    <span>Plataforma:${plataforma}</span><br>
    <span>navegador:${navegador}</span><br>
    `;
    if(plataforma==='Windows'){
        tipo='Computadora';
    }else if(plataforma==='Android'){
        tipo='Celular';
    }

    html+=`
    <span>Este objeto solo aparecen en ${tipo}</span><br>
    <span></span>
    `;

    $span.innerHTML=html;
}