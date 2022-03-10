'use strict'

let username = prompt('What is your name');

let answerone = prompt(`Hey! ${username},do i like dogs?` ).toUpperCase();

if (answerone === 'Y' || answerone === 'YES'){
  alert('you are correct!');
}else if(answerone === 'N' || answerone === 'NO') {
  alert('sorry, you are incorrect')
}else{
  alert('Oh ok')
}

let answertwo = prompt('Do You see?').toUpperCase();

if (answertwo === 'Y' || answertwo === 'YES'){
  alert('you are correct!');
}else if(answerone === 'N' || answerone === 'NO') {
  alert('sorry, you are incorrect')
}else{
  alert('did not understand')
}

let answerthree = prompt('Are you human by chance').toUpperCase();

if (answerthree === 'Y' || answerthree === 'YES'){
  alert('you are correct!' + username);
}else if(answerthree === 'N' || answerthree === 'NO') {
  alert('sorry, you are incorrect')
}else{
  alert('did not understand')
}

let answerfour= prompt('does the sun always come out?').toUpperCase();

if (answerfour === 'Y' || answerfour === 'YES'){
  alert('you are correct!' + username);
}else if(answerfour === 'N' || answerfour === 'NO') {
  alert('sorry, you are incorrect')
}else{
  alert('did not understand')
}

let answerfive = prompt('Had fun? ' ).toUpperCase();

if (answerfive === 'Y' || answerfive === 'YES'){
  alert('Good for you! ' + username);
}else if(answerfive === 'N' || answerfive === 'NO') {
  alert('how rude ' + username)
}else{
  alert('did not understand' + username) 
}

let tries = 0; 
// let answer6 = prompt("Guess a number between 1-10");
let correct_ans= 6;

while (tries < 4){
  let answer6 = prompt("Guess a number between 1-10");
  let anything =parseInt(answer6)
  // console.log (typeof anything)
  // console.log(typeof answer6)
if(anything === 6){
  alert('Your dope!' + username);
  break


} else if (anything > 6){
  tries++
  console.log(tries)
  alert('Sorry answer is too high try again')
}

else if (anything < 6){
  tries++
  console.log(tries)
  alert('Sorry answer is too low try again')
}


}

// let attemps =0;
// let answers = [1,6]; // correct answer answer [0]=1  answer[1]=6
// let temp =0;

// while(attemps < 6){

//   //question
//   let answer7 = prompt()
// }