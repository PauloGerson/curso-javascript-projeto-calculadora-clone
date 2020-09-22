class CalcController {

    constructor() {
        this._displayCalc = "0";
        this.currentDate;
        this.initialize();

    }

    initialize() {
        let displayCalEl = document.querySelector("#display");
        let dateEl = document.querySelector("#data");
        let timeEl = document.querySelector("#hora");

        displayCalEl.innerHTML = "55";


    }

    get displayCalc() {
        return this._displayCalc;

    }

    set displayCalc(valor) {
        this._displayCalc = valor;
    }

    get currentDate() {
        return this.currentDate;
    }

    set currentDate(valor) {
        this.currentDate = valor;
    }

}