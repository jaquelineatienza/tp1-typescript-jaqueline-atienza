
import { Basquet } from "./models/Basquet.js";
import { Equipo } from "./models/Equipo.js";
import { Futbool } from "./models/Futbool.js";
import { Jugador } from "./models/Jugador.js";
import { Partido } from "./models/Partido.js";
import { Resultado } from "./models/Resultado.js";
import { Torneo } from "./models/Torneo.js";



const players = new Jugador("juan", 22)
const players2 = new Jugador("juan", 22)
const players3 = new Jugador("juan", 22)
const players4 = new Jugador("juan", 22)
const players5 = new Jugador("juan", 22)

//Equipo de Barbie

const equipo1 = new Equipo("Barbies")

equipo1.agregarJugador(players)
equipo1.agregarJugador(players2)
equipo1.agregarJugador(players3)
equipo1.agregarJugador(players4)
equipo1.agregarJugador(players5)

const player6 = new Jugador("juan", 22)
const player7 = new Jugador("juan", 22)
const player8 = new Jugador("juan", 22)
const player9 = new Jugador("juan", 22)
const player10 = new Jugador("juan", 22)

//Equipo Brats
const equipo2 = new Equipo("Brats")

equipo2.agregarJugador(player6)
equipo2.agregarJugador(player7)
equipo2.agregarJugador(player8)
equipo2.agregarJugador(player9)
equipo2.agregarJugador(player10)

//Lista de jugadores
console.log(equipo1.listarIntegrantes())
console.log(equipo2.listarIntegrantes())

console.log("----------------")
console.log("Juego de futbool")
console.log("----------------")

const futbol = new Futbool();
const partido = new Partido(equipo1, equipo2);
console.log("Locales", equipo1.nombre, "VS", "Visitantes", equipo2.nombre)
const equiposValidos = futbol.validar(equipo1) && futbol.validar(equipo2);
//creacion del torneo
const torneos = new Torneo("Pelea_Matel")


if (equiposValidos) {
    const resultado = new Resultado(7, 8);
    //mostreo de Resultados
    resultado.toString()
    // Jugar el partido
    partido.jugar(resultado);
}
// programacion y muestra de partidos

// torneos.programarPartidos(partido)
// torneos.listarPartidos()

console.log("----------------")
console.log("Juego de basquet")
console.log("----------------")

//equipo de MonsterHigh 
const player11 = new Jugador("juan", 22)
const player12 = new Jugador("juan", 22)
const player13 = new Jugador("juan", 22)
const player14 = new Jugador("juan", 22)

const equipo3 = new Equipo("Monster_High")


//Agregar Jugadores
equipo3.agregarJugador(player11)
equipo3.agregarJugador(player12)
equipo3.agregarJugador(player13)
equipo3.agregarJugador(player14)


//Equipo My little ponny
const player16 = new Jugador("juan", 22)
const player17 = new Jugador("juan", 22)
const player18 = new Jugador("juan", 22)
const player19 = new Jugador("juan", 22)
const player20 = new Jugador("juan", 22)

const equipo4 = new Equipo("My_little_ponny")

//Agregar Jugadores
equipo4.agregarJugador(player16)
equipo4.agregarJugador(player17)
equipo4.agregarJugador(player18)
// equipo4.agregarJugador(player19)
equipo4.agregarJugador(player20)



const basquet = new Basquet();


const equiposValidos2 = basquet.validar(equipo3) && basquet.validar(equipo4);

console.log("Locales", equipo3.nombre, "VS", "Visitantes", equipo4.nombre)
//creacion del torneo
const torneos2 = new Torneo("Pelea_Matel")

//creacion del partido
const partido2 = new Partido(equipo3, equipo4);


if (equiposValidos2) {
    const resultado = new Resultado(10, 8);

    // Jugar el partido
    const result = partido2.jugar(resultado);
    if (result === true) {
        resultado.toString()
    }
}




