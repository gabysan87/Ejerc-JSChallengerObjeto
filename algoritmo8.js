// Creación de objetos Javascript tres

// Escriba una función que tome dos matrices (a y b) como argumentos. Cree un objeto que tenga propiedades con las claves 'a' y los valores correspondientes 'b'. Devolver el objeto.

const myFunction = (a, b) => {

    // return a.reduce((obj, key, index) => ({ ...obj, [key]: b[index] }), {});
    // return a.reduce((acc, cur, i) => ({ ...acc, [cur]: b[i] }), {}); JS

    const obj = {};
    for (let i = 0; i < a.length; i++) {
       obj[a[i]] = b[i];
    }
    return obj;
  
   
}

console.log(myFunction(['a','b','c'],[1,2,3]))
console.log(myFunction(['w','x','y','z'],[10,9,5,2]))

// const myFunction: Define una función llamada myFunction usando la sintaxis de función de flecha.

// (a, b): Los parámetros a y b son los arrays que se pasan como argumentos a la función.

// =>: Es la sintaxis de la función de flecha que separa los parámetros de la función del cuerpo de la función.

// a.reduce((acc, cur, i) => ({ ...acc, [cur]: b[i] }), {}): Esto es el cuerpo de la función. Utiliza el método reduce en el array a para iterar sobre cada elemento.

// (acc, cur, i) => ({ ...acc, [cur]: b[i] }): La función de reducción se define con tres parámetros: acc (acumulador), cur (valor actual) e i (índice actual). En cada iteración, crea un nuevo objeto con una nueva propiedad cuya clave es el elemento cur del array a y cuyo valor es el elemento correspondiente b[i] del array b. Utiliza el operador spread (...) para copiar el objeto acumulador anterior y luego agrega la nueva propiedad.

// {}: Este es el valor inicial del acumulador pasado al método reduce, que es un objeto vacío.

// En resumen, la función myFunction toma dos arrays, a y b, y utiliza el método reduce para crear un objeto donde las claves son los elementos de a y los valores correspondientes son los elementos de b. El objeto resultante se devuelve como resultado de la función.