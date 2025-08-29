

import { generarUsuariosAleatorios } from "./helpers/Ramdom.players.js";
import { Basquet } from "./models/Basquet.js";
import { Equipo } from "./models/Equipo.js";
import { Futbool } from "./models/Futbool.js";
import { Jugador } from "./models/Jugador.js";
import { Partido } from "./models/Partido.js";
import { Resultado } from "./models/Resultado.js";
import { Torneo } from "./models/Torneo.js";



//Funcion para crear los equipos
function agregarJugadores(equipo: Equipo) {
    for (let i = 0; i < usuariosBaloncesto.length; i++) {
        const usuario = usuariosBaloncesto[i];
        const jugador = new Jugador(usuario.nombre, usuario.edad);
        equipo.agregarJugador(jugador);
    }
}



//funcion para generar usuarios 
const usuariosBaloncesto = generarUsuariosAleatorios(5, 'Basquet');




//Equipo de Barbie
const equipo1 = new Equipo("Barbies")
agregarJugadores(equipo1)



//Equipo Brats
const equipo2 = new Equipo("Brats")
agregarJugadores(equipo2)


//Lista de jugadores
// console.log(equipo1.listarIntegrantes())
// console.log(equipo2.listarIntegrantes())

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

const equipo3 = new Equipo("Monster_High")
//Agregar Jugadores
agregarJugadores(equipo3)

//Equipo My little ponny

const equipo4 = new Equipo("My_little_ponny")
agregarJugadores(equipo4)

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





