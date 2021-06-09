'use strict';
// eslint-disable-next-line no-unused-vars
let right = 0;
'use strict';
alert('Hello, you are attended to view a very secret information about me');
alert('Before that i had to test if you are accepted to view it or not');
alert('Okay, lets go');

let Name = prompt('Type your name');
alert('Hello ' + Name);
// console.log(Name);
alert("Pleas Answer With Yes ,No , y ,n");
function qus(quest, correctAns, uncorrescAns) {
  let myprompt;

  do {
    
    myprompt = prompt(quest).toLowerCase();
  } while (myprompt !== "yes" && myprompt !== "y" && myprompt !== "no" && myprompt !== "n");

  if (myprompt === "yes" || myprompt === "y") {
    alert(correctAns);
  } else {
    alert(uncorrescAns);
  }
}



qus('Is it clear?', 'You Have A Correct Answer', 'You Have UnCorrect Answer is');
qus('Are you 18 year old or above', 'You Have A Correct Answer', 'You Have UnCorrect Answer is');
qus('Can you keep secrets as a secrets', 'You Have A Correct Answer', 'You Have UnCorrect Answer is');
qus('Are you enjoying chating with me', 'You Have A Correct Answer', 'You Have UnCorrect Answer is');
qus('Did you accept to pay 9999$ for this secret information', 'You Have A Correct Answer', 'You Have UnCorrect Answer is');



for (let i = 0; i < 4; i++) {
  let age1 = prompt('can you giss my age its betwwen 20 and 30 ?');
  let age = Number(age1);

  if (age === 23) {
    alert('Thats right(:) ');
    right++;// console.log(age);
    break;

  } else if (23 > age) {
    alert('hot ');

  } else if (23 < age) {
    alert('cold ');

  } else {
    alert('I told you my age between 20 and 30');

  }
}



let hobby = ['swimming', 'Boxing', 'eating', 'fighting', 'sleeping'];
for (let b = 0; b < 6; b++) {
  let hobby1 = prompt('Guess my hobby').toLowerCase();
  if (hobby1 === hobby[0] || hobby1 === hobby[1] || hobby1 === hobby[2] || hobby1 === hobby[3] || hobby1 === hobby[4] || hobby1 === hobby[5]) {
    right++;// console.log(hobby1);
    // eslint-disable-next-line no-unused-vars

    break;
  } else (hobby1 !== hobby[0] || hobby1 !== hobby[1] || hobby1 !== hobby[2] || hobby1 !== hobby[3] || hobby1 !== hobby[4] || hobby1 !== hobby[5]); {
    alert(' hint :choose between: Swimming, eating, dancing, reading, racing');
  }

}

alert('your score is ' + right + ' from 7')
