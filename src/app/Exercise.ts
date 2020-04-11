export enum TipoEjercicio { Espalda = 0, bicep = 1, hombro = 2 };

export class Exercise {
    Te = 'Espalda';

    constructor(public tipo: TipoEjercicio, public nSets: number, public nReps: number) {
        if (tipo > 2 || tipo < 0) {
            this.tipo = 0;
        } else {
            switch (tipo) {
                case 0:
                    this.Te = 'Espalda';
                    break;
                case 1:
                    this.Te = 'Bicep';
                    break;
                case 2:
                    this.Te = 'Hombro';
                    break;
            }
        }
        if (nSets < 1) {
            this.nSets = 1;
        }
        if (nReps < 1) {
            this.nReps = 1;
        }
    }
    addSets(i: number) { this.nSets += i; }
    addReps(i: number) { this.nReps += i; }
    set Sets(i: number) {
        if (i > 0) { this.nSets = i; }
    }
    set Reps(i: number) {
        if (i > 0) { this.nReps = i; }
    }


}