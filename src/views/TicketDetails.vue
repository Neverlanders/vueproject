<template>
  <div class="card border-dark mb-3 d-block mx-auto" style="max-width:18rem;">
    <div class="card-header">{{singleEvent.title}}</div>
    <div class="card-body text-dark">
      <h5 class="card-title">{{singleEvent.date}} - {{singleEvent.time}}</h5>
      <p class="card-text">
        {{singleEvent.description}}
      </p>
      <p class="alert-danger">Locatie:{{singleEvent.location}}</p>
    </div>
  </div>
</template>

<script>
import TicketService from "../services/TicketService";
export default {
  name: "TicketDetails",
  data(){
    return{
      event:null,
      id:1
    }
  },
  created(){
    TicketService.getEvent(this.id).then(response => {
      this.event = response.data;
    }).catch(error => {console.log(error)})
  }
}
</script>

<style scoped>

</style>