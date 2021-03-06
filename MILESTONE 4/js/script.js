// Milestone 4
// Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)
// Milestone 5 - opzionale
// Cancella messaggio: cliccando sul messaggio appare un menu a tendina che permette di cancellare il messaggio selezionato



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
                 message: "No, non c'è l'agvzzz",
                 status: 'sent'
             },
                 {
                     date: '10/01/2020 15:50:00',
                     message: "C'è la manetta!",
                     status: 'sent'
                 },
                 {
                     date: '10/01/2020 16:15:22',
                     message: 'Ahhhh proprio la baracca-super hai comprato!',
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

   // di base il messaggio dell'utente è vuoto
     userMsg:'',
     // di base il messaggio del computer è vuoto
     computerMsg:'Ok',

   //  di base la stringa per filtrare le chat è vuota
      searchChat:'',

   },

   methods:{
   // funzione per dare a choosenChat il valore dell'index
      activeMsg(index){

         this.choosenChat = index;

         console.log(this.contacts[this.choosenChat].name);
      
      },

      // funzione per filtrare le chat
      filterChat(){

         // se searchChat include le lettere inserite allora mostrami solo i nomi che le includono

         this.contacts.forEach((contatto) => {
            let nameChat = contatto.name;
            let visibleChat = contatto.visible;
            // se il nome include ciò che l'utente scrive allora true/false
            if((nameChat).toUpperCase().includes((this.searchChat).toUpperCase())){
               contatto.visible = true;
            }else{
               contatto.visible = false;
            }

            console.log('name',nameChat);
            console.log(this.searchChat);
         });
         
      },

      newMsg(){
   
         // cosi aggiungo ciò che scrive l'utente all'array di object
         // essendoci un object però devo fare in questo modo
         this.contacts[this.choosenChat].messages.push({
            message: this.userMsg,
            status: 'sent',
            date: dayjs().format("DD/MM/YYYY HH:mm:ss"),
         });
         
         // svuoto la stringa
         this.userMsg = '';

         // dopo 1 secondo risponde il computer "ok"
         setTimeout(() => {
            // pusho il messaggio del computer
            this.contacts[this.choosenChat].messages.push({
               message: this.computerMsg,
               status: 'received',
               date: dayjs().format("DD/MM/YYYY HH:mm:ss"),
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

      // data dinamica nella lista chat
      getlastDate(index){
         // in questo modo prendo l'ultima data di ogni singola chat
         let latestDate = this.contacts[index].messages[this.contacts[index].messages.length - 1].date;

         return latestDate;
      },

   }

})



//dayjs.extend(window.dayjs_plugin_NOME_PLUGIN);
dayjs.extend(window.dayjs_plugin_customParseFormat);
dayjs.extend(window.dayjs_plugin_relativeTime);


//locale/ lingua desiderata
dayjs.locale('it');