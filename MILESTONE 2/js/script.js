// Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione
// Click sul contatto mostra la conversazione del contatto cliccato


const app = new Vue({

   el: '#app',

   data:{
      contatti:[
         {
            nome: 'Michele',
            avatar:'_2',
            visible: true,
            messaggi:[
               {
                  dataMessaggio: '10/01/2020 15:30:55',
                  text:'Che hai fatto di bello oggi?',
                  statoMessaggio: 'sent'
               },
               {
                  dataMessaggio: '10/01/2020 15:31:55',
                  text:'Niente di che, tu?',
                  statoMessaggio: 'received'
               },
               {
                  dataMessaggio: '10/01/2020 15:32:15',
                  text:'Ho studiato',
                  statoMessaggio: 'sent'
               },
               {
                  dataMessaggio: '10/01/2020 15:32:55',
                  text:'Sono stanchissimo',
                  statoMessaggio: 'sent'
               },
            ]
         },
         {
            nome: 'Andrea',
            avatar:'_3',
            visible: true,
            messaggi:[
               {
                  dataMessaggio: '10/01/2020 15:30:55',
                  text:'Come stai?',
                  statoMessaggio: 'sent'
               },
               {
                  dataMessaggio: '10/01/2020 15:31:55',
                  text:'bene, tu?',
                  statoMessaggio: 'received'
               },
               {
                  dataMessaggio: '10/01/2020 15:32:15',
                  text:'Bella Milano?',
                  statoMessaggio: 'received'
               },
               {
                  dataMessaggio: '10/01/2020 15:32:55',
                  text:'Bellissima',
                  statoMessaggio: 'sent'
               },
            ]
         },
         {
            nome: 'Giorgia',
            avatar:'_4',
            visible: true,
            messaggi:[
               {
                  dataMessaggio: '10/01/2020 15:30:55',
                  text:'Grande partita ieri',
                  statoMessaggio: 'received'
               },
               {
                  dataMessaggio: '10/01/2020 15:31:55',
                  text:'E che gol!!!',
                  statoMessaggio: 'received'
               },
               {
                  dataMessaggio: '10/01/2020 15:32:15',
                  text:'Si bello tutto',
                  statoMessaggio: 'sent'
               },
               {
                  dataMessaggio: '10/01/2020 15:32:55',
                  text:"Ma com'è che abbiamo perso 5-1",
                  statoMessaggio: 'sent'
               },
            ]
         },
         {
            nome: 'Giacomo',
            avatar:'_5',
            visible: true,
            messaggi:[
               {
                  dataMessaggio: '10/01/2020 15:30:55',
                  text:"Non c'è l'agvzzzz",
                  statoMessaggio: 'sent'
               },
               {
                  dataMessaggio: '10/01/2020 15:31:55',
                  text:"C'è la manetta!",
                  statoMessaggio: 'sent'
               },
               {
                  dataMessaggio: '10/01/2020 15:32:15',
                  text:'Proprio la baracca super hai comprato!',
                  statoMessaggio: 'received'
               },
            ]
         },
      ]
   },

   mounted(){

      

   },

   methods:{

      
   }

})

