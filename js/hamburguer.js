export default function hambgrmMenu(pannelbtn,pannel,menulink){
    const d=document;
    d.addEventListener('click',e=>{
        if(e.target.matches(pannelbtn) || e.target.matches(`${pannelbtn} *`)){
            d.querySelector(pannel).classList.toggle('is-active');
            d.querySelector(pannelbtn).classList.toggle('is-active');
        }
        if(e.target.matches(menulink)){
            d.querySelector(pannel).classList.remove('is-active');
            d.querySelector(pannelbtn).classList.remove('is-active');
        }
    })
}