'use strict';
const kittenImage1 = 'https://dev.adalab.es/gato-siames.webp';
const kittenName1 = "Anastacio";
// const uppercasekitten1 = kittenName1.toUpperCase();
const kittenRace1 = "Siamés";
const kittenDesc1 =
  "Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.";

const kittenImage2 = "https://dev.adalab.es/sphynx-gato.webp";
const kittenName2 = "Fiona";
const kittenRace2 = "Sphynx";
  const kittenDesc2 = "Produce fascinación y curiosidad. Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo."

const kittenImage3 = "https://dev.adalab.es/maine-coon-cat.webp";
const kittenName3 = "Cielo";
const kittenRace3 = "Maine Coon";
  const kittenDesc3 = "Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta."

const listElement = document.querySelector('.js-list');

const kittenCard1 = document.querySelector('.list');

const kittenOne  = `<li class="card">
<article>
    <img class="card_img" src="${kittenImage1}" alt="siames-cat" />
    <h3 class="card_title">${kittenName1}</h3>
    <h4 class="card_race">${kittenRace1}</h4>
    <p class="card_description">${kittenDesc1}</p>
</article>
</li>`;

const kittenTwo = `<li class="card">
<img class="card_img" src="${kittenImage2}" alt="sphynx-cat" />
<h3 class="card_title">${kittenName2}</h3>
<h4 class="card_race">${kittenRace2}</h4>
<p class="card_description">${kittenDesc2}</p>
</li>`;
const kittenThree = `<li class="card">
<img class="card_img" src="${kittenImage3}" alt="maine-coon-cat" />
<h3 class="card_title">${kittenName3}</h3>
<h4 class="card_race">${kittenRace3}</h4>
<p class="card_description">${kittenDesc3}
</p>
</li>`;
listElement.innerHTML = kittenOne + kittenTwo + kittenThree;


// const btnadd = document.querySelector('.js-btn-add')
// const newForm = document.querySelector('.new-form')
// btnadd.addEventListener('click', handleClickNewCatForm);
  //     //  extraform.classList.toggle("collapsed");
  // });

    const btnadd = document.querySelector('.js-btn-add');
    const newForm = document.querySelector('.new-form');
  
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
  
    btnadd.addEventListener('click', handleClickNewCatForm);
  ;
  const btnsearch = document.querySelector ('.js_button-search')
  const searchdesc = document.querySelector ('.js_in_search_desc')

  btnsearch.addEventListener("click", (ev) => {
    ev.preventDefault();
    const descrSearchText = searchdesc.value;
    if (kittenDesc1.includes(descrSearchText)) {
    listElement.innerHTML = newkitten1
  }
    if (kittenDesc2.includes(descrSearchText)) {
    listElement.innerHTML += kittenTwo
  }
  if (kittenDesc3.includes(descrSearchText)) {
    listElement.innerHTML += kittenThree
  }
  });

