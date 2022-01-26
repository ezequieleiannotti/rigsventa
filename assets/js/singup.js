// SING UP!

// VARIABLES GLOBALES

let nombre = document.querySelector("#nombre");
let usuario = document.querySelector("#username");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let confirm_password = document.querySelector("#confirm_password");
let singupButton = document.querySelector(".singup__button");

// MODAL => SINGUP => ON

let modalBg = document.querySelector(".modal-bg");
let modal = document.querySelector(".modal");
let modalClose = document.querySelector(".modal-close");
let singup_link = document.querySelector(".singup_link");

singupButton.addEventListener("click", modalOn);
modalClose.addEventListener("click", modalOff);

function validacion() {
  if (nombre.value == "") {
    location.reload();
  } else {
    localStorage.setItem("userUser", usuario.value);
  }
}

function modalOn() {
  validacion();

  modalBg.classList.add("bg-active");
  let datos = document.createElement("p");

  modal.appendChild(singup_link);
  modal.appendChild(datos);
  modal.innerHTML = `<p>Bienvenido <b>${nombre.value}</b>!</p>
                    <a href="${singup_link}">Ir al inicio</a>`;
  modal.appendChild(modalClose);
  modalClose.style.color = "black";
}

function modalOff() {
  modalBg.classList.remove("bg-active");
}
