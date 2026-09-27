/* ============ EDITA AQUÍ ============ */
var FOTOS   = [
  "archivos_video_10/img1.jpg",
  "archivos_video_10/img2.jpg",
  "archivos_video_10/img3.jpg",
  "archivos_video_10/img4.jpg",
  "archivos_video_10/img5.jpg",
  "archivos_video_10/img6.jpg",
  "archivos_video_10/img7.jpg",
];
/* ==================================== */


/* Aparición escalonada: cada bloque entra un poco después del anterior */
document.querySelectorAll("#main > .rev").forEach(function(el, i){ el.style.setProperty("--i", i); });

/* Carrusel */
var pista = document.getElementById("pista"), puntos = document.getElementById("puntos");
var lista = FOTOS.length ? FOTOS : ["", "", ""];
lista.forEach(function(src, i){
  var s = document.createElement("div"); s.className = "slide";
  if (src) { var im = new Image(); im.src = src; im.alt = "Foto " + (i+1); im.draggable = false; s.appendChild(im); }
  else { s.innerHTML = '<span class="ph">Agrega tus fotos en la lista FOTOS 📷</span>'; }
  pista.appendChild(s);
  puntos.appendChild(document.createElement("i"));
});
function actual(){ return Math.round(pista.scrollLeft / pista.clientWidth); }
function marcar(){ var a = actual(); [].forEach.call(puntos.children, function(p, i){ p.classList.toggle("on", i === a); }); }
function ir(n){ n = Math.max(0, Math.min(lista.length - 1, n)); pista.scrollTo({left: n * pista.clientWidth}); }
pista.addEventListener("scroll", marcar);
document.getElementById("izq").onclick = function(){ ir(actual() - 1); };
document.getElementById("der").onclick = function(){ ir(actual() + 1); };
marcar();

var musica = document.getElementById("musica");
var musicaActiva = true;
musica.play().catch(function(){ musicaActiva = false; });
document.addEventListener("click", function(event){
  if (event.target.closest(".btn")) {
    musica.pause();
    musicaActiva = false;
    return;
  }
  if (musicaActiva) return;
  musicaActiva = true;
  musica.play().catch(function(){ musicaActiva = false; });
});
