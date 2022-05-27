function reajuste(){
    var nome = window.prompt('Qual o nome do funcionário?')
    var sal = Number( window.prompt(`Qual o salário de ${nome}?`))
    var por = Number(window.prompt(`O salário de ${nome} vai ser reajustado em quantos por cento?`))
    var acresc = (sal * por/100).toFixed(2)
    var nsal = (sal + (sal*por/100)).toFixed(2)
    var res = document.getElementById('res')
    res.innerHTML = `<h1><strong>${nome} recebeu um aumento salarial!</strong></h1><p>O salario era de R$${sal}.</p><p>Com um aumento de ${por}%, o salário vai aumentar R$${acresc} no prócimo mês.</p><p>Agora ${nome} vai começar a receber R$${nsal}.`
}