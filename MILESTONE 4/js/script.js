// Milestone 3
// Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando “enter” il testo viene aggiunto al thread sopra, come messaggio verde
// Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.


const app = new Vue({

   el: '#app',

   data:{
      contacts: [
         {
             name: 'Michele',
             avatar: '_1',
             visible: true,
             messages: [{
                 date: '10/01/2020 15:30:55',
                 message: 'Hai portato a spasso il cane?',
                 status: 'sent'
             },
                 {
                     date: '10/01/2020 15:50:00',
                     message: 'Ricordati di dargli da mangiare',
                     status: 'sent'
                 },
                 {
                     date: '10/01/2020 16:15:22',
                     message: 'Tutto fatto!',
                     status: 'received'
                 }
             ],
         },
         {
             name: 'Fabio',
             avatar: '_2',
             visible: true,
             messages: [{
                 date: '20/03/2020 16:30:00',
                 message: 'Ciao come stai?',
                 status: 'sent'
             },
                 {
                     date: '20/03/2020 16:30:55',
                     message: 'Bene grazie! Stasera ci vediamo?',
                     status: 'received'
                 },
                 {
                     date: '20/03/2020 16:35:00',
                     message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                     status: 'received'
                 }
             ],
         },
         {
             name: 'Samuele',
             avatar: '_3',
             visible: true,
             messages: [{
                 date: '28/03/2020 10:10:40',
                 message: 'La Marianna va in campagna',
                 status: 'received'
             },
                 {
                     date: '28/03/2020 10:20:10',
                     message: 'Sicuro di non aver sbagliato chat?',
                     status: 'sent'
                 },
                 {
                     date: '28/03/2020 16:15:22',
                     message: 'Ah scusa!',
                     status: 'received'
                 }
             ],
         },
         {
             name: 'Luisa',
             avatar: '_4',
             visible: true,
             messages: [{
                 date: '10/01/2020 15:30:55',
                 message: 'Lo sai che ha aperto una nuova pizzeria?',
                 status: 'sent'
             },
                 {
                     date: '10/01/2020 15:50:00',
                     message: 'Si, ma preferirei andare al cinema',
                     status: 'received'
                 }
             ],
         },
     ],

   // di base la chat aperta è la prima (index 0)
     choosenChat: 0,
     choosenChatDate: 0,

   // di base il messaggio dell'utente è vuoto
     userMsg:'',
     // di base il messaggio del computer è vuoto
     computerMsg:'Ok'
   },

   mounted(){

 
      
   },

   methods:{
   // funzione per dare a choosenChat il valore dell'index
      activeMsg(index){

         this.choosenChat = index;

         console.log(this.choosenChat);
      },

      newMsg(){
   
         // cosi aggiungo ciò che scrive l'utente all'array di object
         // essendoci un object però devo fare in questo modo
         this.contacts[this.choosenChat].messages.push({
            message: this.userMsg,
            status: 'sent',
            date: '10/01/2020 16:45:00',
         });
         
         // svuoto la stringa
         this.userMsg = '';

         // dopo 1 secondo risponde il computer "ok"
         setTimeout(() => {
            // pusho il messaggio del computer
            this.contacts[this.choosenChat].messages.push({
               message: this.computerMsg,
               status: 'received',
               date: '10/01/2020 16:46:00',
            }); 
            // dopo un secondo risponde
         }, 1000);

      },

      // messaggio dinamico
      getlastMsg(index){

         // in questo modo prendo l'ultimo messaggio di ogni singola chat
         let latestMsg = this.contacts[index].messages[this.contacts[index].messages.length - 1].message;

         // se il messaggio è più lungo di X caratteri allora taglialo e aggiungi i puntini
         if(latestMsg.length > 25){
            latestMsg = latestMsg.substr(0,25)+"..."
         }

         return latestMsg;
      },

      // data dinamica
      getlastDate(index){
         // in questo modo prendo l'ultima data di ogni singola chat
         let latestDate = this.contacts[index].messages[this.contacts[index].messages.length - 1].date;

         return latestDate;
      }

   }

})

