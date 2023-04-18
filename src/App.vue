<script setup>

import {RouterView} from "vue-router"
import quizesview from "./views/quizesview.vue"
</script>
<template>
  
  <div class="container"> 
    <quizesview/>
    
    </div>
</template>
<style scoped>
.container{
  max-width: 1000px;
  margin: auto
  
}
</style>