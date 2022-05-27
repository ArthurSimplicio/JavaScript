
function converter(){
    var c = Number.parseFloat(window.prompt('Digite uma temperatura em °C (Celsius)'))
    var kelvin = (c + 273.15).toFixed(2)
    var far = ((c * 9/5) + 32).toFixed(2)
    var res = document.getElementById('res')
    res.innerHTML = (`<h1><strong>A temperatura de ${c}°C, coresponde a...</strong></h1><p>${kelvin}°K(Kelvin)</p><p>${far}°F(Fahrenheit)</p>`)

}