// Sumar valores de objeto

// Escribe una función que tome un objeto (a) como argumento. Devuelve la suma de todos los valores de los objetos.



const myFunction = (a) => {

    return Object.values(a).reduce((total, num) => total + num, 0)
    // Object.values(a).reduce((sum, cur) => sum + cur, 0); JS
}

console.log(myFunction({a:1,b:2,c:3}))
console.log(myFunction({j:9,i:2,x:3,z:4}))
console.log(myFunction({w:15,x:22,y:13}))

// Interpretacion
// Utiliza el método Object.values para obtener los valores de las propiedades del objeto a. Luego, utiliza el método reduce en estos valores para sumarlos todos y devuelve el resultado de la suma.

// Object.values(a): Esto obtiene los valores de las propiedades del objeto a y devuelve un array con esos valores.

// .reduce((sum, cur) => sum + cur, 0): Luego, se utiliza el método reduce en el array de valores. La función de reducción se define con dos parámetros: sum (acumulador) y cur (valor actual). En cada iteración, suma el valor actual cur al acumulador sum. El segundo argumento de reduce es el valor inicial del acumulador, en este caso, se establece en 0.
