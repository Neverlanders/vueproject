<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Ticket v-for="event in events" :key="event.id" :singleEvent="event"></Ticket>
  </div>
</template>

<script>
// @ is an alias to /src
import Ticket from "@/components/Ticket.vue";

export default {
  name: "Home",
  components: {
    Ticket,
  },
  data(){
    return{
      events:[{
        id:1,
        category:'concert',
        title: 'Tomorrow Land',
        description: 'Festival op de Schorre',
        location: 'Boom',
        date: 'August 08 2021',
        time: '09:00'
      },
        {
          id:2,
          category:'concert',
          title: 'Rock Werchter',
          description: 'Festival Rock',
          location: 'Werchter',
          date: 'July 04 2021',
          time: '09:00'
        }
      ],

    }
  }
};
</script>
