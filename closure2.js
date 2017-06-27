// Anonymous funcion 

var answer = function() {
	return result;
}

// Closure
function myCreator(name) { // Retorna codigo congelado
	return function(msj) { // Codigo congelado
		return name + msj;
	};
}

var closure2 = myCreator('God '); // closure2 tiene almacenado en el un bloque de codigo congelado.
console.log(closure2('Yo soy tu papa')); // Cuando mandamos a llamar a closure2, el codigo congelado
// se descongela y ya tenemos acceso al parametro por eso le mandamos el msj

// Como la myCreator ya se ejecuto y ya se destruyo aun se sigue guardando la variable name en 
// closure2
