// Importando los métodos de api.js
import { getHamburger, getHamburgerById, updateHamburger, deleteHamburger, getHamburger } from './api.js';

// Traer las hamburguesas y crear cada una en la página principal
document.addEventListener('DOMContentLoaded', async () => {
  const HamburgerList = document.getElementById('Hamburger-list');

  const Hamburger = await getHamburger();
    HamburgerList.innerHTML = Hamburger.map(Hamburger => `
      <div class="col-xs-12 col-sm-6 col-md-3 card">
        <img class="card-img-top" src="${Hamburger.imgUrl}">
        <div class="card-body d-flex flex-column justify-content-end">
          <h5 class="card-title">${Hamburger.name}</h5>
          <p class="card-text">${new Intl.NumberFormat('en-ES', { style: 'currency', currency: 'USD' }).format(product.price)}</p>
          <a onclick="viewProduct(${Hamburger.id})" class="btn btn-primary">Ver más</a>
        </div>
      </div>
    `).join('');
});

// Crear la vista de detalles para cada Hamburguesas al dar click en el boton ver más
window.viewHamburger = async (id) => {
  const Hamburger = await getHamburgerById(id);
  const HamburgerDetails = `
    <div class="col">
      <img class="img-fluid" src="${Hamburger.imgUrl}">
      <h3>${Hamburger.name}</h3>
      <p>${Hamburger.description}</p>
      <p>Precio: ${new Intl.NumberFormat('en-ES', { style: 'currency', currency: 'USD' }).format(Hamburger.price)}</p>
      <button class="btn btn-warning" onclick="enableEdit(${Hamburger.id})">Editar</button>
      <button class="btn btn-danger" onclick="deleteProduct(${Hamburger.id})">Eliminar</button>
    </div>
    `;
  document.getElementById('Hamburger-list').innerHTML = HamburgerDetails;
};

// Habilitamos el formulario para editar cada uno de las Hamburguesas
window.enableEdit = async (id) => {
  const Hamburger = await getHamburgerById(id);
  const editForm = `
    <div class="row gap-3">
      <input type="text" id="name" value="${Hamburger.name}">
      <textarea id="description">${Hamburger.description}</textarea>
      <input type="number" id="price" value="${Hamburger.price}">
      <input type="text" id="imgUrl" value="${Hamburger.imgUrl}">
      <button class="btn btn-success" onclick="saveEdit(${id})">Guardar</button>
    </div>
    `;
  document.getElementById('Hamburger-list').innerHTML = editForm;
};

// Guardamos la nueva información en nuestra base de datos
window.saveEdit = async (id) => {
  const updatedHamburger = {
    name: document.getElementById('name').value,
    description: document.getElementById('description').value,
    price: parseFloat(document.getElementById('price').value),
    imgUrl: document.getElementById('imgUrl').value
  };
  await updateHamburger(id, updatedHamburger);
  location.reload(); // Recarga la página para ver los cambios
};

// Función para borrar la Hamburguesa seleccionada
window.deleteHamburger = async (id) => {
  await deleteHamburger(id);
  location.reload(); // Recarga la página para ver los cambios
};
