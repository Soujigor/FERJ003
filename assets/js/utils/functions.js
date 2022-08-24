export const toggleMenu = (target, className) => {
  const menuButtons = document.querySelectorAll(`.${target}`);

  // Vou alterar o próprio array - forEach
  // Vou gerar um novo array - map, find, filter, reduce
  // Programação Funcional (Functional Programming) - Imutabilidade, funções de primeira ordem.

  // const newArray = menuButtons.map(() => {

  // })

  if (menuButtons) {
    menuButtons.forEach((menu) => {
      menu.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        document.body.classList.toggle(className);
      });
    });
  }
};

export const linkItem = function (place, category) {
  const div = document.createElement("div");

  div.setAttribute("class", "link-item");
  div.innerHTML = `
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M24 33.1C27.4667 30.3 30.0833 27.6083 31.85 25.025C33.6167 22.4417 34.5 20.0333 34.5 17.8C34.5 15.8333 34.1417 14.1667 33.425 12.8C32.7083 11.4333 31.825 10.3167 30.775 9.45C29.725 8.58333 28.5833 7.95833 27.35 7.575C26.1167 7.19167 25 7 24 7C23 7 21.8833 7.19167 20.65 7.575C19.4167 7.95833 18.275 8.58333 17.225 9.45C16.175 10.3167 15.2917 11.4333 14.575 12.8C13.8583 14.1667 13.5 15.8333 13.5 17.8C13.5 20.0333 14.3833 22.4417 16.15 25.025C17.9167 27.6083 20.5333 30.3 24 33.1ZM24 36.9C19.4333 33.4667 16.0417 30.1833 13.825 27.05C11.6083 23.9167 10.5 20.8333 10.5 17.8C10.5 15.5333 10.9083 13.5417 11.725 11.825C12.5417 10.1083 13.6 8.66667 14.9 7.5C16.2 6.33333 17.65 5.45833 19.25 4.875C20.85 4.29167 22.4333 4 24 4C25.5667 4 27.15 4.29167 28.75 4.875C30.35 5.45833 31.8 6.33333 33.1 7.5C34.4 8.66667 35.4583 10.1083 36.275 11.825C37.0917 13.5417 37.5 15.5333 37.5 17.8C37.5 20.8333 36.3917 23.9167 34.175 27.05C31.9583 30.1833 28.5667 33.4667 24 36.9ZM24 21C24.9667 21 25.7917 20.6583 26.475 19.975C27.1583 19.2917 27.5 18.4667 27.5 17.5C27.5 16.5333 27.1583 15.7083 26.475 15.025C25.7917 14.3417 24.9667 14 24 14C23.0333 14 22.2083 14.3417 21.525 15.025C20.8417 15.7083 20.5 16.5333 20.5 17.5C20.5 18.4667 20.8417 19.2917 21.525 19.975C22.2083 20.6583 23.0333 21 24 21ZM10.5 44V41H37.5V44H10.5Z"
                fill="#F2B822" />
        /svg>

        <div class="location">
            <h3>${place.local}</h3>
            <h4>${category[place.categoria]}</h4>
        </div>
    `;

  return div;
};

export const slider = (reference = "", className, total) => {
  let prevItem = !reference ? 0 : Number(reference - 1);
  let lastItem = reference + total;

  const sectionHero = document.querySelector(".hero");

  if (Number(window.innerWidth) >= 768 && Number(window.innerWidth <= 1280)) {
    //tablet
    sectionHero.style.backgroundImage = `url('../assets/images/maracana_tablet_${reference}.webp')`;
  } else if (Number(window.innerWidth) > 1280) {
    sectionHero.style.backgroundImage = `url('../assets/images/maracana_desktop_${reference}.webp')`;
  } else {
    sectionHero.style.backgroundImage = `url('../assets/images/maracana_smartphone_${reference}.webp')`;
  }

  if (lastItem >= prevItem) {
    prevItem = lastItem - total;
  } else {
    prevItem = reference + total;
  }

  const items = document.querySelectorAll(".link-item");
  items.forEach((item) => {
    item.style.display = "none";
  });

  for (let x = prevItem; x <= lastItem - 1; x++) {
    if (document.querySelector(`.link-item:nth-child(${x})`))
      document.querySelector(`.link-item:nth-child(${x})`).style.display =
        "flex";
    if (x == reference) {
      document
        .querySelector(`.link-item:nth-child(${x})`)
        .classList.add("selected");
    }
  }
};
