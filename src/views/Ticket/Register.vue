<template>
  <h1>Dit is de Register pagina.</h1>
</template>

<script>

export default {
  props: ["event"],
  inject:["GStore"],
  methods:{
    register(){
      this.GStore.flashMessage = "U bent geregistreerd voor " + this.event.title;
      setTimeout(()=>{
        this.GStore.flashMessage = "";
      }, 4000);
      this.$router.push({
        name: "TicketDetails",
        params: { id: this.event.id}
      })
    }
  }
};
</script>

<style scoped></style>