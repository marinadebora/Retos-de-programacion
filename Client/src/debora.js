/* # 0
 * Escribe un programa que muestre por consola (con un print) los
 * números de 1 a 100 (ambos incluidos y con un salto de línea entre
 * cada impresión), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 */
let num= Array.from({length: 100}, (a, i) => i+1);
let newNum=num.map(e=> e%3===0 && e%5===0?e="fizzbuzz":e%3===0 ? e="fizz":e%5===0? e="buzz":e)
newNum?.map(e=>console.log(e))
/*#1
 * Escribe un programa que reciba un texto y transforme lenguaje natural a
 * "lenguaje hacker" (conocido realmente como "leet" o "1337"). Este lenguaje
 *  se caracteriza por sustituir caracteres alfanuméricos.
 * - Utiliza esta tabla (https://www.gamehouse.com/blog/leet-speak-cheat-sheet/) 
 *   con el alfabeto y los números en "leet".
 *   (Usa la primera opción de cada transformación. Por ejemplo "4" para la "a")
 */
let alfabeto={
    a:4,
    b:"I3",
    c:"[",
    d:")",
    e:3,
    f:"|=",
    g:"&",
    h: "#",
    i:1,
    j:",_|",
    k:">|",
    l:1,
    m: "/\\/\\ ",
    n:"^/",
    o:0,
    p:"|*",
    q:"(_,)",
    r:"I2",
    s:5,
    t:7,
    u:"(_)",
    v:"\\/",
    w: "\\/\\/",
    x:"><",
    y:"j",
    z:2
  
  }
  let palabra;
  function mostrar(str,obj){
    let texto= str.toLowerCase().split("");
     palabra= texto.map(e=>  obj[e]==undefined?e=" ":obj[e])
     console.log(palabra)
    return palabra
  }
  let  palabraClave= mostrar("mi conejo pepito",alfabeto);
  console.log(palabraClave)
/* #2
 * Escribe un programa que muestre cómo transcurre un juego de tenis y quién lo ha ganado.
 * El programa recibirá una secuencia formada por "P1" (Player 1) o "P2" (Player 2), según quien
 * gane cada punto del juego.
 * 
 * - Las puntuaciones de un juego son "Love" (cero), 15, 30, 40, "Deuce" (empate), ventaja.
 * - Ante la secuencia [P1, P1, P2, P2, P1, P2, P1, P1], el programa mostraría lo siguiente:
 *   15 - Love
 *   30 - Love
 *   30 - 15
 *   30 - 30
 *   40 - 30
 *   Deuce
 *   Ventaja P1
 *   Ha ganado el P1
 * - Si quieres, puedes controlar errores en la entrada de datos.   
 * - Consulta las reglas del juego si tienes dudas sobre el sistema de puntos.   
 */ 
let secuencia=["P1", "P1", "P2", "P2", "P1", "P2", "P1", "P1"];
let P1=0;
let P2=0;
let mostrar=[];
function juego(arr){
    for(let e=0;e<arr.length;e++){
      console.log(P1,P2,mostrar)
      if(arr[e]==="P1"){
       if(P1<30){
        P1+=15
       }else if(P1>=30&&P1<60){
        P1+=10
       }
      }else if(arr[e]==="P2"){
        if(P2<30){
          P2+=15
         }else if(P2>=30&&P2<60){
          P2+=10
         }
      }
      if(P1>0&&P1<50&&P2===0){
        mostrar.push(`${P1} - Love`)
      }else if(P2>0&&P2<50&&P1===0){
        mostrar.push(`Love - ${P2}`)
      }else if(P1===P2&&P1===40){
        mostrar.push(`Deuce`)
      }
      else if(P2>0&&P2<=40&&P1>0&&P1<=40){
        mostrar.push(`${P1} - ${P2}`)
      }else if(P1===50&&P2<40){
        mostrar.push(`Ha ganado el P1`)
        return
      }else if(P2===50&&P1<40){
        mostrar.push(`Ha ganado el P2`)
        return
      }else if(P1===50&&P2===40){
        mostrar.push(`Ventaja P1`)
      }else if(P2===50&&P1===40){
        mostrar.push(`Ventaja P2`)
      }else if(P1===60){
        mostrar.push(`Ha ganado el P1`)
        return
      }else{
        mostrar.push(`Ha ganado el P2`)
        return
      }
      
    }

  return mostrar
}

console.log(juego(secuencia))
 /* #3
 * Escribe un programa que sea capaz de generar contraseñas de forma aleatoria.
 * Podrás configurar generar contraseñas con los siguientes parámetros:
 * - Longitud: Entre 8 y 16.
 * - Con o sin letras mayúsculas.
 * - Con o sin números.
 * - Con o sin símbolos.
 * (Pudiendo combinar todos estos parámetros entre ellos)
 */
 let arr3=[]
 
  function pasword()
  {
    const numRandom = (min, max) =>
    Math.floor(Math.random() * (max - min)) + min;
    
    const strRandom=(min,max)=>
    Math.floor(Math.random() * (max - min)) + min;
       
    arr3.push(String.fromCharCode(strRandom(65,122)))
    arr3.push(numRandom(8,16))
    arr3.push(String.fromCharCode(strRandom(65,122)))
    arr3.push(numRandom(8,16))
    arr3.push(String.fromCharCode(strRandom(65,122)))
    arr3.push(numRandom(8,16))
    arr3.push(String.fromCharCode(strRandom(65,122)))
    arr3.push(numRandom(8,16))
    
    let password= arr3
   return password
  }
  
console.log(pasword())
/* #4
 * Escribe un programa que, dado un número, compruebe y muestre si es primo, fibonacci y par.
 * Ejemplos:
 * - Con el número 2, nos dirá: "2 es primo, fibonacci y es par"
 * - Con el número 7, nos dirá: "7 es primo, no es fibonacci y es impar"
 */
let arr4=[0,1]
let esPrimo=true;
let FibPrimoPar=(num)=>{
    //Primo
    for(let i=2;i< num/2;i++){
      if(num % i ===0){
        esPrimo=false;
      }
    }
    if(esPrimo){
      console.log(`${num} Es Primo`)
    }else{
      console.log(`${num} No es Primo`)
    }
  //Fibonacci
  for(let i=2;i<=num||i<10;i++){
    arr4[i]=arr4[i-1]+arr4[i-2]
  }
  console.log(arr4)
  let esFib= arr4.includes(num);
  if(esFib){
    console.log("fibonacci")
  }else{
    console.log("no es fibonacci")
  }


  //Par
  if(num % 2 ===0){
    console.log("es Par")
  }else{
    console.log("es impar")
  }
}


FibPrimoPar(10)

/* #5
 * Escribe un !Hola Mundo! en todos los lenguajes de programación que puedas.
 * Seguro que hay algún lenguaje que te llama la atención y nunca has utilizado,
 * o quizás quieres dar tus primeros pasos... ¡Pues este es el momento!
 *
 * A ver quién se atreve con uno de esos lenguajes que no solemos ver por ahí... 
 */

/* #6
 * Crea un programa que calcule quien gana más partidas al piedra,
 * papel, tijera, lagarto, spock.
 * - El resultado puede ser: "Player 1", "Player 2", "Tie" (empate)
 * - La función recibe un listado que contiene pares, representando cada jugada.
 * - El par puede contener combinaciones de "🗿" (piedra), "📄" (papel),
 *   "✂️" (tijera), "🦎" (lagarto) o "🖖" (spock).
 * - Ejemplo. Entrada: [("🗿","✂️"), ("✂️","🗿"), ("📄","✂️")]. Resultado: "Player 2".
 * - Debes buscar información sobre cómo se juega con estas 5 posibilidades.
 */

/* #7
 * Crea un programa que simule el comportamiento del sombrero selccionador del
 * universo mágico de Harry Potter.
 * - De ser posible realizará 5 preguntas (como mínimo) a través de la terminal.
 * - Cada pregunta tendrá 4 respuestas posibles (también a selecciona una a través de terminal).
 * - En función de las respuestas a las 5 preguntas deberás diseñar un algoritmo que
 *   coloque al alumno en una de las 4 casas de Hogwarts (Gryffindor, Slytherin , Hufflepuff y Ravenclaw)
 * - Ten en cuenta los rasgos de cada casa para hacer las preguntas y crear el algoritmo seleccionador.
 *   Por ejemplo, en Slytherin se premia la ambición y la astucia.
 */
/* #8
 * Crea un generador de números pseudoaleatorios entre 0 y 100.
 * - No puedes usar ninguna función "random" (o semejante) del lenguaje de programación seleccionado.
 *
 * Es más complicado de lo que parece...
 */
/* #9
 * Crea 3 funciones, cada una encargada de detectar si una cadena de
 * texto es un heterograma, un isograma o un pangrama.
 * - Debes buscar la definición de cada uno de estos términos.
 */
/* #10
 * Llamar a una API es una de las tareas más comunes en programación.
 *
 * Implementa una llamada HTTP a una API (la que tú quieras) y muestra su
 * resultado a través de la terminal. Por ejemplo: Pokémon, Marvel...
 *
 * Aquí tienes un listado de posibles APIs: 
 * https://github.com/public-apis/public-apis
 */

/* #11
 * Dada una URL con parámetros, crea una función que obtenga sus valores.
 * No se pueden usar operaciones del lenguaje que realicen esta tarea directamente.
 *
 * Ejemplo: En la url https://retosdeprogramacion.com?year=2023&challenge=0
 * los parámetros serían ["2023", "0"]
 */
/* 12
 * Un niño está jugando a colorear su tablero de ajedrez y va a pintar cada casilla toda de azul o toda de rojo.
 * Para darle un toque personalizado, quiere pintar la misma cantidad de casillas rojas que de azules,
 * pero no quiere que le queden dos columnas con la misma cantidad de casillas rojas pintadas,
 * ni quiere que le queden dos filas con la misma cantidad de casillas rojas pintadas.
 * ¿Puede lograr pintarlo cumpliendo esas condiciones?
 * ¿Y si en vez de un tablero de ajedrez normal de 8x8 fuese un tablero de ajedrez gigante de 1000x1000?
 * Es importante incluir y detallar el razonamiento y/o programa usado para determinar la respuesta. 
 */

let arr12=[];
function tablero(numFilas){

  let mitadLength=numFilas/2
  let mitadLength2=numFilas/2
  let numFilas2=numFilas
  
 for(let i=0;i<numFilas2;i++){
 
  if(i<mitadLength){
    arr12.push(Array.from({length: numFilas}, (v="red") => v))
   
      arr12[i].fill("blue",arr12[i].length-(i+1),arr12[i].length)
    
  }else{
    
    arr12.push(Array.from({length: numFilas}, (v="blue") => v));
    mitadLength2--
      arr12[i].fill("red",0,mitadLength2+1)

  }

}


 return arr12
}


let arr2=tablero(8)


console.table(arr12)