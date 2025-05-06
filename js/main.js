"use strict";
const btnsearch = document.querySelector(".js_button-search");
const searchdesc = document.querySelector(".js_in_search_desc");
const btnadd = document.querySelector(".js-btn-add");
const newForm = document.querySelector(".new-form");
const listElement = document.querySelector(".js-list");
const raceSearchText = document.querySelector(".js_race_search");
const addForm = document.querySelector(".form");

const kittenDataList = [
  {
    image: "https://dev.adalab.es/gato-siames.webp",
    name: "Anastacio",
    desc: "Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asia al menos hace 500 años, donde tuvo su origen muy posiblemente.",
    race: "Siamés",
  },

  {
    image: "https://dev.adalab.es/sphynx-gato.webp",
    name: "Fiona",
    desc: "Produce fascinación y curiosidad. Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.",
    race: "Sphynx",
  },
  {
    image: "https://dev.adalab.es/maine-coon-cat.webp",
    name: "Cielo",
    desc: "Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.",
    // race: 'Maine Coon',
  },
];

function showNewCatForm() {
  newForm.classList.remove("collapsed");
}

function hideNewCatForm() {
  newForm.classList.add("collapsed");
}

function handleClickNewCatForm(event) {
  if (newForm.classList.contains("collapsed")) {
    showNewCatForm();
  } else {
    hideNewCatForm();
  }
}

function renderrace(kittenrace) {
  let breedText;
  if (kittenrace === "" || kittenrace === undefined) {
    breedText = `Uy que despiste, no sabemos su raza`;
  } else {
    breedText = kittenrace;
  }

  return breedText;
}

// function renderKitten(kittenData) {
//   const breedText = renderrace(kittenData.race);

//  listElement.innerHTML += `
//    <li class="card">
//      <article>
//          <img class="card_img" src="${kittenData.image}" />
//          <h3 class="card_title">${kittenData.name.toUpperCase()}</h3>
//          <h4 class="card_race">${breedText}</h4>
//          <p class="card_description">${kittenData.desc}</p>
//      </article>
//    </li>`;
//}


//renderKittenList(kittenDataList);

//  ejercicio bucles

function renderKittenList(kittenData) {
  const breedText = renderrace(kittenData.race);
  const kittenItems =
   `<li class="card">
  <article>
      <img class="card_img" src="${kittenData.image}" />
      <h3 class="card_title">${kittenData.name.toUpperCase()}</h3>
      <h4 class="card_race">${breedText}</h4>
      <p class="card_description">${kittenData.desc}</p>
  </article>
</li>`;
return kittenItems;
};

listElement.innerHTML += kittenItems;


  renderKittenList(kittenDataList[0]);
  renderKittenList(kittenDataList[1]);
  renderKittenList(kittenDataList[2]);


  //Completa el código:
  //Vaciamos el innerHTML del <ul> de la página.
  //Iteramos sobre el listado de gatitos
  //Y por cada iteración pintamos un gatito.
  //utilizando la función renderKitten(kittenItem)


btnadd.addEventListener("click", handleClickNewCatForm);

const filterKitten = (event) => {
  event.preventDefault();
  const descrSearchText = searchdesc.value;

  listElement.innerHTML = "";
  if (kittenDataList[0].desc.includes(descrSearchText)) {
    renderKitten(kittenDataList[0]);
  }
  if (kittenDataList[1].desc.includes(descrSearchText)) {
    renderKitten(kittenDataList[1]);
  }
  if (kittenDataList[2].desc.includes(descrSearchText)) {
    renderKitten(kittenDataList[2]);
  }
};
btnsearch.addEventListener("click", filterKitten);

const buttonCancelForm = document.querySelector(".js-btn-cancel");
const cancelNewKitten = (event) => {
  addForm.innerHTML = addForm.innerHTML;
};
buttonCancelForm.addEventListener("click", cancelNewKitten);