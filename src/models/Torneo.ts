import type { IIdentificable } from "../interfaces/IIdentificable.js";
import type { Partido } from "./Partido.js";
import { generarId } from "../helpers/generar_id.js";


//clase de torneos
export class Torneo implements IIdentificable {
    id: string;
    nombre: string
    private partidos: Partido[]

    constructor(nombre: string) {
        this.id = generarId()
        this.nombre = nombre
        this.partidos = []
    }

    programarPartidos(partido: Partido) {
        this.partidos.push(partido)
    }
    listarPartidos(): Partido[] {
        console.log(this.partidos)
        return this.partidos
    }
    //busca los partidos por el id 
    buscarPartido(idBuscado: string): Partido | undefined {
        return this.partidos.find(partido =>
            partido.id === idBuscado
        );
    }

}
