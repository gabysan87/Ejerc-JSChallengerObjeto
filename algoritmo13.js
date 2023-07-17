// Combinar dos objetos con claves coincidentes

// Escribe una función que tome dos objetos como argumentos. Desafortunadamente, la propiedad 'b' en el segundo objeto tiene la clave incorrecta. Debería llamarse 'd' en su lugar. Combine ambos objetos y corrija el nombre de propiedad incorrecto. Devuelve el objeto resultante. Debe tener las propiedades 'a', 'b', 'c', 'd' y 'e'

const myFunction = (x, y) => {

    y['d'] = y['b'];
    delete y.b;
    return {...x, ...y}

//     const { b, ...rest } = y;
//   return { ...x, ...rest, d: b }; JS

}

console.log(myFunction({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 }))
console.log(myFunction({ a: 5, b: 4 }, { c: 3, b: 1, e: 2 }))

// Interpretacion: 
// Primero se cambio el nombre de la clase para reasignar uso el objeto y , luego eliminamos la propiedad que se modifique. Al final concatenamos los objetos x, y.
