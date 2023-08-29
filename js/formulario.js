const d=document;

export default function contactFormValidacion(){
    const $form =d.querySelector('.contact-form');
    const $inputs=d.querySelectorAll('.contact-form [required]');
    
    $inputs.forEach(input=>{
        const $span=d.createElement('span');
        $span.id=input.classList[1];
        $span.textContent=input.title;
        $span.classList.add('contact-form-error','none');
        input.insertAdjacentElement('afterend',$span);
    });

    d.addEventListener('keyup',e=>{
        if(e.target.matches('.contact-form [required]')){
            let $inp=e.target,
            patron=$inp.pattern || $inp.dataset.pattern;
            if(patron){
                let regex= new RegExp(patron);
                console.log($inp.classList[1],!regex.exec($inp.value),patron,$inp.value);
                return !regex.exec($inp.value)
                ? d.getElementById($inp.classList[1]).classList.add('is-active')
                : d.getElementById($inp.classList[1]).classList.remove('is-active')
            }

            if(patron===undefined){
                return $inp.value===''
                ? d.getElementById($inp.classList[1]).classList.add('is-active')
                : d.getElementById($inp.classList[1]).classList.remove('is-active')
            }


        }
    });
}