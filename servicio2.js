
const armas = [
  {
    nombre: "Glock 17",
    fabricante: "Glock",
    categoria: "Pistola semiautomática",
    calibre: "9 × 19 mm",
    referencia: 700,
    archivo: "Glock_17_(6825676904).jpg"
  },
  {
    nombre: "SIG Sauer P320 RX",
    fabricante: "SIG Sauer",
    categoria: "Pistola semiautomática",
    calibre: "9 × 19 mm",
    referencia: 900,
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/SIG-P320-RX.jpg/960px-SIG-P320-RX.jpg"
  },
  {
    nombre: "FN 509 MS",
    fabricante: "FN Herstal",
    categoria: "Pistola semiautomática",
    calibre: "9 × 19 mm",
    referencia: 1100,
    archivo: "Pistolet_semi-automatique_FN_509_MS.jpg"
  },
  {
    nombre: "M4 Carbine",
    fabricante: "Varios fabricantes",
    categoria: "Carabina",
    calibre: "5,56 × 45 mm",
    referencia: 1500,
    archivo: "PEO_M4_Carbine_RAS_M68_CCO.png"
  },
  {
    nombre: "Benelli M4",
    fabricante: "Benelli",
    categoria: "Escopeta semiautomática",
    calibre: "Calibre 12",
    referencia: 2000,
    archivo: "Benelli_m4_2.jpg"
  }
];

// Convierte nombres de archivos de Wikimedia
// en enlaces a las imágenes originales.
function obtenerImagen(arma) {
  if (arma.imagen) {
    return arma.imagen;
  }

  return "https://commons.wikimedia.org/wiki/Special:Redirect/file/"
    + encodeURIComponent(arma.archivo);
}

// Formato de dólares estadounidenses.
function formatoUSD(numero) {
  return numero.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
  });
}

// Generar las tarjetas.
const contenedor = document.getElementById("productos");

armas.forEach(arma => {
  const precioSimulado = arma.referencia * 0.70;

  const tarjeta = document.createElement("article");
  tarjeta.className = "tarjeta";

  tarjeta.innerHTML = `
    <img
      class="imagen-producto"
      src="${obtenerImagen(arma)}"
      alt="Fotografía de ${arma.nombre}"
      loading="lazy"
      referrerpolicy="no-referrer"
    >

    <div class="contenido">
      <span class="categoria">
        ${arma.categoria}
      </span>

      <h3>${arma.nombre}</h3>

      <div class="datos">
        <p>Fabricante: ${arma.fabricante}</p>
        <p>Calibre: ${arma.calibre}</p>
      </div>

      <p class="precio-anterior">
        Referencia ficticia:
        ${formatoUSD(arma.referencia)}
      </p>

      <p class="precio">
        ${formatoUSD(precioSimulado)}
      </p>

      <p class="aviso">
        Precio simulado para fines académicos.
      </p>
    </div>
  `;

  contenedor.appendChild(tarjeta);
});
