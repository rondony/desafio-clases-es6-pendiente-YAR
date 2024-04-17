import clientes from "./clases/clientes.js";
import impuestos from "./clases/impuestos.js";

let impuestosPedro = new impuestos(3000, 350);
let impuestosDaniel = new impuestos(5000, 650);

let Pedro = new clientes('Pedro', impuestosPedro)
let Daniel = new clientes('Daniel', impuestosDaniel)

console.log(Pedro.calcularImpuesto())
console.log(Daniel.calcularImpuesto())