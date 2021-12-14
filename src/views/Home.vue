<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Ticket v-for="event in events" :key="event.id" :singleEvent="event"></Ticket>
  </div>
</template>

<script>
// @ is an alias to /src
import Ticket from "@/components/Ticket.vue";
//import axios from "axios";
import TicketService from "../services/TicketService";

export default {
  name: "Home",
  components: {
    Ticket,
  },
  data(){
    return{
      events: null
    }
  },
  created(){
    TicketService.getEvents().then(response =>{
      this.events = response.data;
    }).catch(error =>{console.log(error)})
  }
};
</script>
