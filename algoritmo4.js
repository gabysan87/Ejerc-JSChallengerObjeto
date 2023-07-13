// Comprobar si la propiedad existe en el objeto

// Escribe una función que tome un objeto (a) y una cadena (b) como argumento. Retorna verdadero si el objeto tiene una propiedad con la clave 'b'. Devuelve false en caso contrario. Consejo: el caso de prueba 3 es un poco complicado porque el valor de la propiedad 'z' no está definido. Pero la propiedad en sí existe.

const myFunction = (a, b) => {

return b in a
// return typeof a !== 'undefined' && a.hasOwnProperty(b)
}

console.log(myFunction({a:1,b:2,c:3},'b'))
console.log(myFunction({x:'a',y:'b',z:'c'},'a'))
console.log(myFunction({x:'a',y:'b',z:undefined},'z'))

// Interpretacion-1:
// b in a;: Esta línea de código verifica si la clave b está presente en el objeto a. El operador in se utiliza para comprobar si una propiedad existe en un objeto. Devolverá true si la clave está presente en el objeto y false en caso contrario.

// En resumen, la función myFunction toma un objeto (a) y una clave (b), y devuelve un valor booleano que indica si la clave b está presente en el objeto a.


// Interpretación-2:
// typeof a !== 'undefined' && a.hasOwnProperty(b);: Esta línea de código realiza dos verificaciones:

// typeof a !== 'undefined' verifica si a no es indefinido. Esto evita errores si a no está definido o si se pasa como undefined.

// a.hasOwnProperty(b) verifica si el objeto a tiene la propiedad b. El método hasOwnProperty() se utiliza para comprobar si un objeto tiene una propiedad específica. Devolverá true si el objeto tiene la propiedad b y false en caso contrario.

// La expresión typeof a !== 'undefined' && a.hasOwnProperty(b) devuelve true si a no es indefinido y tiene la propiedad b, y devuelve false en caso contrario.
