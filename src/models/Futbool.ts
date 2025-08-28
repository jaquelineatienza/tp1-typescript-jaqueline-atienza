
import { Equipo } from "./Equipo";
import { Deporte } from "./Deporte";


//clase futbol que implementa los metodos de la clase deporte 
export class Futbool extends Deporte {

    constructor() {
        super("futbool", 11);
    }

    //valida que los equipos no superen el limite maximo de jugadores 
    validar(equipo: Equipo): boolean {
        if (equipo.cantidad > this.maxEquipo) {
            console.log(`El equipo "${equipo.nombre}" excede el límite de ${this.maxEquipo} jugadores`);
            return false;
        } else if (equipo.cantidad < 7) {
            console.log("El numero minimo de integrantes para jugar es siete ")
            return false
        } else {
            return true
        }
    }

}