const d=document,n=navigator;
export default function geolozalizacion(idlog,idlat,idrango){
    const $idlog = d.getElementById(idlog),
    $idlat=d.getElementById(idlat),
    $idran=d.getElementById(idrango),
    options={
        enableHighAccuracy: true,
        timeout:5000,
        maximumAge:0
    };

    const success=(position)=>{
        $idlat.textContent=position.coords.latitude;
        $idlog.textContent=position.coords.longitude;
        $idran.textContent=position.coords.accurracy;

        $idran.insertAdjacentHTML('afterend',
        `<a href="https://www.google.com/maps/@${position.coords.latitude},${position.coords.longitude},40z?entry=ttu">Ver google maps</a>`);
    };
    const error=(error)=>{
        $idlat.innerHTML=error.message;
        $idran.insertAdjacentHTML('afterend',
        `<a href="https://www.google.com/maps/place/Jockey+Plaza/@-12.0835675,-76.9825945,1372m/data=!3m1!1e3!4m6!3m5!1s0x9105c79f5dacafbf:0x2aecf92fd4325f0d!8m2!3d-12.0859487!4d-76.9760389!16s%2Fg%2F11fhws7zdk?entry=ttu">Ver google maps</a>`);
    };

    n.geolocation.getCurrentPosition(success, error,options);
}