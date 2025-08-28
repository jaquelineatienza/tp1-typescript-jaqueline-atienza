import { Equipo } from "./Equipo";
import { Deporte } from "./Deporte";



export class Basquet extends Deporte {
    constructor() {
        super("basquet", 5);

    }

    validar(equipo: Equipo): boolean {
        if (equipo.cantidad > this.maxEquipo) {
            console.log(`El equipo "${equipo.nombre}" excede el límite de ${this.maxEquipo} jugadores`);
            return false;
        } else if (equipo.cantidad < 4) {
            console.log("El numero minimo de integrantes para jugar es cuatro ")
            return false
        } else {
            return true
        }
    }

}