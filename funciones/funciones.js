console.log('funciones')

// **********************************************************************************
//                                        CALLBACKS
// **********************************************************************************

/**
 * Esta función tiene como objetivo mostrar un alert con el nombre recibido por param
 */
 function saludar(nombre){
    alert(`Hola ${nombre}`) /// alt 96
}

/**
 * Esta función tiene como objetivo pedir un nombre con un prompt
 * y utilizar el nombre recibido con un callback que recibe por parametro
 */
function procesoAlgo(callback){
    let nombre = prompt('Ingrese el nombre')
    callback(nombre)
}

procesoAlgo(saludar) 


// **********************************************************************************
//                                            ARRAYS
// **********************************************************************************

const jugadores = [
    { nombre: 'Diego' , apellido : 'Kemps' , edad: 70},
    { nombre: 'Juan' ,  apellido : 'Mesi' , edad: 60},
    { nombre: 'Manuel' , apellido : 'Mardona' , edad: 50},
    { nombre: 'Alan' , apellido : 'Pepe' , edad: 45}
]
// ***********************************  TABLA *****************************************
console.table(jugadores)

// ***********************************  FOREACH *****************************************

function imprimirJug(jugadores){
    jugadores.forEach(jugador => {
        console.log(`${jugador.nombre}|${jugador.apellido}|${jugador.edad}`)
    });
} 

// ***********************************  FOR *****************************************
function imprimirConIndice(jugadores) {
    for (let index = 0; index < jugadores.length; index++) {
        console.log(index + ' ' + jugadores[index].nombre + ' ' + jugadores[index].apellido + ' ' + jugadores[index].edad)
        
    }
}


// ***********************************  FILTER *****************************************
//      Filtra por lo que se especifica en una arrow function
const jug = jugadores.filter(jugador => jugador.edad > 40 && jugador.edad < 60)


// ***********************************  MAP *****************************************
//   Genera un nvo array.
//   Devuelve todos los elementos mapeando en objetos solo el atributo que indicamos

const jugSoloNombre = jugadores.map(jugador => ({nombre : jugador.nombre}))

// Map usando toUpperCase()
const nombreYapellidoEnMayusc = jugadores.map (jugador => ({nombre : jugador.nombre.toUpperCase(), apellido : jugador.apellido.toUpperCase()}))



// ***********************************  SORT *****************************************
// Trabaja sobre la misma referencia por lo cual modifica el array original.

// ******************  ordenamiento por numeros *********
jugadores.sort( ( jug_a, jug_b) => ( jug_a.edad - jug_b.edad ) )

// ******************  ordenamiento por strings *********  -----> LOCAL COMPARE
jugadores.sort( (a,b) => (a.nombre.localeCompare(b.nombre)))

// ***********************************  INDEXOF() *****************************************
/**
 * Esta función tiene por objetivo obtener el indice de un objeto a través del campo nombre
 * @param {*} a 
 * @returns 
 */
 const indiceJug = jugadores.map(jugador => jugador.nombre).indexOf('Alan')

 // ***********************************  SPLICE() *****************************************
//Una vez que tenemos el indice 
//usamos SPLICE
//jugadores.splice(indice, 1)
//el primer parametro es el indice y el 2do cuantas veces queremos borrar ese indice, ya que al ser dinámico iria cambiando el objeto que esta en el una vez que va borrando


// ***********************************  NÚMEROS *****************************************

// VERIFICAR SI EL NÚMERO ES > 0
const chequearDivisor = (a) => { if (a > 0) { return true } }