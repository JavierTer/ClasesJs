/*
CALLBACKS
Son funciones que se pasan por parametro
*/


/* function saludar(nombre){
    alert(`Hola ${nombre}`) /// alt 96
}

//saludar('Javier')


function procesoAlgo(callback){
    let nombre = prompt('Ingrese el nombre')
    callback(nombre)
}

procesoAlgo(saludar) */

/* Ejercicio: 
Quiero que me calculen la base imponible de un precio 
base imponible seria lo que no tiene impuesto, si nos pasan 1 valor
base imponible del iva 100 = 82 + 21/100
siempre hay que intentar que el cliente de la formula exacta.
resultado = importe / (1 + tasa /100)

Tecnicamente, es 1 funcion con 3 parametros y seria: 
1- el importe 
2- la tasa
3- funcion de callback para mostrar el resultado

Hacer 1 funcion que muestre el resultado
Otra funcion que haga el proceso
*/




/* function mostrarResultado(valor){
    console.log('El valor es : ' + valor)
}

function calcularValor(importe, tasa, callback) {
    let resultado  = importe / (1 + tasa /100)
    callback(resultado)
}  */


//calcularValor(100,21,mostrarResultado)

//Ahora si la tasa es === 0 debiera devolver un error
// new Error("div por 0")

//Verifica si lo recibido por parametro es mayor 0
const chequearDivisor = (a) => { if (a > 0) { return true } }


//Hace el cálculo y llama al callback con 2 posibles parametros
const calcularValor = (importe, tasa, callback) => {

    if (chequearDivisor(importe) && chequearDivisor(tasa)) {
        let resultado = importe / (1 + tasa / 100)
        callback(null, resultado)
    }
    else {
        callback(new Error("Debe ingresar valores superiores a 0"))

    }
}

function mostrarResultado(error, texto){
    if(error){
        console.log(error)
    }
    else {
        console.log(`El resultado es: ' ${texto}`)
    }
}

calcularValor(100, 21, mostrarResultado) 
    
console.log('-------------------------------------------')

//Array de objetos
const jugadores = [
    { nombre: 'Diego' , apellido : 'Kemps' , edad: 70},
    { nombre: 'Juan' ,  apellido : 'Mesi' , edad: 60},
    { nombre: 'Manuel' , apellido : 'Mardona' , edad: 50},
    { nombre: 'Alan' , apellido : 'Az' , edad: 45}
]

//mostrar en forma de tabla un array
console.table(jugadores)

//Ejercicio
/**
 * completar funcion imprimirJug para que imprima algo similar a console.table, sin estilo (solo texto)
 */
 function imprimirJug(jugadores){
    jugadores.forEach(jugador => {
        //console.log(jugador.nombre + ' ' + jugador.apellido + ' ' + jugador.edad)
        console.log(`${jugador.nombre}|${jugador.apellido}|${jugador.edad}`)
    });
} 

function imprimirConIndice(jugadores) {
    for (let index = 0; index < jugadores.length; index++) {
        console.log(index + ' ' + jugadores[index].nombre + ' ' + jugadores[index].apellido + ' ' + jugadores[index].edad)
        
    }
}

imprimirConIndice(jugadores)


console.log('----------------------------------------------------------')

// ***********************************  ejercicio *****************************************
//Agregar jugador menos de 60 años

//solucion 1
const jug = jugadores.filter(jugador => jugador.edad > 40 && jugador.edad < 60)

console.log('----------------------------------------------------------')

// ***********************************  MAP *****************************************

// ***********************************  ejercicio *****************************************

//Ejercicio, se quiere solo los nombres de los jugadores.
//una solución posible evitando hacer un recorrido del array es maps

// de los jugadores , por cada jugador, quisiera imprimir solo el nombre, haciendo un objeto con el mismo
// Devuelve todos los elementos mapeando en objetos solo el atributo que indicamos
const jugSoloNombre = jugadores.map(jugador => ({nombre : jugador.nombre}))

// console.table(jugSoloNombre)

// ***********************************  ejercicio *****************************************
// Pasar a mayusculas el nombre y apellido usando MAP.
// toUpperCase
const nombreYapellidoEnMayusc = jugadores.map (jugador => ({nombre : jugador.nombre.toUpperCase(), apellido : jugador.apellido.toUpperCase()}))

console.table(nombreYapellidoEnMayusc)

// ***********************************   *****************************************
// ***********************************  SORT *****************************************
// ***********************************  *****************************************

console.log('Mostramos el array tal cual esta')
console.log(jugadores)

//Trabaja sobre el mismo array
//Metodos de ordenamiento burbuja
jugadores.sort( ( jug_a, jug_b) => ( jug_a.edad - jug_b.edad ) )

console.log('Mostramos el arreglo pasando por sort')
console.log(jugadores)
// Notese que ya lo cambia en la referencia, por lo que cuando lo muestro anterior a la función sort() ya esta ordenado.

// LOCAL COMPARE para STRINGS

jugadores.sort( (a,b) => (a.nombre.localeCompare(b.nombre)))

//Para eliminar un jugador
/*Para obtener el indice 
de esta forma haces una reducción a 1 columna y despues es mas facil buscar.
*/
const indiceJug = jugadores.map(jugador => jugador.nombre).indexOf('Alan')
console.log('El indice es: ' + indiceJug)
//Una vez que tenemos el indice 
//usamos SPLICE
//jugadores.splice(indice, 1)