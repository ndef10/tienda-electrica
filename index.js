console.log("Hello World!");

console.log("TIENDA ELECTRO");
console.log("=============");
console.log("1. Comprar");
console.log("2. Ver Orden");
console.log("3. Anular Orden");
console.log("4. Pagar Orden");
console.log("5. Dejar un comentario");
console.log("6. Hacer un reclamo");
console.log("7. Salir");

const readline = require("readline");
const { promisify } = require("util");

const captura = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const pregunta = promisify(captura.question).bind(captura);

let opcionUsuario = "";
let volverAPreguntar = true;

captura.question("Ingrese su nombre: ", async (respuesta) => {
  console.log("hola " + respuesta + " Ingrese una opcion del menu: ");
  while (volverAPreguntar) {
    let opcionSel = await pregunta("OPTION: ");
    console.log("Has seleccionado la opcion", opcionSel);

    if (["1", "2", "3", "4", "5"].includes(opcionSel)) {
      console.log("Opcion correcta");
      opcionUsuario = opcionSel;
      volverAPreguntar = false;
    } else {
      console.log("Opcion incorrecta, vuelva a intentarlo");
      volverAPregunar = true;
    }
  }
});
