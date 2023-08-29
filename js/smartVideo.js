const d = document;
export default function smartVideo(idVideo) {
  const $video = document.getElementById(idVideo);
  const ls=localStorage;

  const funcion = (entrada) => {
    entrada.forEach((entradas) => {
      if (entradas.isIntersecting) {
        //isIntersecting es si esta intersectando
        entradas.target.play();
        entradas.target.muted = ls.getItem('estadoSonidoVideo');
      } else {
        entradas.target.pause();
      }

      //listener de las ventanas
      window.addEventListener('visibilitychange',e=>{
        (document.visibilityState==='visible')?entradas.target.play():entradas.target.pause();
        }
        );;
    });
  };

  const observador = new IntersectionObserver(funcion, { threshold: 0.3 });

  observador.observe($video); //ejcutar el observer

  $video.addEventListener('volumechange', e=>{
    if(ls.getItem('estadoSonidoVideo')===null)ls.setItem('estadoSonidoVideo',false);
    if($video.getAttribute('muted')===true)ls.setItem('estadoSonidoVideo',true);
    if($video.getAttribute('muted')===false)ls.setItem('estadoSonidoVideo',false);
  });
}
