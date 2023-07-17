// Multiplica todos los valores de los objetos por x

// Escribe una función que tome un objeto (a) y un número (b) como argumentos. Multiplica todos los valores de 'a' por 'b'. Devuelve el objeto resultante.

const myFunction = (a, b) => {
const obj = {};
for (let value of Object.keys(a))
{
    obj[value]= a[value] * b
}
return obj
}

// return Object.entries(a).reduce((acc, [key, val]) => {
//     return { ...acc, [key]: val * b };
// }, {}); JS

console.log(myFunction({a:1,b:2,c:3},3)) 
console.log(myFunction({j:9,i:2,x:3,z:4},10))
console.log(myFunction({w:15,x:22,y:13},6))
// Interpretacion 
// declaramos un objetos vacio para iterar los resultado de cada vuelta,
// Luego la condicion el value es el elemento que vamos iterar, 
// luego llamamos al valor 