<template>
  <h1>De {{ resource }} die u zoekt is niet langer aanwezig!</h1>
  <router-link class="btn btn-success" :to="{name:'Home'}">Home</router-link>
</template>
<script>
export default{
  props:{
    resource:{
      type:String,
      required:true,
      default: 'pagina'
    }
  }
}
</script>