<script setup>
import question from "../components/question.vue"
import quizheader from "../components/quizheader.vue"
import result from "../components/result.vue"
import{useRoute} from "vue-router"
import { ref,computed } from 'vue';
import quizes from "../data/quizes.json"

const route =useRoute()
const quizid =parseIn(route.params.id);
const quiz =quizes.find(q =>q.id ===quizid)
const currentquestionIndex = ref(0);
const numberOfCorrectAnswers = ref(0)
const 
showResults = ref(false)




const questionStatus=computed(() => '@{currentquestionIndex.value}')
const barpercentage =computed(() => '${currentquestionindex.value/quiz.question}')
const onOptionSelected =(iscorrect) =>{
    if(iscorrect){
        numberOfCorrectAnswers.value++;

    }
    if(quiz.questions.length - 1=== currentQuestionIndex.value )
{
    showResults.value=true
}
    currentquestionIndex.value++
}

</script>
<template>

    <div>
        <quizheader 
        :questionStatus="questionStatus"
        :barpercentage="barpercentage"
        />
    <div>
        <question
        v-if="!showResults"
        :question="quiz.questions[currentquestionIndex]"
        @selectOption="onOptionSelected"
        />
        <result
         v-else
         :quizquestionlength="quiz.questions.length"
         :numberOfCorrectAnswers="numberOfCorrectAnswers"
         />
        </div>
    </div>

        <!--div>
        <header>
            <h4>question  1/3</h4>
            <div class="bar">
                <div class="completion"></div>
            </div>
        </header>
            <div>
           <div class="question-container">
            <h1> class="question">
                what is the chemical value of table salt
            </h1>
           </div>
           <div class="options-container">
<div class="option">
    <p class="option-label">A</p>
     <div class="option-value">
        <p>NACL</p>
     
</div>
</div>
<div class="option">
    <p class="option-label">B</p>
     <div class="option-value">
        <p>NACL</p>
     
</div>
</div>
<div class="option">
    <p class="option-label">C</p>
     <div class="option-value">
        <p>NACL</p>
     
</div>
</div>
<div class="option">
    <p class="option-label">D</p>
     <div class="option-value">
        <p>NACL</p>
     
</div>
</div>

</div></div -->
    
                
    
</template> 
<style scoped>
header {
    margin-top: 20px;

}
header h4{
    font-size: 30px;

}
.bar{
    width:300px;
    height: 50px;
    border: 3px solid  bisque;
}
.completion{
    height: 100%;
    width: 0%;
    background-color: bisque;

}
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
        
    }</style>