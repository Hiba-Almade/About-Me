
let userName = prompt('What is your name?');
alert('Hello '+userName+', welcome to my website.');
alert('I am Hiba, Can you expect some information about me?');


let studyUni = prompt('Do you think I graduated from university?').toLowerCase();
if(studyUni === 'yes' || studyUni === 'y') {
  alert('That\'s right, I graduated in 2021');
  //console.log('Correct answer for my studies');
} else if (studyUni === 'no' || studyUni === 'n') {
  alert('Wrong answer, I already graduated');
} else {
  alert('Please type (yes) or (no) or (y) or (n) in the next questions');
}


let coffee = prompt('Do you think I like coffee?').toLowerCase();
if(coffee === 'yes' || coffee === 'y') {
  alert('Yes, I drink a lot of coffee every day.');
  //console.log('Correct answer about coffee');
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
} else {
  alert('Please type (yes) or (no) or (y) or (n) in the next questions');
}


let tv = prompt('Do you think I like Watch TV?').toLowerCase();
if(tv === 'yes' || tv === 'y') {
  alert('Actually, I don\'t like watching TV.');  
} else if (tv === 'no' || tv === 'n') {
  alert('Exactly, I don\'t spend any time watching TV.');
  //console.log('Correct answer about watching TV.');
} else {
  alert('Please type (yes) or (no) or (y) or (n) in the next questions');
}




let sea = prompt('Do you think I visited the sea?').toLowerCase();
if(sea === 'yes' || sea === 'y') {
  alert('I wish it was the right answer but no.');  
} else if (sea === 'no' || sea === 'n') {
  alert('Yes, unfortunately, I have never been to the sea before, but I love it very much.');
  //console.log('Correct answer about the sea.');
} else {
  alert('Please type (yes) or (no) or (y) or (n) in the next time.');
}

alert('Nise to meet you '+ userName+ ', I think we became friends, you know a lot about me now ^_^');


