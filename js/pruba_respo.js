const d=document;

export default function responsiveTester(idform){
    const $form=d.getElementById(idform);
    let tester;
    d.addEventListener('submit',(e)=>{
        if(e.target===$form){
            e.preventDefault();
            //abirir la ventana
            
            tester=window.open($form.direccion.value,'tester',`innerWidth=${$form.ancho.value},innerHeight=${$form.alto.value}`);
        }
    });

    d.addEventListener('click',e=>{
        if(e.target===$form.cerrar){
            tester.close();
        }
    })
}