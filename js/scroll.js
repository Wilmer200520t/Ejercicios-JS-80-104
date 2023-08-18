const d=document,
    w=window;
export default function scrollUp(element){ 
    const $scrollBtn=document.querySelector(element);
    w.addEventListener("scroll",e=>{
        let top=w.pageXOffset||d.documentElement.scrollTop;
        if(top>=837){
            $scrollBtn.classList.remove('ocultar');
        }else{
            $scrollBtn.classList.add('ocultar');
        }
    });

    d.addEventListener("click",e=>{
        if(e.target.matches(element)){
            d.documentElement.scrollTop=0;
        }
    });
}