/*
 * exConsole.js
 * Created Date: Sunday, April 5th 2020, 1:15:43 pm
 * Author: Andrés Camilo Jiménez
 * Ejemplo uso de consola en node.js
 */

// Creación clase persona

class Person {
  constructor(name, lastName) {
    this.name = name;
    this.lastName = lastName;
  }
  // Note el uso de this._name y no de this.name, esto es para diferenciar el atributo del método
  set name(name) {
    this._name = name.charAt(0).toUpperCase() + name.slice(1);
  }
  set lastName(lastName) {
    this._lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
  }
  get name() {
    return this._name;
  }
  get lastName() {
    return this._lastName;
  }
}

// Creación objeto persona1

var persona1 = new Person('Andres', 'jimenez');

// Ejemplo imprimir el nombre y el apellido

console.log(
  `el nombre de la persona es: ${persona1.name}, y el apellido: ${persona1.lastName}`
);
