import { IIdentificable } from "../interfaces/IIdentificable"
import { Equipo } from "./Equipo"

export abstract class Deporte {
    nombre: string
    maxEquipo: number
    abstract validar(equipo: Equipo): void
    constructor(nombre: string, maxEquipo: number) {
        this.maxEquipo = maxEquipo,
            this.nombre = nombre

    }
}