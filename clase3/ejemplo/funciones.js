
//FUNCIONES

// 1 FUNCIONES NORMALES
function sumaFuncionNormal(a, b) {
    return a + b
}

console.log('FUNCIÓN NORMAL ' + sumaFuncionNormal(4, 5))

// 2 FUNCIONES ANONIMAS
const sumaFuncionAnonima = function (a, b) {
    return a + b
}

console.log('FUNCIÓN ANÓNIMA ' + sumaFuncionAnonima(4, 5))

// 2 FUNCIONES FLECHA O ARROW FUNCTION
/*  se elimina la palabra function y despues de los parametros va directamente el 
    retorno sin la palabra reservada return ni los corchetes.
*/
const sumaArrowFunction = (a, b) => a + b


console.log('FUNCIÓN FLECHA ' + sumaArrowFunction(4, 5))

//-------------------------------------------------------------
console.log('---------------------------------------------------')
console.log('---------------------------------------------------')
console.log('---------------------------------------------------')

/*
Ejercicio
    hacer una funcion de scoring
        El scoring se calcula sobre cantidad de ventas / cantidad meses * 100
*/

//Seria una función que tome 2 parametros y retorne el scoring del estilo que hicimos y luego pasar a función anonima y luego a arrow function.

const chequearDivisor = (a) => { if (a > 0) { return true } }

//Resolución función normal --------------

function realizarScoringFuncNormal(a, b) {
    if (chequearDivisor(b)) {
        return (a / b) * 100
    }
    else {
        return 'No es posible realizar ese cálculo, ingrese un número mayor a 0'
    }
}
console.log('-----FUNC NORMAL--------------------')

console.log(realizarScoringFuncNormal(12, 12))

console.log('---------------------------------------------------')


const realizarScorFuncAnon = function (a, b) {
    if (chequearDivisor(b)) {
        return (a / b) * 100
    }
    else {
        return 'No es posible realizar ese cálculo, ingrese un número mayor a 0'
    }
}

console.log('-----FUNC ANONIMA--------------------')

console.log(realizarScorFuncAnon(12, 12))

console.log('---------------------------------------------------')

const realizarScorArrowFunc = (a, b) => {
    if (chequearDivisor(b)) {
        return (a / b) * 100
    }

    else {
        return 'No es posible realizar ese cálculo, ingrese un número mayor a 0'
    }}

    console.log('----- ARROW FUNC --------------------')

console.log(realizarScorArrowFunc(12, 12))

