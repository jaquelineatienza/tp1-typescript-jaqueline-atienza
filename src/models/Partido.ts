// - `Partido`: id, local, visitante, deporte, resultado opcional
//   - Validar que local ≠ visitante
//   - Jugar solo si los equipos cumplen con el deporte
//   - Métodos: `jugar()`, `toString()`

import type { IIdentificable } from "../interfaces/IIdentificable.js";
import { v4 as uuidv4 } from 'uuid';
import type { Equipo } from "./Equipo.js";
import { Resultado } from "./Resultado.js";



export class Partido implements IIdentificable {
    id: string;
    local: Equipo;
    visitante: Equipo;
    resultado?: string


    constructor(local: Equipo, visitante: Equipo,
        resultado?: string
    ) {
        this.local = local;
        this.visitante = visitante;
        this.id = uuidv4()
        if (resultado) {
            this.resultado = resultado
        }
    }
    jugar(resultado: Resultado): boolean {
        if (this.local == this.visitante) {
            console.log("El equipo local y visitante no pueden ser el mismo")
            return false

        }
        //validacion para que en ambos equipos haya la misma cantidad de jugadores
        if (this.local.cantidad !== this.visitante.cantidad) {
            console.log("La cantidad de jugadores debe ser la misma en ambos equipos")
            return false
        } else {
            //Demostracion  de quien gano el partido
            console.log(resultado)
            if (resultado.golesLocal > resultado.golesVisitante) {
                console.log("Ganaron los locales")
            } else if (resultado.golesVisitante > resultado.golesLocal) {
                console.log("Ganaron los visitantes")
            } else {
                console.log("Empate")
            }
            return true
        }

    }

    toString() {
        return this.id
    }
}


