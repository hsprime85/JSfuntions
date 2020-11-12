'use strict';
/*
const bookings = [];
const createBooking = function(
    flightNum, 
    numPassengers=1, 
    price=199 * numPassengers
){
    // ES5
    // numPassengers = numPassengers || 1;
    // price = price || 199;

    const booking = {
        flightNum,
        numPassengers,
        price
    }
    console.log(booking);
    bookings.push(booking);
}

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);
createBooking('LH123', undefined, 1000);
*/ 

/*
const flight = 'LH234';
const hanson = {
    name: 'Hanson Jeon',
    passport: 5151515215
}

const checkIn = function(flightNum, passenger){
    flightNum = 'LH999';
    passenger.name = 'Mr. ' + passenger.name;
    if(passenger.passport === 5151515215){
        alert('Check In');
    } else {
        alert('Wrong passport!')
    }
}

// checkIn(flight, hanson)
// console.log(flight);
// console.log(hanson);

// const flightNum = flight;
// const passenger = hanson;

const newPassport = function(person){
    person.passport = Math.trunc(Math.random() * 1000000000);
}
newPassport(hanson);
checkIn(flight, hanson)
*/
/*
const oneWord = function(str) {
    return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function(str){
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
};

// higher-order function
const transformer = function(str, fn) {
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);
    console.log(`Transformed by: ${fn.name}`);
}

transformer('JavaScript is the best!', upperFirstWord)
transformer('JavaScript is the best!', oneWord)


// JS uses callbacks all the time
const high5 = function() {
    console.log('👋');
}
document.body.addEventListener('click', high5);
['Hanson', 'Martha', 'Adam'].forEach(high5);
*/

/*
const greet = function(greeting){
    return function(name){
        console.log(`${greeting} ${name}`);
    }
}
const greeterHey = greet('hey');
greeterHey('Hanson');
greeterHey('Jonas');
greet('hello')('Hyunsoo');

// challenge
const greetArr = greeting => name => console.log(`${greeting} ${name}`);
greet('hello')('Jeon');
*/

/*
const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    book(flightNum, name){
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`);
        this.bookings.push({flight: `${this.iataCode} ${flightNum}`, name})
    }
}

lufthansa.book(239, 'Hyunsoo Jeon');
lufthansa.book(635, 'John Smith');
console.log(lufthansa);

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
};

const book = lufthansa.book;

book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Marry Cooper')
console.log(lufthansa);

const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    bookings: [],
}

book.call(swiss, 583, 'Hanson Jeon');
book.call(swiss, 456, 'Robert Downy');
console.log(swiss);

// apply method
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);


// bind method
// book.call(eurowings, 23, 'Sarah Williams')
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Rogers');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Hanson Jeon');
bookEW23('Bruce Banner');

// with event listener
lufthansa.planes = 300;
lufthansa.buyPlane = function(){
    console.log(this);
    this.planes++;
    console.log(this.planes);
}
// lufthansa.buyPlane();

document
    .querySelector('.buy')
    .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));


// partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23;

console.log(addVAT(100));

const addTaxRate = function(rate) {
    return function(value){
        return value + value * rate;
    }
}
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
*/

/*

// Coding Challenge #1
Let's build a simple poll app!
A poll has a question, an array of options from which people can choose, 
and an array with the number of replies for each option. 
This data is stored in the starter 'poll' object below.

Your tasks:
1. Create a method called 'registerNewAnswer' on the 'poll' object.
The method does 2 things:
1.1. Display a prompt window for the user to input the number of the
selected option. 
The prompt should look like this: What is your favourite programming language?
0: JavaScript
1: Python
2: Rust
3: C++
(Write option number)

1.2. Based on the input number, update the 'answers' array property. 
For example, if the option is 3, increase the value at position 3 of the array by 1. 
Make sure to check if the input is a number and if the number makes sense (e.g. answer 52 wouldn't make sense, right?)

2. Call this method whenever the user clicks the "Answerpoll" button.

3. Create a method 'displayResults' which displays the poll results.
The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). 
This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1".

4. Runthe'displayResults'methodattheendofeach 'registerNewAnswer' method call.

5. Bonus : Use the 'displayResults' method to display the 2 arrays in the test data. 
Use both the 'array' and the 'string' option. Do not put the arrays in the poll object! So what should the this keyword look like in this situation?

Test data for bonus:
Data1:[5,2,3]
Data2:[1,5,3,9,6,1]

Hints: Use many of the tools you learned about in this and the last section 
😉 GOOD LUCK 😀
*/ 

/*
const poll = {
    question: "What is your favorite programming language?", 
    options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
    // This generates [0, 0, 0, 0]. More in the next section! 
    answers: new Array(4).fill(0),
    registerNewAnswer(){
        // get answer
        const answer = Number(prompt(`${this.question}\n${this.options.join('\n')}\n(Write option number)`));
        console.log(answer);
        // register answer
        typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++;
        this.displayResults();
        this.displayResults('string');
        },
    displayResults(type = 'array'){
        if(type === 'array') {
            console.log(this.answers);
        } else if( type === 'string'){
            console.log(`Poll results are ${this.answers.join(', ')}`);
        }
    }
};
// poll.registerNewAnswer();

document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll))

poll.displayResults.call({answers:[5, 2, 3]}, 'string' )
poll.displayResults.call({answers:[1, 5, 3, 9, 6, 1]}, 'string' )
poll.displayResults.call({answers:[1, 5, 3, 9, 6, 1]})
// [5, 2, 3]
// [1, 5, 3, 9, 6, 1]

*/

/*
const runOnce = function() {
    console.log('this will never run again');
}
runOnce();


(function() {
    console.log('this will never run again');
    const isPrivate = 23;
})();


(() => console.log('this will also never run again'))();

{
    const isPrivate = 23;
    var notPrivate = 20;
}
// console.log(isPrivate);
console.log(notPrivate);
*/

/*
const secureBooking = function() {
    let numPassengerCount =0;

    return function(){
        numPassengerCount++;
        console.log(`${numPassengerCount} passengers`);
    }
}

const booker = secureBooking();

booker();
booker();
booker();
booker();

console.dir(booker);
*/

/*
// example1 
let f;

const g = function(){
    const a = 23;
    f = function(){
        console.log(a * 2);
    };
};

const h = function(){
    const b = 777;
    f = function(){
        console.log(b*2);
    }
}


g();
f();
console.dir(f);

// re-assigning f function
h();
f();
console.dir(f);

// example 2
const boardPassengers = function(n, wait){
    const perGroup = n / 3;

    setTimeout(function(){
        console.log(`we are now boarding all ${n}`);
        console.log(`there are 3 groups, each with ${perGroup} passengers`);
    }, wait * 1000);

    console.log(`will start boarding in ${wait} seconds`);
}

const perGroup = 1000;
boardPassengers(180, 3)
*/

/*
Coding Challenge #2
This is more of a thinking challenge than a coding challenge 🤓 Your tasks:
1. Take the IIFE be low and at the end of the function, attach an eventlistener that changes the color of the selected 
h1 element ('header') to blue, each time the body element is clicked. Do not select the h1 element again!
2. And now explain to yourself(or someone around you) why this worked! Takea ll the time you need. 
Think about when exactly the callback function is executed, and what that means for the variables involved in this example.
*/
/*
(function () {
    const header = document.querySelector('h1'); 
    header.style.color = 'red';

    document.querySelector('body').addEventListener('click', function(){
        header.style.color = 'blue';
    })
})();
*/ 