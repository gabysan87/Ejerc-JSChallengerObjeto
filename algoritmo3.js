// Acceso a las propiedades del objeto tres

// Escribe una función que tome un objeto con dos propiedades y una cadena como argumentos. Debería devolver el valor de la propiedad con clave igual al valor de la cadena

const myFunction = (obj, key) =>{

    return obj[key]
    
    }

    console.log(myFunction({  continent: 'Asia',  country: 'Japan'}, 'continent'))
    console.log(myFunction({  country: 'Sweden',  continent: 'Europe'}, 'country'))

    // En resumen, 
    // la función myFunction toma un objeto (obj) y una clave (key), y devuelve el valor de la propiedad del objeto que corresponde a la clave especificada. Esto permite obtener dinámicamente el valor de cualquier propiedad del objeto, dependiendo de la clave pasada como argumento a la función.
    // (obj, key): Estos son los parámetros de la función. obj es un parámetro que representa un objeto y key es un parámetro que representa una clave o propiedad del objeto.