export default function darkmode(btn){
    const d=document,
    btnn=d.querySelector(btn),
    body=d.querySelector('body'),
    img=d.getElementById('theme-icon');
    const sun = "https://www.uplooder.net/img/image/55/7aa9993fc291bc170abea048589896cf/sun.svg";
    const moon = "https://www.uplooder.net/img/image/2/addf703a24a12d030968858e0879b11e/moon.svg"
    btnn.addEventListener('click',e=>{
        let estado=img.getAttribute('src');
        body.classList.toggle('oscuro');//agregar tema oscuro al body
        if(estado===sun){
            img.setAttribute('src',moon);//imagen de sol
            btnn.classList.remove('osucrobtn');//cambiar tema de btn
        }else if(estado===moon){
            img.setAttribute('src',sun);//imagen de luna
            btnn.classList.add('osucrobtn');
        }
        
    });
}