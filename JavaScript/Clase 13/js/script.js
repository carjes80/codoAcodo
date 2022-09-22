
console.log("Comenzando con JavaScript")
// console.log(5 + 4)
// document.write("<h1 style='color:red'>Instroducción a JS, este texto fue escrito con JS</h1>")

// console.info("usando el console.info")
// console.warn("Es un warning. Usando el console.warn()")
// console.error("Un error en la consola. Usando el console.error()")
// console.info("El uso de la ',' es para concatenar, al igual que el símbolo +")

// // Acá empiezo con el tema de variables
// var edad
// console.log("edad antes de cargar la suma",edad)//acá estoy imprimiendo edad pero no tiene ningun valor
// edad = 37+1
// console.log("edad despues de sumar 37+1",edad)
// edad = true//se asigna edad como booleano
// console.log(edad)//las variables pueden cambiar de tipo de datos
// edad="carlos jesus"
// console.log(edad+1)//Muestra carlos jesus1 porque concatenó el valor de la variable con 1
// edad=edad+1
// console.log(typeof edad)
// console.log(edad)//las variables pueden cambiar de tipo de datos
// var nombre
// nombre=prompt("Ingrese su nombre")
// console.log(nombre)
// document.write("<h1 style='color:red'> Nombre =", nombre," <br>   de tipo: ",typeof nombre,"</h1>")

var display = "style:'display:none;'>Hola</div>"
function comision() {
    alert("Entró a la función")
    var usuario = prompt("Comisión")
    if (usuario == "22516") {
        display = "style:'display:block;'>Hola</div>'"
    }
    document.write("<div "+display+">")
    // console.log(display)
}
// alert()

