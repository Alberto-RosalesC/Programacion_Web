var XO = "X";
var juegoTerminado = false;


document.getElementById("cont").addEventListener("click", function (e) {
  if (juegoTerminado) {
      return; // No hacer nada si el juego ha terminado
  }

  if (e.target.classList.contains("caja")) {
      if (e.target.innerText == "") {
          if (XO == "X") {
              XO = "O";
          } else {
              XO = "X";
          }
          e.target.innerText = XO;

          if (verificarGanador()) {
              swal("¡Ganador!", "¡Ganador: " + XO + "!", "success");
          }
      }
  }
});


document.getElementById("btnLim").addEventListener("click", function () {
    let cajas = document.getElementsByClassName("caja");
    for (const elemento of cajas) {
        elemento.innerText = "";
        XO = "X";
    }
    juegoTerminado = false; // Reiniciar el juego
    // Limpiar el mensaje del ganador
    document.getElementById("mensajeGanador").innerText = "";
});

// Función para verificar si alguien ha ganado
function verificarGanador() {
  const cajas = document.getElementsByClassName("caja");
  const combinacionesGanadoras = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
  ];

  for (const combinacion of combinacionesGanadoras) {
      const [a, b, c] = combinacion;
      if (
          cajas[a].innerText !== "" &&
          cajas[a].innerText === cajas[b].innerText &&
          cajas[a].innerText === cajas[c].innerText
      ) {
          juegoTerminado = true;
          return true;
      }
  }

  if ([...cajas].every(caja => caja.innerText !== "")) {
      juegoTerminado = true;
      swal("¡Empate!", "El juego ha terminado en empate.", "info");
  }

  return false;
}



