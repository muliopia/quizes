<script setup> 
import { defineProps } from 'vue';
import {RouterLink} from "vue-router"
const {numberofcorrectanswer,quizquestionlength} =defineProps(["quizquestionlength","numberofcorrectanswer"])
</script>
<template>
    <div class="results">
        <p> your results.....</p>
        <h1>{{ numberofcorrectanswer }}/{{ quizquestionlength }}

        </h1>
        <RouterLink to="/">Go Back</RouterLink>
        
    </div>
</template>
<style scoped>
.results{
    <text-align:center;
    padding:100px 0;
}
</style>
