
let userName = prompt('What is your name?');
alert('Hello '+userName+', welcome to my website.');
alert('I am Hiba, Can you expect some information about me?');

let score=0;
let studyUni = prompt('Do you think I graduated from university?').toLowerCase();
if(studyUni === 'yes' || studyUni === 'y') {
  alert('That\'s right, I graduated in 2021');
  //console.log('Correct answer for my studies');
  score++;
} else if (studyUni === 'no' || studyUni === 'n') {
  alert('Wrong answer, I already graduated');
} else {
  alert('Please type (yes) or (no) or (y) or (n) in the next questions');
}


let coffee = prompt('Do you think I like coffee?').toLowerCase();
if(coffee === 'yes' || coffee === 'y') {
  alert('Yes, I drink a lot of coffee every day.');
  //console.log('Correct answer about coffee');
  score++;
} else if (coffee === 'no' || coffee === 'n') {
  alert('In fact, I love coffee a lot and drink it all the time.');
} else {
  alert('Please type (yes) or (no) or (y) or (n) in the next questions');
}


let dog = prompt('Do you think I like a dogs?').toLowerCase();
if(dog === 'yes' || dog === 'y') {
  alert('Not really, I\'m afraid of dogs a lot.');  
} else if (dog === 'no' || dog === 'n') {
  alert('Yes, I love cats, not dogs.');
  //console.log('Correct answer about dogs');
  score++;
} else {
  alert('Please type (yes) or (no) or (y) or (n) in the next questions');
}


let tv = prompt('Do you think I like Watch TV?').toLowerCase();
if(tv === 'yes' || tv === 'y') {
  alert('Actually, I don\'t like watching TV.');  
} else if (tv === 'no' || tv === 'n') {
  alert('Exactly, I don\'t spend any time watching TV.');
  //console.log('Correct answer about watching TV.');
  score++;
} else {
  alert('Please type (yes) or (no) or (y) or (n) in the next questions');
}




let sea = prompt('Do you think I visited the sea?').toLowerCase();
if(sea === 'yes' || sea === 'y') {
  alert('I wish it was the right answer but no.');  
} else if (sea === 'no' || sea === 'n') {
  alert('Yes, unfortunately, I have never been to the sea before, but I love it very much.');
  //console.log('Correct answer about the sea.');
  score++;
} else {
  alert('Please type (yes) or (no) or (y) or (n) in the next time.');
}


let correctMonth = false;
let month = prompt('Can you predict my birth month? Choose a number between (1-12), you have 4 attempts');
for (let i = 4; i > 1; i--) {
  if (month == 6) {
    alert('Well done, I was born in the month of June (6)');
    correctMonth = true;
    //console.log('Correct answer about birth month.');
    score++;
    break;

  } else if (month > 6) {
    month = prompt('No. Choose a number less than that. You have ' + (i - 1) + ' attempts left');

  } else if (month < 6) {
    month = prompt('No. Choose a number more than that. You have ' + (i - 1) + ' attempts left');

  } else {
    month = prompt('No.Please enter a valid value. You have' + (i - 1) + ' attempts left');

  }
}
if (correctMonth === false) {
  alert('Attempts ended, the correct answer was 6');
}



let correctNumber = false;
let stopWhile= false;
let favNumber = [6, 28, 19, 9, 36];
let attempt=6;
let number=prompt('There are a bunch of my favorite numbers, can you guess one of them? You have 6 attempts.');
while(attempt>1){
  for(let i=0; i<favNumber.length; i++){
    if(number == favNumber[i]){
      alert('Yes,'+number+' is one of my favorite group of numbers');
      correctNumber=true;
      stopWhile=true;
      //console.log('Correct answer about the favorite day.');
      score++;
      break;
    }
  }
  if(stopWhile == true){
    break;
  }
  number=prompt('Wrong answer, try again. You have '+(attempt-1)+' attempts left');
  attempt--;
}
if(correctNumber == false){
  alert('Attempts ended, the correct answer was (6, 28, 9, 19, 36)');
}

alert('Your score on my quiz is '+score+' out of 7. ('+ ((100/7)*score)+'%)');

alert('Nise to meet you '+ userName+ ', I think we became friends, you know a lot about me now ^_^');

