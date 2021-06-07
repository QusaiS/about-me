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

}


let age = prompt('Are you 18 year old or above').toLowerCase();


if (age === 'yes') {
  alert('Nice!!'); console.log('yes');
} else {alert('You are not allowed to access to this secret information'); console.log('no');
}

alert('Keep going, just 3 more questions! (:');

let secrets = prompt('Can you keep secrets as a secrets').toLowerCase();
console.log('secrets');

if (secrets === 'yes') { alert('Nice ! I will trust you ');
} else {
  alert('You need to know about discloses secrets disadvantage, ' + Name);
}

alert('Excelente, just 2 more questions! (:');

let enjoy = prompt('Are you enjoying chating with me').toLowerCase();

if (enjoy === 'yes') {
  alert('great');} else {
  alert('You have to improve your interaction with people  ' + Name);

}

alert('Excelente, last questions! (:');

let donate = prompt('Did you accept to pay 9999$ for this secret information').toLowerCase();
if (donate === 'yes'){
  alert('You can send the money using by Paypal');
} else {
  alert('As you like you are the loser:`( ' + Name);
}
