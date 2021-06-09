
let userName = prompt('What is your name?');

alert('Hello '+userName+', welcome to my website.\nI am Hiba, can you expect some information about me?');

let score=0;

let qs = [
  ['Do you think I graduated from university?', 'y','yes', 'That\'s right, I graduated in 2021', 'Wrong answer, I already graduated' ],
  ['Do you think I like coffee?', 'y','yes', 'Yes, I drink a lot of coffee every day.', 'In fact, I love coffee a lot and drink it all the time.' ],
  ['Do you think I like a dogs?', 'n', 'no','Yes, I love cats, not dogs.', 'Not really, I\'m afraid of dogs a lot.'],
  ['Do you think I like Watch TV?', 'n', 'no','Exactly, I don\'t spend any time watching TV.', 'Actually, I don\'t like watching TV.'],
  ['Do you think I visited the sea?', 'n', 'no','Yes, unfortunately, I have never been to the sea before, but I love it very much.', 'I wish it was the right answer but no.' ]
];

let yn = ['yes', 'y', 'no', 'n'];

// calling the three main functions
first(qs);
second();
third();

function first(qs){
  for (let i = 0; i < qs.length; i++){
    let ans = prompt(qs[i][0]).toLowerCase();

    while (yn.indexOf(ans) == -1) {
      ans = prompt(qs[i][0]).toLowerCase();
    }

    if (ans == qs[i][1] || ans == qs[i][2] ){
      alert(qs[i][3]);
      score++;
      console.log(score);
    } else {
      alert(qs[i][4]);
    }

  }

}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////


function second(){
  alert('Now, to the second section, which will require you to guess a number');
  let correctMonth = false;
  let month = prompt('Can you predict my birth month? Choose a number between (1-12), you have 4 attempts');
  for (let i = 4; i > 1; i--) {
    if (month == 6) {

      alert('Well done! I was born on June (6)');
      correctMonth = true;
      console.log('Correct answer about birth month.'); // testing
      score++;
      break;

    } else if (month > 6) {
      month = prompt('No, choose a number LESS than that. You have ' + (i - 1) + ' attempts left');

    } else if (month < 6) {
      month = prompt('No, choose a number MORE than that. You have ' + (i - 1) + ' attempts left');

    } else {
      month = prompt('No, please enter a valid value. You have' + (i - 1) + ' attempts left');

    }
  }
  if (correctMonth === false) {
    alert('Attempts ended, the correct answer was June (6)');
  }
}


function third(){
  let correctNumber = false;
  let stopWhile= false;
  let colors = ['blue', 'white', 'black'];
  let attempt=6;
  alert('Now, to the third and last section, which will require you to at least guess one of 3 favorite things.');
  let color=prompt('Can you guess which are my favorite colors?\nYou have 6 attempts').toLocaleLowerCase();
  while(attempt>1){
    for(let i=0; i<colors.length; i++){
      if(color == colors[i]){
        alert('Yes,'+[...colors]+' are my favorite colors.');
        correctNumber=true;
        stopWhile=true;
        console.log('Correct answer about the favorite color.'); // testing
        score++;
        break;
      }
    }
    if(stopWhile == true){
      break;
    }
    color =prompt('Wrong answer, try again.\nYou have '+(attempt-1)+' attempts left.');
    attempt--;
  }
  if(correctNumber == false){
    alert('Attempts ended, my favorite colors are Blue, Black and White.');
  }

  alert(`Thank you ${userName} for taking this quiz about me, and I hope we get to know each other better in the future.\nYou scored ${score} out of 7, ${(100/7)*score}%\nSee you soon!`);

}

// alert('Your score on my quiz is '+score+' out of 7. ('+ ((100/7)*score)+'%)');
// alert('Nise to meet you '+ userName+ ', I think we became friends, you know a lot about me now ^_^');


