export function moviment(xred,yred,xplus, yplus,anch ,alt,e){
    const $pelt=document.getElementById('pelota'),
    $elmnt=window.getComputedStyle($pelt);
    let $posy=$elmnt.getPropertyValue('transform').split(',')[5].split(')')[0],
    $posx=$elmnt.getPropertyValue('transform').split(',')[4];
    if(e.key.match(xred)){
        if($posx>0){
            $pelt.style.setProperty('transform', `matrix(1, 0, 0, 1, ${$posx-10}, ${$posy})`);
        }
    }else if(e.key.match(xplus)){

        if($posx<anch){
            $pelt.style.setProperty('transform', `matrix(1, 0, 0, 1, ${Number($posx)+10}, ${$posy})`);
        }
    }else if(e.key.match(yred)){

        if($posy<alt){
            $pelt.style.setProperty('transform', `matrix(1, 0, 0, 1, ${$posx}, ${Number($posy)+10})`);
        }
    }else if(e.key.match(yplus)){

        if($posy>0){
            $pelt.style.setProperty('transform', `matrix(1, 0, 0, 1, ${$posx}, ${Number($posy)-10})`);
        }
    }
};

export function shortCd(a,c,p,e){
    if(e.key==='a' && e.altKey){
        alert('Esto es una alerta');
    }else if(e.key==='p' && e.altKey){
        prompt('Esto es un prompt');
    }else if(e.key==='c' && e.altKey){
        confirm('Esto es una confirm');
    }
}

