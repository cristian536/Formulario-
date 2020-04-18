/*
 * exConsole.js
 * Created Date: Sunday, April 5th 2020, 1:22:56 pm
 * Author: Andrés Camilo Jiménez
 * Uso de clases en un archivo diferente en node.js
 */

const person = require('./domain/person');

// Creación objeto persona1

var persona1 = new person.Person('Andres', 'jimenez');

// Creación objeto empleado1

var empleado1 = new person.Employee('camilo', 'alvarez', 'active');

// Ejemplo imprimir el nombre y el apellido

console.log(
  `el nombre de la persona es: ${persona1.name}, y el apellido: ${persona1.lastName}`
);

console.log(
  `el nombre del empleado es: ${empleado1.name}, y el apellido: ${empleado1.lastName}. Estado: ${empleado1.status}`
);
