<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Ticket
      v-for="event in events"
      :key="event.id"
      :singleEvent="event"
    ></Ticket>
    <router-link
      class="btn btn-primary me-1"
      :to="{ name: 'Home', query: { page: page - 1 } }"
      v-if="page != 1"
      rel="prev"
    >
      Vorige</router-link
    >
    <router-link
      class="btn btn-primary"
      :to="{ name: 'Home', query: { page: page + 1 } }"
      rel="next"
      v-if="hasNextPage"
    >
      Volgende</router-link
    >
  </div>
</template>

<script>
// @ is an alias to /src
import Ticket from "@/components/Ticket.vue";
//import axios from "axios";
import TicketService from "../services/TicketService";
import {watchEffect} from "vue";

export default {
  name: "Home",
  props: ["page"],
  components: {
    Ticket,
  },
  data() {
    return {
      events: null,
      totalEvents: 0
    };
  },
  created() {
    watchEffect(()=>{
      this.events = null
      TicketService.getEvents(2, this.page)
          .then((response) => {
            this.events = response.data;
            this.totalEvents = response.headers['x-total-count']
          })
          .catch((error) => {
            console.log(error)
          })
    })

  },
  computed:{
    hasNextPage(){
      var totalPages = Math.ceil(this.totalEvents/2)
      return this.page < totalPages
    }
  }
};
</script>
