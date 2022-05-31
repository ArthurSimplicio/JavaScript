var escolha = Number(prompt("Escolha uma operação:\n1 - Soma (+)\n2 - Subtração (-)\n3 - Multiplicação (*)\n4 - Divisão real (/)\n5 - Divisão inteira (%)\n6 - Potenciação (**)"))
let n1 = Number(prompt('Insira o primeiro valor:'))
let n2 = Number(prompt('Insira o segundo valor:'))
let resultado

if(!escolha || escolha >= 7){
    alert('erro - Operação inválida!')
    calculadora()
}else{
    function soma(){
        resultado = n1 + n2
     alert(`${n1} + ${n2} = ${resultado}`)
     novaOperaçao()
    }
    function subtração(){
        resultado = n1- n2
        alert(`${n1} - ${n2} = ${resultado}`)
        novaOperaçao()
    }
    function multiplicaçao(){
        resultado = n1 * n2
        alert(`${n1} * ${n2} = ${resultado}`)
        novaOperaçao()
    }
    function divisaoReal(){
        resultado = n1 / n2
        alert(`${n1} / ${n2} = ${resultado}`)
        novaOperaçao()
    }
    function divisaoInteira(){
        resultado = n1 % n2
        alert(`O resto da divisão entre ${n1} e ${n2} é igual a ${resultado}`)
        novaOperaçao()
    }
    function potenciaçao(){
        resultado = n1 ** n2
        alert(`${n1} elevado a ${n2} é igual a ${resultado}`)
        novaOperaçao()
    }
    
    function novaOperaçao(){
        let opçao = prompt('Deseja fazer outra oparação\n1 - Sim\n2 - Não')
        if (opçao == 1 ){
            calculadora()
        } else if(opçao == 2){
            alert('Até mais!')
        }else{
            alert('digite uma opçao válida!')
            novaOperaçao()
        }
    }
    
    if (escolha == 1){
        soma()
    }else if(escolha == 2){
        subtração()
    }else if(escolha == 3){
        multiplicaçao()
    }else if(escolha == 4){
        divisaoReal()
    }else if(escolha == 5) {
        divisaoInteira()
    }else if(escolha == 6){
        potenciaçao()
    }
}
calculadora()


