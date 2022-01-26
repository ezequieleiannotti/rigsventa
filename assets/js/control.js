//Variables
const carrito = document.getElementById("carrito");
const rigs = document.getElementById("lista-rigs");
const listaRigs = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBtn = document.getElementById("vaciar-carrito");
const comprarCarrito = document.getElementById("Compra");
//Listeners
cargarEventListeners();

function cargarEventListeners() {
  //Cuando de presiona agregar carrito
  rigs.addEventListener("click", comprarRig);

  //Cuando se presiona X en rig del carrito
  carrito.addEventListener("click", eliminarRig);

  //Al presionar Vaciar carrito
  vaciarCarritoBtn.addEventListener("click", vaciarCarrito);

  //Al cargar DOM mostrar localStorage
  document.addEventListener("DOMContentLoaded", leerLocalStorage);
}

//Funciones

function comprarRig(e) {
  e.preventDefault();

  //Delegation agregar carrito
  if (e.target.classList.contains("agregar-carrito")) {
    const rig = e.target.parentElement.parentElement;
    //Enviar datos card elemento seleccionado
    leerDatosRig(rig);
  }
}

function leerDatosRig(rig) {
  const infoRig = {
    imagen: rig.querySelector("img").src,
    titulo: rig.querySelector("h4").textContent,
    precio: rig.querySelector(".precio span").textContent,
    id: rig.querySelector("a").getAttribute("data-id"),
  };

  insertarCarrito(infoRig);
}

//Mostrar rig seleccionado
function insertarCarrito(infoRig) {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td><img width="100" src="${infoRig.imagen}" /></td>
    <td>${infoRig.titulo}</td>
    <td>${infoRig.precio}</td>
    <td><a href="#" class="borrar-rig" data-id="${infoRig.id}">X<a/></td>
    `;

  listaRigs.appendChild(row);
  guardarRigLocalStorage(infoRig);
}

//Eliminar rig del carrito en el DOM
function eliminarRig(e) {
  e.preventDefault();

  let rig, rigId;
  if (e.target.classList.contains("borrar-rig")) {
    rig = e.target.parentElement.parentElement;
    rigId = rig.querySelector("a").getAttribute("data-id");
    e.target.parentElement.parentElement.remove();
  }
  eliminarRigLocalStorage(rigId);
}

//Eliminar todos los rigs del carrito en el DOM
function vaciarCarrito() {
  // innerHTML vs while
  while (listaRigs.firstChild) {
    // el sig pasa a ser el primero
    listaRigs.removeChild(listaRigs.firstChild);
  }

  //vaciar localStorage
  vaciarLocalStorage();

  return false;
}

//Almacenar rig del carrito en el localStorage

function guardarRigLocalStorage(rig) {
  let rigs;

  rigs = obtenerRigsLocalStorage();

  //rig seleccionado se agrega al arreglo vacio o al final de los elementos existentes
  rigs.push(rig);

  localStorage.setItem("rigs", JSON.stringify(rigs));
}

//Comprobar elementos en localStorage
function obtenerRigsLocalStorage() {
  let rigsLS;

  //comprobar si hay algo en localSotrage
  if (localStorage.getItem("rigs") === null) {
    rigsLS = [];
  } else {
    rigsLS = JSON.parse(localStorage.getItem("rigs"));
  }

  return rigsLS;
}

//Imprimir rigs de localStorage
function leerLocalStorage() {
  let rigsLS;

  rigsLS = obtenerRigsLocalStorage();

  rigsLS.forEach(function (rig) {
    //construir template
    const row = document.createElement("tr");
    row.innerHTML = `
        <td><img width="100" src="${rig.imagen}" /></td>
        <td>${rig.titulo}</td>
        <td>${rig.precio}</td>
        <td><a href="#" class="borrar-rig" data-id="${rig.id}">X<a/></td>
        `;

    listaRigs.appendChild(row);
  });
}

//Eliminar rig por el data-id en el localStorage
function eliminarRigLocalStorage(rigId) {
  let rigsLS;

  rigsLS = obtenerRigsLocalStorage();

  rigsLS.forEach(function (rigLS, index) {
    if (rigLS.id === rigId) {
      rigsLS.splice(index, 1);
    }
  });

  localStorage.setItem("rigs", JSON.stringify(rigsLS));
}

//Eliminar todos los rigs de localStorage
function vaciarLocalStorage() {
  localStorage.clear();
}

//finalizar la comprar
//terminar de comprar el carrito de

let compra = getElementById("Compra");
document.write(compra);
