class ContaBancaria {

    constructor(agencia, numero, tipo) {
        this.agencia = agencia
        this.numero = numero
        this.tipo = tipo
        this._saldo = 0
    }

    sacar(valor) {
        if (valor > this._saldo) {
            console.log('Saldo insuficiente')
        }
        else{
            this._saldo = this._saldo - valor
            console.log(`Operação realizada com sucesso\nNovo saldo: ${this._saldo}\n`)
        }
    }

    depositar(valor) {
        this._saldo = this._saldo + valor
        console.log('Operação realizada com sucesso\n')
        console.log(`Novo saldo: ${this._saldo}\n`)
    }

    set saldo(valor) {
        this._saldo = valor
    }

    get saldo() {
        return this._saldo
    }

}

class ContaCorrente extends ContaBancaria {

    constructor(agencia, numero, cartaoCredito) {
        super(agencia, numero)
        this.tipo = 'conta corrente'
        this._cartaoCredito = cartaoCredito
    }

    get cartaoCredito() {
        return this._cartaoCredito
    }

    set cartaoCredito(cartaoCredito) {
        this._cartaoCredito = cartaoCredito
    }

}

class ContaPoupanca extends ContaBancaria {

    constructor(agencia, numero) {
        super(agencia, numero)
        this.tipo = 'conta poupança'
    }

}

class ContaUniversitaria extends ContaBancaria {

    constructor(agencia, numero) {
        super(agencia, numero)
        this.tipo = 'conta universitária'
    }

    sacar(valor) {
        if (valor > 500) {
            console.log('Valor de saque acima do limite permitido')
        }
        else {
            super.sacar(valor)
        }
    }
}


let conta1 = new ContaCorrente(1234, 9999 - 1, false)

let conta2 = new ContaUniversitaria(1234, 9999 - 2)

console.log(`INFO CONTA CORRENTE:\nAgência: ${conta1.agencia}\nNúmero da conta: ${conta1.numero}\n`)

conta1.depositar(380)
conta1.depositar(220)
conta1.sacar(700)
conta1.sacar(400)

console.log(`\n\nINFO CONTA UNIVERSITÁRIA:\nAgência: ${conta2.agencia}\nNúmero da conta: ${conta2.numero}\n`)

conta2.depositar(470)
conta2.depositar(330)
conta2.sacar(600)
conta2.sacar(400)






