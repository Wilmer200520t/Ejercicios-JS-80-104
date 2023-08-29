const d=document;
export default function scrollSpy(){
    const $seccion=d.querySelectorAll("section[data-scroll-spy]");
    const cb=(entries)=>{
        entries.forEach(entry=>{
            const id=entry.target.getAttribute("id");
            if(entry.isIntersecting){
                d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add('active');
            }else{
                d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove('active');
            }
        })  
    }
    const observador=new IntersectionObserver(cb,{
        //root
        //rootMargin:"-450px"
        threshold:[0.51,0.75] //si se ve mas del 51 % y el 75%
    })

    $seccion.forEach(el=>{observador.observe(el)});
}
