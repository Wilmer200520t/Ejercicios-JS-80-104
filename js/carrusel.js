const d=document;  

export default function slider(){
    const $next=d.querySelector('.slider-boton .siguiente'),
    $prev=d.querySelector('.slider-boton .anterior'),
    $slider=d.querySelectorAll('.slider-slide');

    let i=0;
    d.addEventListener('click',e=>{
        if(e.target===$prev){
            e.preventDefault();
            $slider[i].classList.remove('active');
            i--;
            if(i<0){
                i=$slider.length-1;

            }
            $slider[i].classList.add('active');
        }

        if(e.target===$next){
            e.preventDefault();
            $slider[i].classList.remove('active');
            i++;
            if(i>$slider.length-1){
                i=0;
            }
            $slider[i].classList.add('active');
        }
    })
}