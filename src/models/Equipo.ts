import { ICompetidor } from "../interfaces/ICompetidor";
import { Jugador } from "./Jugador";

export class Equipo implements ICompetidor {

    nombre: string;
    private jugadores: Jugador[]
    constructor(name: string) {
        this.nombre = name
        this.jugadores = [];

    }
    agregarJugador(jugador: Jugador) {
        if (this.jugadores.find(player => jugador.id === player.id)) {
            throw new Error(" jugador ya registrado")
        }

        this.jugadores.push(jugador);
    }
    listarIntegrantes(): string[] {
        return this.jugadores.map(jugador => jugador.toString());
    }

    toString(): string {
        return `Equipo${this.nombre}`
    }

    get cantidad(): number {
        return this.jugadores.length;
    }
}
