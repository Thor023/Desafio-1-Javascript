//Requerimiento 2 operaciones matematicas
//se crean las variables mayores a 0 1 y 2
var num1 = prompt("Ingrese el primer número mayor a 0");
var num2 = prompt("Ingrese el segundo número mayor a 0");
//se suman las variables y se guardan en una nueva
var suma = parseInt(num1)+parseInt(num2);
//se restan las variables y se guardan en una nueva
var resta = parseInt(num1)-parseInt(num2);
//se multiplican las variables y se guardan en una nueva
var multiplica = parseInt(num1)*parseInt(num2);
//se dividen las variables y se guardan en una nueva
var divide = parseInt(num1)/parseInt(num2);
//se calcula el modulo de las variables y se guardan en una nueva
var modulo = parseInt(num1)%parseInt(num2);
//Se muestran los resultados de las operaciones
document.write(" <h2>Resultados de Requerimiento 2 Matemáticas</h2>.<br> ");
document.write(" el resultado de sumar "+num1+" + "+num2+" es "+suma+".<br> ");
document.write(" el resultado de restar "+num1+" - "+num2+" es "+resta+".<br> ");
document.write(" el resultado de multiplicar "+num1+" * "+num2+"es "+multiplica+".<br> ");
document.write(" el resultado de dividir "+num1+" / "+num2+" es "+divide+". <br>");
document.write(" el resultado del modulo entre los numeros "+num1+" % "+num2+" es "+modulo+".<br> ");

//Fin de requerimiento 2

//Requerimiento 3 transformacion temperatura
//se crea la variable  de temperatura
var num1 = prompt("Ingrese la temperatura en Celsius para convertir a F° y K°");
//tomamos la constante
const kelvin = 273.15
const faren1 = 1.8
const faren2 = 32
//calculamos la transformación a Kelvin
var gradokelvin = parseInt(num1)+(kelvin)
//calculamos la transformación a Farenheit
var gradofaren = (parseInt(num1)*(faren1))+parseInt(faren2);
//mostramos resultado 
document.write(" <h2>Resultados de Requerimiento 3 Conversión T°</h2>.<br> ");
document.write(" La transformación de "+num1+"°C a Kelvin es "+gradokelvin+".<br>");
document.write(" La transformación de "+num1+"°C a Farenheit  es "+gradofaren+".<br>");

//Fin requerimiento 3

//Requerimiento 4

//Se crea la variable de dias 
var num1 = prompt("Ingrese la cantidad de días:");
//Se realizan los calculos de modulos correspondientes
var ano = Math.floor(parseInt(num1)/365) 
var semana = Math.floor( (parseInt(num1)%365)/7);
var dias = Math.floor((parseInt(num1)%365)%7)
//resultados
document.write(" <h2>Resultados de Requerimiento 4 Conversión Año/Semana/Día</h2>.<br> ");
document.write("Total de "+num1+" Dias es equivalente a "+ano+" Años, "+semana+" Semanas y "+dias+"días.");



//Fin requerimiento 4

//Requerimiento 5

//se crean las variables de 5 numeros

var num1 = prompt("Ingrese el primer número ");
var num2 = prompt("Ingrese el segundo número ");
var num3 = prompt("Ingrese el tercer número ");
var num4 = prompt("Ingrese el cuarto número ");
var num5 = prompt("Ingrese el quinto número ");
//sumamos el total de numeros ingresados
var suma = parseInt(num1)+parseInt(num2)+parseInt(num3)+parseInt(num4)+parseInt(num5)
var promedio = (parseInt(num1)+parseInt(num2)+parseInt(num3)+parseInt(num4)+parseInt(num5))/parseInt(5);
//mostramos el resultado de ambos
document.write(" <h2>Resultados de Requerimiento 5 Suma y Promedio</h2>.<br> ");
document.write(" La suma de los numeros "+num1+"+"+num2+"+"+num3+"+"+num4+"+"+num5+" es"+suma+".<br>");
document.write(" El promedio de los numeros "+num1+"+"+num2+"+"+num3+"+"+num4+"+"+num5+" es "+promedio+".<br>");

//Fin requerimiento 5



