console.log('probando objetos')

//Creación de 1 objeto
let actor = {
    nombre : 'Carlos',
    edad   : 45
}

console.log(actor) 
console.log(actor.nombre) 

actor.apellido = 'p' //en forma dinámica se agrega al objeto un campo

console.log(actor)

//Método freeze : previene modificaciones de propiedad y atr. existentes
//Object.freeze(actor)

//Ahora si queremos agregarle un campo, no nos deja
actor.peliculas = ['frozen', 'matrix']
//console.log(actor)

Object.seal(actor) //Permite cambiar valores, pero no atributos ni propiedades.
actor.edad = 40 // permite modificar el valor
actor.lugarNacimiento = 'Arg' // no permite agregar el campo


console.log(actor)

//----------------
let pelota =  {forma : 'circular', peso : 35, presion :50}
console.log(pelota)


//Función que recibe por parametros los valores para la creacion de un Objeto más parecido a lo que vimos en Java
function Cliente(dni, nombre, zona){
    this.dni     = dni,
    this.nombre  = nombre,
    this.zona    = zona,
    this.compras = 0
}
//Utiliza la palabra reservada new
persona1 = new Cliente(123, 'Juancito', 1)
console.log(persona1)

