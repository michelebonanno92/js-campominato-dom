/* ` ` ~ .sort((a,b) => a - b) per ordinare numeri in ordine crescente
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

// let points = 0 ; 
// let clickedBomb = false ; 

startButton.addEventListener('click', function(){

    const gridContainer = document.getElementById('grid-container');

    const diffSelect = document.getElementById('difficulty').value;
    
    // console.log("difficoltà del gioco:", diffSelect.value);


    let cellsNumber = 17;

    if ( diffSelect == "2" ) {
        cellsNumber = 81; 
    } 
    else if ( diffSelect == '3') {
        cellsNumber = 49; 
    }

    console.log( "valore della difficoltà: ", cellsNumber )

    gridContainer.innerHTML = '' ; 
    
    // creata variabile constante delle bombe
   
    // creato ciclo definito for perchè sappiamo che le bombe sono 16 sul grado di difficoltà ( 100,81,49)
    // for ( let i = 0 ; i < 16; i++){
    // cambiamo tipo di ciclo da definito a inedefinito while perchè per evitare di non avere doppioni usiamo l'if con includes ma non sapendo che con solo 16 iterazioni non arriviamo sicuro a generare le 16 bombe allora usiamo il while mettendo come condizione la lunghezza dell'array così anche facendo più di 16 iterazioni con doppioni si fermerà a 16 bombe e senza doppioni ;
    const bombs = [];
    const bombsNumber = parseInt(16);
    while ( bombs.length < bombsNumber ) {

            // creata nuova variabile constante per il numero generato dal ciclo e 
        const randomNumber = generateRandomNumber(1, cellsNumber);
        // console.log('randomNumber', randomNumber , typeof randomNumber );

         if (!bombs.includes(randomNumber)){
        //  if (bombs.includes(randomNumber)==false){
        //  if (!(bombs.includes(randomNumber) == true)){

            bombs.push(randomNumber);
         }
        

    }
        
    console.log('bombs', bombs.sort((a , b ) => a - b ) , typeof bombs,  );


    for (let i = 1; i <= cellsNumber ; i++) {


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
        // si può rimuovere un addEventListener con "RemoveEventListener" ma ci conviene usarlo solo quando abbiamo una funzione che ha un nome e non adesso che abbiamo una  funzione anonima : cell.removeEventListener('click', funz....)
         /* 
            che vuol dire che la partita è terminata ?
            -se una delle celle ha la classe bomb
              - altra possibilità mi salvo da qualce parte l'informazione  di aver cliccato su una bomba
            - se ho cliccato su tuttel le celle NON bomba -> il numero di celle che ha la classe not-bomb è uguale a cellNumber - bombsNumber 
                    -altra possibilità mi salvo da qualche parte i click che ho fatto 
            soluzioni :
            1)termino o se la variabile clickedBomb è a true o se points == cellNumber - bombsNumber 
            2)  termino o se il numero di celle con classe bomb > 0 o se il numero di celle con classe not-bomb == cellsNumber - bombsNumber 
                - non è terminata se il numero di celle con classe bomb == 0 e il numero di celle con classe not-bomb è < di cellNumber - bombsNumber 
        */  
        const cellWithBombClass = document.querySelectorAll('.bomb');
        const cellWithNotBombClass = document.querySelectorAll('.not-bomb');
        console.log('numero di celle con classe not-bomb', cellWithNotBombClass.length)

        // la partita non è terminata quindi 
        if( cellWithBombClass.length == 0 
            && 
            cellWithNotBombClass.length < cellsNumber - bombsNumber
        ){
            const cellNumber = parseInt(this.innerText);
            if (bombs.includes(cellNumber)){
                // con toggle ativo primo click e disattivo con secondo click
            // this.classList.toggle('bomb');
            // clickedBomb = true ;
            this.classList.add('bomb');

            document.getElementById('msg-container').innerHTML = ('Hai cliccato una bomba e hai perso ! il tuo punteggio è : ' + cellWithNotBombClass.length );

            // alert('Hai cliccato una bomba e hai perso ! il tuo punteggio è : ' + cellWithNotBombClass.length );
            }
            else {
                // con add aggiungo semplicemente la classe e viene mantenuta al click 
                // points++;
                // points += 1 ; 
                // points = points + 1 ; 
                this.classList.add('not-bomb');

                if (( cellWithNotBombClass.length + 1 ) == cellsNumber - bombsNumber ){
                // if (( cellWithNotBombClass.length + 1 )== cellsNumber - bombsNumber -1 ){

                document.getElementById('msg-container').innerHTML = (' hai cliccato su tutte le celle non bomba, hai vinto complimenti ! Il tuo punteggio è : ' + (cellWithNotBombClass.length + 1 ));
            }
          


                //     alert('hai cliccato su tutte le celle non bomba, hai vinto complimenti !il tuo punteggio è :' + (cellWithNotBombClass.length + 1 ));
                // }
              

          
            }
        }
        else{
            // alert('Il gioco è terminato')
        }
       
        // console.log(this);
        // console.log(this.innerHTML);
        // console.log(this.textContent);
        // console.log(this.innerText);
        console.log('la cella cliccata è la numero : ' + this.innerHTML);

    })
 }

})
// definita funzione per generare un numero random tra un minimo e un massimo ( massimo compreso)
function generateRandomNumber(min, max) {
   return Math.floor(Math.random() * (max - min + 1) ) + 1; 
  }

 







