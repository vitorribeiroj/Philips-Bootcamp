function calculadora() {
    const operacao = prompt('Escolha uma operação:\n 1 - Soma\n 2 - Subtração\n 3 - Multiplicação\n 4 - Divisão\n 5 - Potenciação')

    if (!Number(operacao) || operacao >= 6 || operacao <= 0) {
        alert("Entrada inválida!")
        calculadora()
    }
    else {
        let n1 = Number(prompt('Insira o primeiro valor: '))
        let n2 = Number(prompt('Insira o segundo valor: '))
        let resultado

        switch (Number(operacao)) {
            case 1:
                soma()
                break;
            case 2:
                subtracao();
                break
            case 3:
                multiplicacao();
                break;
            case 4:
                divisao();
                break;
            case 5:
                potenciacao();
                break
            default:
                break;

                function soma() {
                    resultado = n1 + n2
                    /* Uso de crases no alert para chamar as variáveis*/
                    alert(`${n1} + ${n2} = ${resultado}`)
                    novaOperacao()
                }

                function subtracao() {
                    resultado = n1 - n2
                    alert(`${n1} - ${n2} = ${resultado}`)
                    novaOperacao()
                }

                function multiplicacao() {
                    resultado = n1 * n2
                    alert(`${n1} * ${n2} = ${resultado}`)
                    novaOperacao()
                }

                function divisao() {
                    resultado = n1 / n2
                    alert(`${n1} / ${n2} = ${resultado}`)
                    novaOperacao()
                }

                function potenciacao() {
                    resultado = n1 ** n2
                    alert(`${n1} ^ ${n2} = ${resultado}`)
                    novaOperacao()
                }

                function novaOperacao() {
                    let novaOp = prompt("Deseja fazer outra operação?\n1 - Sim\n2 - Não")
                    if (novaOp == 1) {
                        calculadora()
                    }
                    else if (novaOp == 2) {
                        alert("Até mais!")
                    }
                    else {
                        alert("Opção inválida")
                        novaOperacao()
                    }

                }
        }
        /*         if (operacao == 1) {
                    soma()
                }
                else if (operacao == 2) {
                    subtracao()
                }
                else if (operacao == 3) {
                    multiplicacao()
                }
                else if (operacao == 4) {
                    divisao()
                }
                else if (operacao == 5) {
                    potenciacao()
                } */
    }




    /* else {
        alert('Entrada inválida')
    } */
}

calculadora();