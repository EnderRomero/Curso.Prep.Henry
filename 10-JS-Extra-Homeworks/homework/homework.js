// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var matriz = [];
  for (let item in objeto) {
    matriz.push([item , objeto[item]]);
  }
  return matriz;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var audit = {};
  for (let letra in string) {
    if(audit[string[letra]] === undefined){
      var cont = 0;
      for (let i in string) {
        if(string[i] === string[letra]) {
          cont += 1;
        }
        audit[string[letra]] = cont;
      }
    }
  }
  return audit;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var may = '' , min ='';
  for (let i = 0; i < s.length; i++) {
    if (/^[A-Z]+$/.test(s.slice(i, i+1))) {
      may += s.slice(i, i+1);
    } else {
      min += s.slice(i, i+1);
    }
  }
  return may + min;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var newStr = '';
  var palabra = '';
  for (let i = 0; i < str.length; i++) {
    palabra = str.slice(i,i+1) + palabra;
    if(str[i] === ' ' || i === str.length - 1) {
      newStr += ' ' + palabra.trim();
      palabra = '';
    }
  }
  return newStr.trim();
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var num = numero.toString();
  var numComp = '';
  var array = num.match(/[0-9]/g);
  for (let i in array) {
    numComp = array[i] + numComp;
  }
  if ( num === numComp ) {
    return 'Es capicua';
  }
  return 'No es capicua';
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var array = cadena.match(/[^a-c]/g);
  var newstr = '';
  for (let i in array) {
    newstr += array[i];
  }
  return newstr;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  var newArr = []
  for (let item in arr) {
    newArr.push({word: arr[item], len: arr[item].length})
  };

  function SortArray(x, y){
    if (x.len < y.len) {return -1;}
    if (x.len > y.len) {return 1;}
    return 0;
  };

  var ordArr  = newArr.sort(SortArray);
  finalArr = [];
  for(let item in ordArr) {
    finalArr.push(ordArr[item].word);
  }
  return finalArr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var intersArr = [];
  for(let i in arreglo1) {
    for(let j in arreglo2) {
      if(arreglo1[i] === arreglo2[j]){
        intersArr.push(arreglo2[j]);
      };
    };
  };
  return intersArr;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

