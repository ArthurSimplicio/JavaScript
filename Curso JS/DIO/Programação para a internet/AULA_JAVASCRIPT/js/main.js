
function clicou(){
    document.getElementById('agradecimento').innerHTML = 'Obrigado por clicar!'
   /* var res = document.getElementById('agradecimento')
    res.innerHTML = 'Obrigado por clicar!'*/
}
function redirecionar(){
    //window.open('https://globalacademy.com')
    //window.location.href = 'https://globalacademy.com'
}
function trocar(elemento){
    //document.getElementById('mousemove').innerHTML = 'Você passou!'
    elemento.innerHTML = 'Você passou!'
}
function voltar(elemento){
    //document.getElementById('mousemove').innerHTML = 'Passe o mouse aqui'
    elemento.innerHTML = 'Passe o mouse aqui'
}
function load(){
    alert('Página carregada!')
}
function funcaoChange(elemento){
    console.log(elemento.value)
}

/*function soma(n1, n2){
    return n1 + n2
}
function validaIdade(idade){
    var validar
    if(idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar
}
var idade = prompt('Qual a sua idade?')
console.log(validaIdade(idade))
//alert(soma(5, 10))*/

/*var d = new Date
alert(d.getDate())
alert(d.getMonth()+1)
alert(d.getHours())
alert(d.getMinutes())*/

/*var count
for(count=0; count <=5; count++){
    alert(count)
}*/

/*var count = 0
while(count <=5){
    alert(count)
    //console.log(count)
    count++ 
}*/

/*var idade = prompt('Qual a sua idade?')
if(idade >= 18){
    alert('Maior de idade!')
}else{
    alert('Menor de idade!')
}*/

/*var frutas = [{nome:'maça', cor:'vermelha'}, {nome:'uva', cor:'roxa'}]
console.log(frutas)
alert(frutas[1].nome)*/

/*var fruta = {nome:'maça', cor:'vermelha'}
console.log(fruta.nome)
alert(fruta.cor)*/

//var lista = ['maça', 'pêra', 'laranja']
//lista.join(' - ') - transforma em string e bota divisões
//lista.length - quantos elementos tem na lista
//lista.pop() - tira um elemento
//lista.push('uva') - adiciona um elemento
//alert(lista[1])

/*var nome = 'Arthur'
var n1 = 5
var n2 = 3
var frase = 'Japão é o melhor time do mundo!'
//alert(nome + ' tem ' + idade + ' anos.')
//alert(idade + idade2)
console.log(nome)
console.log(n1 * n2)
console.log(frase.toUpperCase())
//alert(frase.replace('Japão', 'Brasil'))*/