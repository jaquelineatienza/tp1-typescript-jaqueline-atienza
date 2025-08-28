import type { IIdentificable } from "../interfaces/IIdentificable";
import { v4 as uuidv4 } from 'uuid';



export class Jugador implements IIdentificable {
    //id de tipo id 
    id: string;

    nombre: string
    posicion?: string
    edad: number

    constructor(nombre: string, edad: number, posicion?: string,) {
        this.nombre = nombre
        this.id = uuidv4()
        this.edad = edad
        if (posicion) {
            this.posicion = posicion
        }
    }
    toString() {
        return `Jugador:,${this.id}, ${this.nombre}, ${this.edad} años${this.posicion ? `, ${this.posicion}` : ''}`;
    }

}