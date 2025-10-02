/* === FUNCIONES JAVASCRIPT === */
/* Función para compartir el enlace en móviles */
function compartirEnlace() {
  const url = window.location.href;
  const title = document.title || "Business Card";
  if (navigator.share) {
    navigator.share({
      title: title,
      url: url
    }).catch(() => {
      alert("No se pudo compartir el enlace.");
    });
  } else {
    // Fallback para desktop o navegadores sin soporte
    navigator.clipboard.writeText(url);
    alert("Enlace copiado al portapapeles: " + url);
  }
}

/* Función para mostrar los servicios */
// function mostrarServicios() {
//   alert("Servicios:\n\n• Desarrollo web\n• Móvil\n• ChatBots\n• Inteligencia Artificial\n• Automatización de Procesos\n• Digitalización\n• Otros");
// }

/* Función para agregar contacto - Compatible con móviles */
function agregarContacto() {
  const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:Yahaira S. Rosa Villafañe
N:Rosa Villafañe;Yahaira S.;;;
ORG:Plavica;
TITLE:Coordinadora de RR HH;
TEL;TYPE=CELL:787-940-5056
EMAIL:Yrosa@plavicapr.com
URL:https://HATechnologiesPR.github.io/YahairaRosaVillafane
NOTE: 
END:VCARD`;

  // Detectar si es un dispositivo móvil
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  
  if (isMobile) {
    // Para dispositivos móviles, crear un enlace temporal y hacer click
    const blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Yahaira_Rosa_Villafane_Contacto.vcf';
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    
    // Limpiar después de un breve delay
    setTimeout(() => {
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    }, 100);
  } else {
    // Para desktop, usar el método tradicional
    const blob = new Blob([vCardData], { type: 'text/vcard' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Yahaira_Rosa_Villafane_Contacto.vcf';
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }
}
