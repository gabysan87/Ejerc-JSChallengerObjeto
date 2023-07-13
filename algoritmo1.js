// Accediendo a las propiedades del objeto uno

// Escribe una función que tome un objeto con dos propiedades como argumento. Se debe devolver el valor del inmueble con clave país.

const myFunction = (obj) =>{

return obj.country

}

console.log(myFunction({ continent: 'Asia', country: 'Japan' }))
console.log(myFunction({ country: 'Sweden', continent: 'Europe' }))

// obj.country;: Esta línea de código devuelve el valor del inmueble con la clave "country" del objeto obj. obj.country accede a la propiedad pais del objeto obj y devuelve su valor.

// Entonces, cuando llames a la función myFunction y pases un objeto con una propiedad "country", la función devolverá el valor de esa propiedad.

// En resumen, la función myFunction toma un objeto (obj) y devuelve el valor de la propiedad country del objeto. Esto significa que la función espera que el objeto tenga una propiedad llamada country, y devolverá el valor asociado a esa propiedad.