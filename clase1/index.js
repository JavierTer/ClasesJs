console.log('hola mundo de este codigo')


console.log('--------------------------')


const r1 = 20
console.log(r1)

let j1 = 40
//suma de variables
console.log(r1 + j1)

//------

//Llamado a funciones
saludo()
saludarA('Carlos')



//--------------------------

//Declaración de funciones
function saludo() {
    console.log('saludo a todos')
}
//Funciones recibiendo parametro
function saludarA(alguien) {
    console.log('hola ' + alguien)
}

for (i = 0; i < 10; i++) {
    console.log(i)
}

console.log('--------------------------')
num = 20



// WHILE ----------------------------------------

while (num > 10) {
    num--;
    console.log(num)
}

// SWITCH ---------------------------------------

key = 5
switch (key) {
    case 5:
        console.log('es 5')
        break;

    default:
        break;
}

// RECORRIENDO UN ARRAY E IMPRIMIENDO -----------
console.log('RECORRIENDO UN ARRAY E IMPRIMIENDO')
a = [4,5,6,-2,30,5,-3,-12]

// for(let i=0; i < a.length; i++){
//     console.log(a[i])
// }

// RECORRIENDO UN ARRAY y SUMANDO -----------
// ACUMULANDO LA CANTIDAD DE POSITIVOS Y NEGATIVOS
// console.log('suma de positivos y negativos')
// let positivo = 0;
// let negativo = 0;
// let cantPositivos = 0;
// let cantNegativos = 0;

// for(let i=0; i < a.length; i++){
//     if(a[i] > 0) {
//         positivo+=a[i];
//         cantPositivos++;
//     }
//     else {
//         negativo +=a[i];
//         cantNegativos++;
//     }
// }

acuPos    = 0
acuNeg    = 0
cuentaPos = 0
cuentaNeg = 0

let res = [0, 0, 0, 0]  //array con 4 posiciones

const resultados = {       // un obj con 4 valores para las posiciones
    contPos : 0,
    contNeg : 1,
    AcuPos  : 2,
    AcuNeg  : 3
}

for(let i=0; i < a.length; i++){
    if(a[i] > 0) {
        cuentaPos++;            //acumula la cantidad de pos
        acuPos = acuPos + a[i]  // suma el acumulado de positivos
        res[resultados.contPos]++; //en la posicion que tiene guardada el obj resultados para contPos 
                                   //lo toma como el parametro para la posicion del array res y ahi hace un mas 1
        res[resultados.AcuPos] = res[resultados.AcuPos] + a[i];
        //de nuevo obtiene la posicion en el array res con el valor del objeto en AcuPos.
        //una vez que tiene la posicion en ese mismo lugar en el array suma el valor de la iteración de i
    }
    else {
        cuentaNeg++;
        acuNeg = acuNeg + a[i];
        res [resultados.contNeg]++;
        res [resultados.AcuNeg] = res[resultados.AcuNeg] + a[i];
    }
}

console.log('Resultados')
console.log(res)


