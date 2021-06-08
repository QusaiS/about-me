'use strict';
// eslint-disable-next-line no-unused-vars
let right=0;
'use strict';
alert('Hello, you are attended to view a very secret information about me');
alert('Before that i had to test if you are accepted to view it or not');
alert('Okay, lets go');

let Name = prompt('Type your name');
alert('Hello ' + Name);
console.log(Name);

alert('Now just answer with yes or no okey  ' + Name + '?');
let clear = prompt('Is it clear?').toLowerCase();
if (clear === 'yes') { alert('Thats good!');
} else {
  alert('You are not allowed to access to this secret information');
  // eslint-disable-next-line no-unused-vars
  right++;
}


let age = prompt('Are you 18 year old or above').toLowerCase();


if (age === 'yes') { right++;
  alert('Nice!!'); console.log('yes');
} else {alert('You are not allowed to access to this secret information'); console.log('no');
}

alert('Keep going, just 3 more questions! (:');

let secrets = prompt('Can you keep secrets as a secrets').toLowerCase();
console.log('secrets');

if (secrets === 'yes') { 
  right++;
  alert('Nice ! I will trust you ');
} else {
  alert('You need to know about discloses secrets disadvantage, ' + Name);
}

alert('Excelente, just 2 more questions! (:');

let enjoy = prompt('Are you enjoying chating with me').toLowerCase();

if (enjoy === 'yes') {
  alert('great');} else {
  alert('You have to improve your interaction with people  ' + Name);
 // eslint-disable-next-line no-unused-vars
 right++;
}

alert('Excelente, last questions! (:');

let donate = prompt('Did you accept to pay 9999$ for this secret information').toLowerCase();
if (donate === 'yes'){
  alert('You can send the money using by Paypal')
  right++;
} else {
  alert('As you like you are the loser:`( ' + Name);
}


for (let i = 0; i < 4; i++) {
  let age1 = prompt('can you giss my age its betwwen 20 and 30 ?');
  let age = Number(age1);

  if (age === 23) {
    alert('Thats right(:) ');

    break ;

  } else if (23>age){
    alert('hot ');

  } else if (23<age) {
    alert('cold ');

  } else {
    alert ('I told you my age between 20 and 30');

  } }



let hobby =['swimming', 'Boxing', 'eating','fighting','sleeping'];
for(let b =0; b<6;b++){
  let hobby1 = prompt('Guess my hobby').toLowerCase();
  if (hobby1 === hobby[0] || hobby1 === hobby[1] || hobby1 ===hobby[2] ||hobby1 ===hobby[3] ||hobby1 ===hobby[4] ||hobby1 ===hobby[5] ){
    // eslint-disable-next-line no-unused-vars

    break;
  } else (hobby1 !== hobby[0] || hobby1 !==hobby[1] || hobby1 !== hobby[2] || hobby1 !== hobby[3] || hobby1 !== hobby[4] || hobby1 !== hobby[5] );{
    alert(' hint :choose between: Swimming, eating, dancing, reading, racing');}


}

alert('your score is '+right+' from 7')