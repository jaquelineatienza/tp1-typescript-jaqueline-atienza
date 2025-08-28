export class Resultado {
    golesLocal: number;
    golesVisitante: number;

    constructor(golesLocal: number, golesVisitante: number) {
        this.golesLocal = golesLocal;
        this.golesVisitante = golesVisitante;
    }


    toString() {
        return console.log(`locales:${this.golesLocal} - visitantes:${this.golesVisitante}`);
    }
}