// Compruebe si la propiedad existe en el objeto y es veraz

// Escribe una función que tome un objeto (a) y una cadena (b) como argumento. Devuelve verdadero si el objeto tiene una propiedad con la clave 'b', pero solo si tiene un valor verdadero. En otras palabras, no debe ser nulo, indefinido o falso. Devuelve false en caso contrario.

const myFunction = (a, b) => {

    // return  a.hasOwnProperty(b) && Boolean(a[b]);
    return Boolean(a[b]);
    }

console.log(myFunction({a:1,b:2,c:3},'b'))
console.log(myFunction({x:'a',y:null,z:'c'},'y'))
console.log(myFunction({x:'a',b:'b',z:undefined},'z'))

// Interpretacion: 
// a.hasOwnProperty(b) verifica si el objeto a tiene la propiedad b.

// Boolean(a[b]) convierte el valor de la propiedad b en un valor booleano. Si el valor es verdadero (distinto de null, undefined o false), se evaluará como verdadero.

// La función devuelve true si el objeto tiene una propiedad con la clave b y el valor de esa propiedad es verdadero. De lo contrario, devuelve false.

