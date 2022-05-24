
function contar() {
    let ini = document.getElementById('in')
    let cont = document.getElementById('cont')
    let tab = document.getElementById('seltab')
    if (ini.value.length == 0) {
        window.alert = 'Por favor, digite um número!'
    //window.alert('[ERRO] faltam dados!')
 } else{
     
     let i = Number(ini.value)
     var c = 1
     tab.innerHTML= ''
     while (c <= 10){
         var item = document.createElement('option')
         item.text = `${i} x ${c} = ${i*c}`
         item.value = `tab${c}`
         tab.appendChild(item)
         c++
        }
     
    }
}