function invertircadena(cadena) {
    cadena = "Hola Mundo"
    var x = cadena.length;
    var cadenaInvertida = "";
  
    while (x>=0) {
      cadenaInvertida = cadenaInvertida + cadena.charAt(x);
      x--;
    }
    return cadenaInvertida;
  }


function fibonacci(limit){
	var fibo = [0,1];

	for(i=2; i <= limit; i++){
		fibo.push(fibo[i-1] + fibo[i-2]);
		alert(fibo[i]);	
	}
}

function dividirCadena(cadenaADividir,separador) {
    var arrayDeCadenas = cadenaADividir.split(separador);

    alert('La cadena original es: "' + cadenaADividir + '"' )
    alert('El separador es: "' + separador + '"' )
    alert("El array tiene " + arrayDeCadenas.length + " elementos: " )
 
    for (var i=0; i < arrayDeCadenas.length; i++) {
       alert(arrayDeCadenas[i] + " / ")
    }
 }
 
 function primo(numero) {

    for (var i = 2; i < numero; i++) {
  
      if (numero % i === 0) {
        return false;
      }
  
    }
  
    return numero !== 1;
  }

function divisores(n){
    let values=[];
    const end=Math.floor(Math.sqrt(n));
 
    for (let i=1; i<=end; i++) {
        if (n%i==0) {
            values.push(i);
            if (i*i!=n) {
                values.push(n/i);
            }
        }
    }
    return values.sort((a,b)=>a-b);
}