// Acceso a las propiedades del objeto dos

// Escribe una función que tome un objeto con dos propiedades como argumento. Debería devolver el valor de la propiedad con la clave 'prop-2'. Sugerencia: es posible que desee utilizar el acceso de propiedad de corchetes

const myFunction = (obj) => {

return obj["prop-2"]
}

console.log(myFunction({  one: 1,  'prop-2': 2}))
console.log(myFunction({  'prop-2': 'two',  prop: 'test'}))

// RESUMEN
// obj["prop-2"];: Esta línea de código devuelve el valor de la propiedad con la clave "prop-2" del objeto obj. obj["prop-2"] accede a la propiedad utilizando la sintaxis de corchetes, donde la clave de la propiedad se especifica como una cadena entre comillas ("prop-2"). Se usa corchete en esta propiedad porque tiene un caracter especial 