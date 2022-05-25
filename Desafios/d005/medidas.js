
function converter(){
    var dist = Number(window.prompt('Digite um número em metros[m]'))
   var km = (dist / 1000).toFixed(3)
   var hc = (km *10).toFixed(3)
   var da = (hc *10).toFixed(3)
   var dc = (dist * 10)
   var cm = (dc * 10)
   var mm = (cm *10)

    var res = document.getElementById('res')
    var t = document.getElementById('conversao')
    res.innerHTML = (`<h1>A distância de ${dist} metros, corresponde a...</h1>`)
    conversao.innerHTML = (`<p>${km} quilômetros</p> <p>${hc} hectômetros</p><p>${da} decâmetros</p><p>${dc} decimetros</p><p>${cm} centimetros</p><p>${mm} milímetros</p>`)
}

