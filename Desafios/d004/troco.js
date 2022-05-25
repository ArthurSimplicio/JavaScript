
function Comprar(){
    var p = window.prompt('Que produto você está comprando?')
    var valor = Number(window.prompt(`Quanto custa ${p} que você está comprando?`))
    var carteira = Number(window.prompt(`Qual o valor você deu para pagar ${p}?`))
    var troco = carteira - valor
    var divida = valor - carteira
    if(carteira > valor){
        window.alert(`Você comprou ${p} que custou R$${valor}.\n Deu R$${carteira} em dinheiro e vai receber ${troco} de troco.\n Volte Sempre!`)
    }else{
        window.alert(`Você comprou ${p} que custou R$${valor}.\nDeu R$${carteira} em dinheiro, falta pagar R$${divida}.\nVolte Sempre!`)
    }

    
    


}