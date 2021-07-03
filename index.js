var readlineSync = require('readline-sync');
var userAnswer= readlineSync.question("whats your name? ");
console.log("welcome "+ userAnswer + " to our game");
console.log("lets start amazing quiz about our country")
var score =0;
var questions=[{
  question: `whats the capital of india?
  a:Delhi
  b:amritsar
  c:patiala
  d:chandigarh
  `,
  answer:"a"
},
{
  question: `whats the national bird of india?
  a:hen
  b:peacock
  c:cat
  d:dog
  `,
  answer:"b"
},
{
  question: `whats national currency of india?
  a:dllar
  b:dinar
  c:pound
  d:rupee
  `,
  answer:"d"
},
{
  question: `whats national currency of india?
  a:dllar
  b:dinar
  c:pound
  d:rupee
  `,
  answer:"d"
},
{
  question: `who was indias first PM?
  a:Jawahar lal Nehru
  b:Sardar Vallahbhai Patel
  c:Gandhi
  d:Saheed Udham Singh
  `,
  answer:"a"
},
{
  question: `Who started Non Cooperation Movement In india?
  a:GangadhR TILAK
  b:rabindra nath tagore
  c:Mahtma gandhi
  d:None of the above
  `,
  answer:"c"
},
{
  question: `Where did Salt act started?
  a:Mumbai
  b:Gujrat
  c:Cheenai
  d:Hyderabad
  `,
  answer:"b"
},
{
  question: `Young men to be hanged were?
  a:Bhagat singh
  b:sukhdev
  c:rajguru
  d:all of them
  `,
  answer:"d"
},
]
for(var i=0;i<questions.length;i++){
  var currentquestion= questions[i];
  play(currentquestion.question,currentquestion.answer);
}
function play(question,answer){
  var Question = readlineSync.question(question);
  if(Question === answer){
    console.log("right");
    score = score + 1;
  }else{
    score = score -1;
  }
}
console.log("score is " + score);