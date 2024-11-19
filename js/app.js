// Importar los metodos de appi.js

import { getHamburger, getHamburgerByID, updateHamburger, deleteHamburger } from "./api";

//traer todos los productos y mostrarlos en la pagina principal 

document.addEventListener("DOMContentLoaded", async () => {
    const Hamburgerlist = document.getElementById ("Hamburger-list");

    const Hamburger = await getHamburger();
Hamburgerlist.innerHTML = Hamburger.map(Hamburger => `
    <div class="col-xs-12 col-sm-6 col-md-3 card">
        <div class="card-body d-flex flex-column justify-content-end">
         <h5 class="card-title">${Hamburger.name}</h5>
         <p class="card-text">${Hamburger.price}</p>
         <a onclick="viewHamburger(${Hamburger.id})"class="btn btn-primary" >ver mas</a>
         </div>
         </div>
    `).join("");
});

