import './App.css'
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
/* El propio Sheldon la explicaba así:
 "Tijera corta a papel,("✂️","📄")="✂️"
  papel tapa a piedra,("📄","🗿")="📄"
   piedra aplasta a lagarto,("🗿","🦎")="🗿"
  lagarto envenena a Spock,("🦎","🖖")="🦎"
   Spock rompe a tijera,("🖖","✂️")="🖖"
  tijera decapita a lagarto, ("✂️","🦎")="✂️"
  lagarto devora a papel,("🦎","📄")="🦎"
   papel desautoriza a Spock,("📄","🖖")="📄"
  Spock vaporiza a piedra,("🖖","🗿")="🖖"
   y como siempre, piedra aplasta a tijera"("🗿","✂️")="🗿"
    */


function App()
{





/* //fibonacci
    let fib = function(n) {
      for(let i=2;i<=n;i++){
        arr4[i]=arr4[i-1]+arr4[i-2]
      }
      numero=n
      return arr4
}
let numF=fib(numero)
let esFib= numF.includes(numero)
if(esFib){
  console.log("fibonacci")
}else{
  console.log("no es fibonacci")
}

//primo

let primo=(numP)=>{
for(let i=2;i< numP/2;i++){
  if(numP % i ===0){
    esPrimo=false;
  }
}
if(esPrimo){
  console.log("es Primo")
}else{
  console.log("No es Primo")
}

}
  let numeroPrimo=primo(numero)

//par

let par=(num)=>{
if(num % 2 ===0){
  console.log("es Par")
}else{
  console.log("es imPar")
}
}
let numeroPar=par(numero) */


  return (
    <div className="App">
   
   
   
    </div>
  )
}

export default App
/* let characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$&%/><" */
/* let num= Math.random();
let str=characters.charAt( Math.floor(Math.random()*120)) */