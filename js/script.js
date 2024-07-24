/* ` backtick ` tilde ~

Consegna
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di LIGHTCORAL ed emetto un messaggio in console con il numero della cella cliccata.
Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
Consigli del giorno:  :party_wizard:
Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
Ad esempio:
Di cosa ho bisogno per generare i numeri?
Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
Le validazioni e i controlli possiamo farli anche in un secondo momento. (modificato) 
 */

const startButton = document.getElementById('start-button');

startButton.addEventListener('click', function(){

    const gridContainer = document.getElementById('grid-container');

    const diffSelect = document.getElementById('difficulty');
    console.log(diffSelect);


    let cellsNumber = 100;

    if ( diffSelect == "2" ) {
        cellsNumber = 81; 
    } 
    else if ( diffSelect == '3') {
        cellsNumber = 49; 
    }

    gridContainer.innerHTML = '' ; 
    

    for (let i = 1; i <= 100 ; i++) {

     /* 
        per creare un nuovo elemento HTML , abbiamo due strade :
        1) 
        con document.createElement -> in questo caso specifico ci conviene usa document.createElement perchè dovremo selezionare l'elemento per intercettarne il click (per metterlo in ascolto dell'evento con addEvenListener )
        2)
        con una stringa e innerHTML 
     */
    const cell = document.createElement('div');
    cell.innerHTML = i ; 
    gridContainer.append(cell);


    cell.addEventListener('click' , function() {
        // console.log('this' , this , typeof this );
        this.classList.toggle('clicked');
        // console.log(this);
        // console.log(this.innerHTML);
        // console.log(this.textContent);
        // console.log(this.innerText);
        console.log('la cella cliccata è la numero : ' + this.innerHTML);

    })
 }

})






// const cells = parseInt(100);
// console.log('cells', cells, typeof cells);


// const myRow = document.getElementById('my-row');

// for (let i = 0; i < cells ; i++) {
//     const cell = document.createElement('div');
//     cell.innerHTML = i + 1 ;
   
//     cell.addEventListener('click', function () {
//         cell.classList.toggle('color');
//     })

//     myRow.append(cell);
// }

