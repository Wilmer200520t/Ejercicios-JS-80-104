export default function filtros(idinpt,clsFigure){
    const d=document,
    $input=d.getElementById(idinpt),
    $figuras=d.querySelectorAll(clsFigure);
    console.log($figuras)
    d.addEventListener('keyup',e=>{
        if(e.key==='Escape')e.target.value='';
        if(e.target.matches(idinpt)){
            $figuras.forEach(el=>{
                (el.textContent.toLowerCase().includes(e.target.value))
                ? el.classList.remove('filter')
                : el.classList.add('filter');
            });
        }
    
    });  
}