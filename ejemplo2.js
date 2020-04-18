var fecha = require('./obtenerFecha');

const persona = {
  nombre: 'Andres',
  apellido: 'Jimenez',
  edad: '32',
  getNombreCompleto: function () {
    return `${this.nombre} ${this.apellido}`;
  },
};

console.log(
  `El empleado ${persona.getNombreCompleto()} se creo en ${fecha.obtenerFecha()}`
);
