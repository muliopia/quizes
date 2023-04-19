<script setup>
import { defineProps,defineEmits } from 'vue';
const emit =defineEmits(["selectoption"])

const {question} =defineProps(["question"])

const emitSelectedOption =(isCorrect) =>{
    emit("selectOption",isCorrect)
}

</script>
<template>
    <div class="question-container">

        <h1 class="question">{{question.text}}</h1>
       
    </div>
    <div class="option-container">
        <div
        v-for ="option in question.options"
        :key="option.id"
        class="option"
        @click="emitSelectedOption(option.iscorrect)"
>
<p class ='option-label'>{{ option.label }}</p> 
<div class="option-value">
    <p>{{ option.text }}</p>
</div>

</div>
    </div>
    
</template>
<style scoped>

.question-container{
    margin-top: 20px;

}
.question{
    font-size: 40px;
    margin-top: 20px;

}
.option{
    display: flex;
    margin-bottom: 20px;
    cursor: pointer;
    }
    .option-label{
        background-color: bisque;
        width: 60px;
        height:60px;
        font-size:30px;
        display:flex;
        align-items: center;
        justify-content: center;

    }
    .option-value{
        background-color: rgb(249,239,239);
        width: 100%;
        font-size: 30px;
        padding: 0 20px;
    }
        
</style>