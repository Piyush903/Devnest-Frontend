let questions = [
    {
        question :"What does HTML stand for?",
        choiceA : "Hyperlinks and Text Markup Language",
        choiceB : "Hyper Text Markup Language",
        choiceC : "Home Tool Markup Language",
        choiceD : "None",
        correct : "B"
    },{
        question :"Choose the correct HTML tag for the largest heading?",
        choiceA : "<heading>",
        choiceB : "<h1>",
        choiceC : "<h6>",
        choiceD : "none",
        correct : "B"
    },{
        question :"Which of these tags are all <table> tags?",
        choiceA : "<table><head><tfoot>",
        choiceB : "<table><tr><td>",
        choiceC : "<table><tr><tt>",
        choiceD : "none",
        correct : "B"
    }
];
const question=document.querySelector('.question');
const option1=document.querySelector('#ot1');
const option2=document.querySelector('#ot2');
const option3=document.querySelector('#ot3');
const option4=document.querySelector('#ot4');
const submit=document.querySelector('#submit');
  var answers=document.querySelectorAll('.ans');
  var showscore=document.querySelector('#showscore');

let questioncount=0;
let score=0;


const loadquestion=()=>{
    let questionlist=questions[questioncount];
    question.innerText=questionlist.question;
    option1.innerText =questionlist.choiceA;
    option2.innerText=questionlist.choiceB;
    option3.innerText=questionlist.choiceC;
    option4.innerText=questionlist.choiceD;
}
loadquestion();

const getcheckans=()=>{
let answer;
answers.forEach((curranselement)=>{
    if(curranselement.checked){
        answer=curranselement.id;
    }
     });
return answer;

}

const deselectAll=()=>{
answers.forEach((curranselement)=>curranselement.checked=false);
}
submit.addEventListener('click',()=>{
const checkanswer=getcheckans();
console.log(checkanswer);

if(checkanswer===questions[questioncount].correct){
    score++;
};
questioncount++;
deselectAll();
if(questioncount<questions.length){
    loadquestion();
}
else
{
 showscore.innerHTML=`<h3>You scored ${score}/${questions.length}</h3>
 <button class="btn" onclick="location.reload()">Play again</button>
 `;
 showscore.classList.remove('score');
}
});