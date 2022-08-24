import { categoria, db } from "./utils/db.js";
import { linkItem, toggleMenu, slider } from "./utils/functions.js";

toggleMenu("toggleMenu", "open");
console.log(window.location.hash, "verificando o hashtag");

let titulo = "";
let destaque = "";
let subtitulo = "";

if (!window.location.hash) {
  titulo = db[0].titulo;
  destaque = db[0].destaque;
  subtitulo = db[0].subtitulo;
}

const domTitulo = document.querySelector("#titulo");
const domSubtitulo = document.querySelector("#titulo");
domTitulo.innerHtml = `${titulo} <span class="Rio">${destaque}</span>`;
domTitulo.innerHtml = subtitulo;

const links = document.querySelector(".links");
const sliderItemns = document.querySelector(".slider-items");
const arrow = links.querySelector(".arrow");

if (arrow) {
  db.forEach((item) => {
    //   links.insertBefore(linkItem(item, categoria), arrow);
    sliderItemns.appendChild(linkItem(item, categoria));
  });
}

let reference = 1;

/*
setInterval(() => {
    ++reference;
    slider(reference, ".slider-items", 4);
    if (document.querySelector(".arrow")) {
        document.querySelector(".arrow").style.display = "flex";
    }
    if(reference >=5) { reference = 1 }
}, 4000)

*/
if (document.querySelector(".left-arrow")) {
  document.querySelector(".left-arrow").addEventListener("click", (e) => {
    ++reference;
    slider(reference, ".slider-items", 3);

    if (document.querySelector(".arrow")) {
      document.querySelector(".arrow").style.display = "flex";
    }
  });
}
