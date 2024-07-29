/* ` ` ~
Consegna
Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell'array delle bombe non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha cliccato su una cella che non era una bomba.
BONUS:
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- difficoltà 1 ⇒ 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- difficoltà 2 ⇒ 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- difficoltà 3 ⇒ 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
Consigli del giorno: :party_wizard:
Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
Ad esempio:
Di cosa ho bisogno per generare i numeri?
Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
Le validazioni e i controlli possiamo farli anche in un secondo momento.
 */

const startButton = document.getElementById('start-button');

startButton.addEventListener('click', function(){

    const gridContainer = document.getElementById('grid-container');

    const diffSelect = document.getElementById('difficulty').value;
    
    // console.log("difficoltà del gioco:", diffSelect.value);


    let cellsNumber = 100;

    if ( diffSelect == "2" ) {
        cellsNumber = 81; 
    } 
    else if ( diffSelect == '3') {
        cellsNumber = 49; 
    }

    console.log( "valore della difficoltà: ", cellsNumber )

    gridContainer.innerHTML = '' ; 
    

    for (let i = 1; i <= cellsNumber ; i++) {

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


    if ( cellsNumber == 100){
        cell.classList.add('difficulty-one');

    }else if ( cellsNumber == 81) {
        cell.classList.add('difficulty-two')

    }else if ( cellsNumber == 49) {
        cell.classList.add('difficulty-three')
    }


    cell.addEventListener('click' , function() {
        // console.log('this' , this , typeof this );
        this.classList.toggle('clicked');
        // console.log(this);
        // console.log(this.innerHTML);
        // console.log(this.textContent);
        // console.log(this.innerText);
        console.log('la cella cliccata è la numero : ' + this.innerHTML);

    })

    // cell.addEventListener('click', () => {
    //     // console.log('this arrow' , this , typeof this );

    // })
 }

})


for(let i = array.length; i > 0; i--) {
    console.log(array[i]);
}





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

