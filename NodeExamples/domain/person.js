/*
 * exConsole.js
 * Created Date: Sunday, April 5th 2020, 1:20:32 pm
 * Author: Andrés Camilo Jiménez
 * Ejemplo creación clases en un archivo diferente en node.js
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

// Creación clase empleado por herencia

class Employee extends Person {
  constructor(name, lastName, status) {
    super(name, lastName);
    this.status = status;
  }
  get status() {
    return this._status;
  }
  set status(status) {
    return (this._status = status);
  }
}

exports.Person = Person;
exports.Employee = Employee;
