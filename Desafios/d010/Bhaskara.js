function calcular(){
    var a = Number(window.prompt('Qual o valor de a?'))
    var b = Number(window.prompt('Qual o valor de b?'))
    var c = Number(window.prompt('Qual o valor de c?'))
    var res = document.getElementById('res')
    var delta = (b*b)-4*a*c
    res.innerHTML = `
        <h1><strong>Resolvendo Bhaskara</strong></h1><p>A equação atual é ${a}x<sup>2</sup> + ${b}x + ${c} = 0</p><p>O cálculo realizado será &Delta; = ${b}<sup>2</sup> - 4 . ${a} . ${c}</p><p>O valor calculado foi &Delta; = ${delta}</p>`
}