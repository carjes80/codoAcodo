/*************** CONDICIONALES: IF ****************/
// var nota = 8
// console.log("Nota:", nota)
// // Condición (si nota es mayor o igual a 5)
// if (nota >= 5) {
//   console.log("¡Estoy aprobado!")
// }
// console.log("Sigue...")

/*************** CONDICIONALES: IF/ELSE ****************/
// var nota = 8
// console.log("He realizado mi examen. Mi resultado es el siguiente:")
// // Condición
// if (nota < 5) {
//   // Acción A (nota es menor que 5)
//   calificacion = "suspendido"
// } else {
//   // Acción B: Cualquier otro caso a A (nota es mayor o igual que 5)
//   calificacion = "aprobado"
// }
// console.log("Estoy", calificacion)

/*Otro ejemplo*/
// var num = parseInt(prompt("Ingrese un número: ", "")) //Pedimos un valor
// if (num > 0) {
//   alert("El número es positivo.")
// } else {
//     if(num==0){
//         alert("El numero es cero")
//     }
//     else{
//   alert("El número es negativo.")
// }}

/*************** OPERADOR TERNARIO ****************/
var nota = 4
console.log("He realizado mi examen. Mi resultado es el siguiente:")
// Operador ternario: (condición ? verdadero : falso)
var calificacion = nota < 5 ? "suspendido" : "aprobado"
console.log("Estoy", calificacion)

/*************** IF MULTIPLE ****************/
// var nota = 7
// console.log("He realizado mi examen.")
// // nota = parseInt(prompt("Ingrese su nota: ", "")) //Pedimos un valor

// // Condición
// if (nota < 5) {
//   calificacion = "Insuficiente"
// } else if (nota < 6) {
//   calificacion = "Suficiente"
// } else if (nota < 8) {
//   calificacion = "Bien"
// } else if (nota <= 9) {
//   calificacion = "Notable"
// } else {
//   calificacion = "Sobresaliente"
// }
// console.log("He obtenido un", calificacion)

/*Otro ejemplo*/
// var menu = prompt("Ingrese una opción \n 1: Abrir programa \n 2: Salir del programa \n 3: Otra opción \n ...etc.: ")
// if (menu == "1") {
//   alert("Bienvenido!")
// }
// else if (menu == "2") {
//   alert("Adiós!")
// }
// else if (menu == "3") {
//   alert("Opción 3")
// } 
// else {
//   alert("No ha ingresado una opción válida!")
// }

/*************** SWITCH ****************/
// var nota = -1
// console.log("He realizado mi examen. Mi resultado es el siguiente:")
// switch (nota) {
//   case 10:
//     calificacion = "Sobresaliente"
//     break
//   case 9:
//   case 8:
//     calificacion = "Notable"
//     break
//   case 7:
//   case 6:
//     calificacion = "Bien"
//     break
//   case 5:
//     calificacion = "Suficiente"
//     break
//   case 4:
//   case 3:
//   case 2:
//   case 1:
//   case 0:
//     calificacion = "Insuficiente"
//     break
//   default:
//     // Cualquier otro caso
//     calificacion = "Nota errónea"
//     break
// }
// console.log("Nota:", calificacion)