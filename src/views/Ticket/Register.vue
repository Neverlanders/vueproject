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
        this.Gstore.flashMessage = "";
      }, 4000)
    }
  }
};
</script>

<style scoped></style>