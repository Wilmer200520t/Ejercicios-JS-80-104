const d = document;
export default function estadoConexion(id) {
  const $mostrar = d.getElementById(id);
  let estado = navigator.onLine;
  if (!estado) {
    $mostrar.classList.add("desconectado");
    $mostrar.textContent = "Sin Internet";
    document.documentElement.scrollTop=0;
  } else if (estado) {
    if ($mostrar.classList.contains("desconectado")) {
      $mostrar.classList.remove("desconectado");
      $mostrar.classList.add("activo");
      $mostrar.textContent = "Conectado";
      document.documentElement.scrollTop=0;
      setTimeout((e) => {
        $mostrar.classList.remove("activo");
        document.documentElement.scrollTop=0;
      }, 1000);
    }
  }

}
