const rentContainerExpand = document.querySelector('#rent-container-expand');

const rent = [
  {
    name: 'Propiedad en zona exclusiva de Pudahuel',
    src: '../assets/img/rent/',
    description: 'Se arrienda Propiedad en zona exclusiva en la comuna de Pudahuel',
    location: 'Av. Exclusiva N° 111',
    rooms: 3,
    cost: '$500.000',
    smoke: false,
    pets: true
  },
  {
    name: 'Zona aún más exclusiva, en Pudahuelation',
    src: '../assets/img/rent/',
    description:
      'Se arrienda propiedad en zona aún más exclusiva que la anterior.',
    location: 'Av. Mas Exclusiva N° 222',
    rooms: 5,
    cost: '$800.000',
    smoke: true,
    pets: true
  },
  {
    name: 'Propiedad en Santiago de Nueva Extremadura',
    src: '../assets/img/rent/',
    description: 'Se arrienda Propiedad en zona poniente de Santiago. Servicios a la puerta.',
    location: 'Av. Santiago N° 23434',
    rooms: 2,
    cost: '$600.000',
    smoke: true,
    pets: true
  },
  {
    name: 'Zona estratosféricamente exclusiva',
    src: '../assets/img/rent/',
    description: 'Se arrienda Propiedad en zona estratosféricamente exclusiva',
    location: 'Av. Demasiado Exclusiva N° 111',
    rooms: 3,
    cost: '$500.000',
    smoke: false,
    pets: true
  },
  {
    name: 'Se arrienda propiedad en Coquimbo',
    src: '../assets/img/rent/',
    description: 'Se arrienda propiedad en zona norte de Chile, región de Coquimbo',
    location: 'Av. Ya te la sabes N° 9326',
    rooms: 5,
    cost: '$700.000',
    smoke: false,
    pets: true
  },
  {
    name: 'Se arrienda propiedad Estados Unidos de Shile',
    src: '../assets/img/rent/',
    description: 'Se arrienda propiedad en Estados Unidos de Shile',
    location: 'Av. United States of Shile N° 11001',
    rooms: 3,
    cost: '$800.000',
    smoke: true,
    pets: false
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
  renderHouses(rent, rentContainerExpand);
};

init();
