export default function webCam(id){
    const $video=document.getElementById(id);

    if(navigator.mediaDevices.getUserMedia()) {
        navigator.mediaDevices.getUserMedia({video:true,audio:true})
        .then(stream=>{
             $video.srcObject=stream;
             $video.play();
        })
        .catch(err=>{
            $video.insertAdjacentHTML('afterend',`<p><mark>${err}</p></mark>`)
            console.log(`Sucedio el siguiente error: ${err }`);
        });

    }
}