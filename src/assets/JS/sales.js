const saleContainerExpand = document.querySelector('#sale-container-expand');

const sale = [
  {
    name: 'Se vende propiedad en Punta Arenas',
    src: '../assets/img/sale/',
    description: 'Se vende propiedad en Punta Arenas, zona de alto atractivo turístico y calor infernal',
    location: 'Av. Punta Arenas N° 11001',
    rooms: 3,
    cost: '$800.000',
    smoke: true,
    pets: false
  },
  {
    name: 'Se vende propiedad en lugar Aislado',
    src: '../assets/img/sale/',
    description: 'Se vende propiedad en zona sur de la región de Concepción. Locomoción cada 3 días',
    location: 'Av. Sin locomoción N° 9326',
    rooms: 5,
    cost: '$700.000',
    smoke: false,
    pets: true
  },
  {
    name: 'Propiedad en zona exclusiva cerca de supermercados.',
    src: '../assets/img/sale/',
    description: 'Se vende Propiedad en zona cerca de supermercados.',
    location: 'Av. Jumbo N° 111',
    rooms: 3,
    cost: '$500.000',
    smoke: false,
    pets: true
  },
  {
    name: 'Propiedad en la comuna de La Pintana, cerca de mar.',
    src: '../assets/img/sale/',
    description: 'Se vende Propiedad en la comuna de La Pintana, cerca de mar.',
    location: 'Av. Nemo N° 111',
    rooms: 3,
    cost: '$500.000',
    smoke: false,
    pets: true
  },
  {
    name: 'Se vende Propiedad en zona conflictiva',
    src: '../assets/img/sale/',
    description: 'Se vende Propiedad en zona conflictiva, llevan 5 días sin muertos.',
    location: 'Av.Mas-Exclusiva N° 222',
    rooms: 5,
    cost: '$800.000',
    smoke: true,
    pets: true
  },
  {
    name: 'Se vende Propiedad en toma',
    src: '../assets/img/sale/',
    description: 'Se vende Propiedad en zona sur de Santiago, en nueva toma regálamela',
    location: 'Av. sin vergüenza N° 23434',
    rooms: 2,
    cost: '$600.000',
    smoke: true,
    pets: true
  }
];

const renderHouses = (houses, container) => {
  houses.forEach((house, index) => {
    const { name, src, description, location, rooms, cost, smoke, pets } = house;
    const smokeColor = smoke ? 'limegreen' : 'red';
    const smokeText = smoke ? 'Permitido fumar' : 'No se permite fumar';
    const petsColor = pets ? 'limegreen' : 'red'; 
    const petsText = pets ? 'Permitido tener mascotas' : 'No se permiten mascotas';
  
    const houseCard = `
      <div class="houseCard">
        <div class='display-flex img-container'>
          <img src="${src}${index + 1}.png" alt="${name}">
        </div>
        <div class='flex-column text-card'>
          <h2>${name}</h2>
          <p>${description}</p>
          <div class='flex-column'>
            <div class='display-flex'>
              <i class="fas fa-map-marker-alt item-icon"></i>
              <p>${location}</p>
            </div>
            <div class='display-flex gap-1rem justify-between'>
              <div class='display-flex'>
                <i class="fas fa-bed item-icon"></i>
                <p>${rooms} Habitaciones</p>
              </div>
              <div class='display-flex'>
                <i class="fas fa-bath item-icon"></i>
                <p>1 Baño</p>
              </div>
            </div>
            <div class='display-flex'>
              <i class="fas fa-dollar-sign icon dollar"></i>
              <p>${cost}</p>
            </div>
            <div class='display-flex justify-start' style='color: ${smokeColor}'>
              <i class="fa-solid fa-ban-smoking icon"></i>
              <p>${smokeText}</p>
            </div>
            <div class='display-flex justify-start' style='color: ${petsColor}'>
              <i class="fa-solid fa-paw icon"></i>
              <p>${petsText}</p>
            </div>
          </div>
        </div>
      </div>
    `;
    container.insertAdjacentHTML('beforeend', houseCard);
  });
  
};

const init = async () => {
  renderHouses(sale, saleContainerExpand);
};

init();
