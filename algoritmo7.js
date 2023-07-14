// Creando objetos Javascript dos

// Escriba una función que tome dos cadenas (a y b) como argumentos. Cree un objeto que tenga una propiedad con la clave 'a' y un valor de 'b'. Devolver el objeto.

const myFunction = (a, b) => {

return { [a]: b}

}

console.log(myFunction('a','b'))
console.log(myFunction('z','x'))
console.log(myFunction('b','w'))

// Resumen:
// se crea un objeto con una propiedad cuyo nombre es el valor de a y cuyo valor es b. La notación [a] se utiliza para generar una propiedad dinámica en el objeto, donde el nombre de la propiedad se toma del valor de a.