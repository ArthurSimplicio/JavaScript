function verificar(){
    var pa = Number(window.prompt('Qual era o preço anterior do produto?'))
    var pat = Number(window.prompt('Qual é o preço atual do produto?'))
    var res = document.getElementById('res')
    var sub = pat - pa.toFixed(2)
    var ad = pa - pat.toFixed(2)
    var por = ((pat-pa)/pa*100)
    var por1 = ((pa-pat)/pat*100)
    if(pa < pat){
        res.innerHTML = `<h1><strong>Analisando os valores informados</strong></h1><p>O produto custava R$ ${pa.toFixed(2)} e agora custa R$ ${pat.toFixed(2)}.</p><p>Hoje o produto está mais caro.</p><p>O preço subiu R$ ${sub.toFixed(2)} em relação ao preço anterior.</p><p>Uma variação de ${por.toFixed(1)}% pra cima.</p>`
    }else{
        res.innerHTML = `<h1><strong>Analisando os valores informados</strong></h1><p>O produto custava R$ ${pa.toFixed(2)} e agora custa R$ ${pat.toFixed(2)}.</p><p>Hoje o produto está mais barato.</p><p>O preço caiu R$ ${ad.toFixed(2)} em relação ao preço anterior.</p><p>Uma variação de ${por1.toFixed(1)}% pra cima.</p>`  
    }
} 