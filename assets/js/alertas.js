$("#btn2").click(function () {
  /*Swal.fire({
        //error
        type: 'error',
        title: 'Error',
        text: '¡Algo salió mal!',        
    });*/
  Swal.fire({
    type: "success",
    title: "Éxito",
    text: "¡Perfecto!",
  });
});
$("#btn3").click(function () {
  Swal.fire({
    imageUrl:
      "https://cdn-3.expansion.mx/dims4/default/9d9025f/2147483647/strip/true/crop/1254x836+0+0/resize/1200x800!/format/webp/quality/90/?url=https%3A%2F%2Fcdn-3.expansion.mx%2Fa7%2F32%2F6482deb04f13bcf9ad29828a7317%2Fque-es-ethereum-precio.jpg",
    imageHeight: 412,
    imageAlt: "A tall image",
  });
});
$("#btn4").click(function () {
  Swal.fire({
    position: "top-start", //permite "top-end"
    type: "success",
    title: "Tu RIG se agrego al carrito",
    showConfirmButton: false,
    timer: 2000, //el tiempo que dura el mensaje en ms
  });
});
$("#btn5").click(function () {
  Swal.fire({
    title: "Tu RIG se agrego al carrito",
    animation: false,
    customClass: {
      popup: "animated bounceIn",
    },
  });
});

//cambiando el background
$("#btn6").click(function () {
  Swal.fire({
    title: "Tu RIG se agrego al carrito",
    width: 600,
    padding: "5em",
    background: "#fff url(/img/imagen_600x500.png)", //es el fondo de la caja de dialogo
    backdrop: `
        rgba(5, 5, 25, 0.4)
        url("https://sweetalert2.github.io/images/nyan-cat.gif")
        center left
        no-repeat
        `,
  });
});
let timerInterval;
$("#btn7").click(function () {
  Swal.fire({
    title: "Tu RIG se agrego al carrito",
    html: "Cerrare la ventana en <strong></strong> segundos.",
    timer: 2000, //tiempo del timer
    onBeforeOpen: () => {
      Swal.showLoading();
      timerInterval = setInterval(() => {
        Swal.getContent().querySelector("strong").textContent =
          Swal.getTimerLeft();
      }, 100);
    },
    onClose: () => {
      clearInterval(timerInterval);
    },
  }).then((result) => {
    if (
      // Read more about handling dismissals
      result.dismiss === Swal.DismissReason.timer
    ) {
      console.log("Tiempo finalizado");
    }
  });
});
