export default function darkmode(btn){
    const d=document,
    $btnn=d.querySelector(btn),
    $body=d.querySelector('body'),
    $img=d.getElementById('theme-icon');
    const sun = "https://www.uplooder.net/img/image/55/7aa9993fc291bc170abea048589896cf/sun.svg";
    const moon = "https://www.uplooder.net/img/image/2/addf703a24a12d030968858e0879b11e/moon.svg"
    $btnn.addEventListener('click',e=>{
        let $estado=$img.getAttribute('src');
        if($estado===sun){
            lightmd();
        }else if($estado===moon){
            darktmd();
        }
        
    });
    //funcion dark mode 
    const lightmd=()=>{
        $body.classList.remove('oscuro');//agregar tema oscuro al body
        $img.setAttribute('src',moon);//imagen de sol
        $btnn.classList.remove('osucrobtn');//cambiar tema de btn
        lS.setItem('tema','light');
    };
    const darktmd=()=>{
        $body.classList.add('oscuro');//agregar tema oscuro al body
        $img.setAttribute('src',sun);//imagen de luna
        $btnn.classList.add('osucrobtn');
        lS.setItem('tema','dark');
    };
    //normalmente no se puede ejecutar un listener igual dentro de uno
    const lS=localStorage;
    d.addEventListener('DOMContentLoaded',e=>{
        if(lS.getItem('tema')===null)lS.setItem('tema','light');
        if (lS.getItem('tema')==='light')lightmd();
        if(lS.getItem('tema')==='dark')darktmd();

    });
}