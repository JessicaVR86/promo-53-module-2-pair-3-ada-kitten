'use strict';
const btnsearch = document.querySelector ('.js_button-search')
  const searchdesc = document.querySelector ('.js_in_search_desc')
  const btnadd = document.querySelector('.js-btn-add');
  const newForm = document.querySelector('.new-form');
  const listElement = document.querySelector('.js-list');
  const raceSearchText = document.querySelector('.js_race_search')

const kittenData_1 = {
  image: 'https://dev.adalab.es/gato-siames.webp',
  name:'Anastacio',
  desc:'Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.',
  race: 'Siamés',
}  
const kittenData_2 = {
  image: 'https://dev.adalab.es/sphynx-gato.webp',
  name:'Fiona',
  desc:'Produce fascinación y curiosidad. Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.',
  race: 'Sphynx',
}  

const kittenData_3 = {
  image: 'https://dev.adalab.es/maine-coon-cat.webp',
  name:'Cielo',
  desc:'Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.' ,
  // race: 'Maine Coon',
} 


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
    
function renderKitten(kittenData) {
  

  const breedText = renderrace(kittenData.race);

    listElement.innerHTML +=
    `<li class="card">
<article>
    <img class="card_img" src="${kittenData.image}" />
    <h3 class="card_title">${kittenData.name}</h3>
    <h4 class="card_race">${breedText}</h4>
    <p class="card_description">${kittenData.desc}</p>
</article>
</li>`;
  }
  renderKitten(kittenData_1);
  renderKitten(kittenData_2);
  renderKitten(kittenData_3);
    btnadd.addEventListener('click', handleClickNewCatForm);
  ;
  
const filterKitten = (event) => {
    event.preventDefault();
    const descrSearchText = searchdesc.value;
    console.log(descrSearchText);
    
    listElement.innerHTML = '';
    if (kittenData_1.desc.includes(descrSearchText)) {
      renderKitten(kittenData_1);
    }
    if (kittenData_2.desc.includes(descrSearchText)) {
      renderKitten(kittenData_2);
    }
    if (kittenData_3.desc.includes(descrSearchText)) {
      renderKitten(kittenData_3);
    }
  };
btnsearch.addEventListener("click",filterKitten);


      // const kittenImage1 = 'https://dev.adalab.es/gato-siames.webp';
// const kittenName1 = "Anastacio";
// // const uppercasekitten1 = kittenName1.toUpperCase();
// const kittenRace1 = "Siamés";
// const kittenDesc1 =
//   "Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.";

// const kittenImage2 = "https://dev.adalab.es/sphynx-gato.webp";
// const kittenName2 = "Fiona";
// const kittenRace2 = "Sphynx";
//   const kittenDesc2 = "Produce fascinación y curiosidad. Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo."
// const kittenImage3 = "https://dev.adalab.es/maine-coon-cat.webp";
// const kittenName3 = "Cielo";
// const kittenRace3 = "Maine Coon";
//   const kittenDesc3 = "Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta."
// const kittenCard1 = document.querySelector('.list');

// const kittenOne  = `<li class="card">
// <article>
//     <img class="card_img" src="${kittenImage1}" alt="siames-cat" />
//     <h3 class="card_title">${kittenName1}</h3>
//     <h4 class="card_race">${kittenRace1}</h4>
//     <p class="card_description">${kittenDesc1}</p>
// </article>
// </li>`;

// const kittenTwo = `<li class="card">
// <img class="card_img" src="${kittenImage2}" alt="sphynx-cat" />
// <h3 class="card_title">${kittenName2}</h3>
// <h4 class="card_race">${kittenRace2}</h4>
// <p class="card_description">${kittenDesc2}</p>
// </li>`;
// const kittenThree = `<li class="card">
// <img class="card_img" src="${kittenImage3}" alt="maine-coon-cat" />
// <h3 class="card_title">${kittenName3}</h3>
// <h4 class="card_race">${kittenRace3}</h4>
// <p class="card_description">${kittenDesc3}
// </p>
// </li>`;
// listElement.innerHTML = kittenOne + kittenTwo + kittenThree;


// const btnadd = document.querySelector('.js-btn-add')
// const newForm = document.querySelector('.new-form')
// btnadd.addEventListener('click', handleClickNewCatForm);
  //     //  extraform.classList.toggle("collapsed");
  // });
  // btnsearch.addEventListener("click", (ev) => {
  //   ev.preventDefault();
  //   const descrSearchText = searchdesc.value;
  //   if (kittenDesc1.includes(descrSearchText)) {
  //   listElement.innerHTML = newkitten1
  // }
  //   if (kittenDesc2.includes(descrSearchText)) {
  //   listElement.innerHTML += kittenTwo
  // }
  // if (kittenDesc3.includes(descrSearchText)) {
  //   listElement.innerHTML += kittenThree
  // }
  // });