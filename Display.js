class Display {
    constructor(displayValorAnterior, displayValorActual) {
        this.displayValorActual = displayValorActual;
        this.displayValorAnterior = displayValorAnterior
        this.calculador = new Calculadora()
        this.tipoOperacion = undefined;
        this.ValorActual = '';
        this.ValorAnterior = '';
    }

    borrar() {
        this.ValorActual = this.ValorActual.toString().slice(0,-1);
        this.imprimirValores();
    }

    borrarTodo() {
        this.ValorActual = '';
        this.ValorAnterior = '';
        this.tipoOperacion = undefined;
        this.imprimirValores();
    }

    agregarNumero(numero) {
        if (numero === '.' && this.ValorActual.includes('.')) return 
        this.ValorActual = this.ValorActual.toString() + numero.toString();
        this.imprimirValores();
    }

    imprimirValores() {
        this.displayValorActual.textContent = this.ValorActual
        this.displayValorAnterior.textContent = this.ValorAnterior
    }
}