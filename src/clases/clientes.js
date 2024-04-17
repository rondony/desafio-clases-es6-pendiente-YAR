export default class clientes {
    constructor(nombre, impuestos) {
        this._nombre = nombre;
        this.impuestos = impuestos;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(newNombre) {
        let nombreValue = String(newNombre)
        this._nombre = nombreValue;
    }
    // Se multiplica por el 21% porque es lo que pide el Ejercicio
    calcularImpuesto() {
        return (`El impuesto total a pagar de ${this._nombre} es: 
        ${(this.impuestos.montoBruto - this.impuestos.deducciones) * 0.21}
        `)
    }
}