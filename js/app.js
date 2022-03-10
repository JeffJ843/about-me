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
  alert('you are correct! ' + username);
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
  alert('did not understand ' + username) 
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
  alert('Your dope! ' + username);
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

let foods=["pizza", "chicken", "apple"];
let attempt=0;
while (attempt<=6){
  let answer7 = prompt("guess my favorite food");
  if (answer7==foods[0]) {
   alert("you guessed correct");
   break;
  } 
  else if (answer7==foods[1]) {
    alert("you guessed correct");
    break;
    
    
  }
  else if (answer7==foods[2]) {
    alert("you guessed correct");
    break;
   }
   else{
     alert('guess again');
     attempt++;
   }

}
if(attempt>=6){
  alert("you are out of guesses");
  
}