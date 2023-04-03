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

/* import inquirer from 'inquirer';
let respuestas=[];
inquirer.prompt([{
    type:'list',
    name:'pregunta1',
    message:'¿A qué clase te gustaría asistir más?',
    choices:['D.C.A.O.','Adivinación','Pociones','Cuidado de Criaturas Mágicas']
},
{
    type:'list',
    name:'pregunta2',
    message:'¿Qué animal llevarías al colegio?',
    choices:['Sapo', 'Gato', 'Lechuza', 'No llevaría ninguna']
},
{
    type:'list',
    name:'pregunta3',
    message:'Si hablamos de aspectos positivos de tu personalidad ¿Cuál de estas opciones te define más?',
    choices:['Generoso y perseverante','Leal y determinado','Distinguido y diplomático','Creativo e intelectual']
},
{
    type:'list',
    name:'pregunta4', 
    message:'¿Y si hablamos de aspectos negativos?',
    choices:['Orgulloso','Prejuicioso','Egocéntrico','Envidioso']
},
{
    type:'list',
    name:'pregunta5',
    message:'¿En dónde pasarías tu tiempo libre en Hogwarts?',
    choices:['En los terrenos','En los invernaderos','En la biblioteca','En la Sala Común']
},
{
    type:'list',
    name:'pregunta6', 
    message:'Elige una opción...',
    choices:['Viento','Prado','Fogata','Laguna']
},
{
    type:'list',
    name:'pregunta7', 
    message:'¿Qué es de lo primero que haces (o harías) cuando llegas a Magic Meeting?',
    choices:['Compro cosas','Voy a una clase.','Participo de desafíos, trivias., concursos, etc.','Me junto con los de mi casa.']
}
])
.then(answer=>{
//respuestas.push(answer)
console.log('respuestas',answer)
}) */

/* #10
 * Llamar a una API es una de las tareas más comunes en programación.
 *
 * Implementa una llamada HTTP a una API (la que tú quieras) y muestra su
 * resultado a través de la terminal. Por ejemplo: Pokémon, Marvel...
 *
 * Aquí tienes un listado de posibles APIs: 
 * https://github.com/public-apis/public-apis
 */
/* import axios  from 'axios';
async function llamarApi(){
const result= await axios("https://api.disneyapi.dev/characters")
console.log(result.data)
}
llamarApi() */
