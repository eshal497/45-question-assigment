// assigment solution 

// TASK 1 Install Nodejs , Typescript & VS Code on your computer 

//Task 2
"use strict";
let personName: string = "Eric";
console.log(`hello ${personName}, would you like to learn some python today?`)

//Task 3
let personName: string = "Eshal khan";

//in lowercase
console.log("lowercase :", personName.toLowerCase());

i//n uppercase
console.log("uppercase:", personName.toUpperCase());

//in titlecase
console.log("titlecase:", personName.replace(/\b\w/g,c=> c.toUpperCase()));

//Task 4
let quote: string = "A person who never make a mistake never tried anything new ";
let author: string = "Albert Einstein";
console.log(`${author} once said,"${quote} "`);
 
//Task 5

 let famous_person: string = "Albert Enistein";
 let message: string = `${famous_person} once said," ${quote}"`;
 console.log(message);

 //Task 6
 //whiteSpace character \n,\t;
 let personName: string = "\t\n eshal khan \n\t";
 console.log("original:" personName)
 console.log("stripped:",personName.trim())

 //task 7

console.log(5+3);
console.log(10-2);
console.log(4*2);
console.log(16/2);

//Task 8
Author {Eshal khan}
Date [Thursday - feburary 15 - 2024] :

// 9. Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
var favorite_number = '13';
var message = 'here is your favorite number' + favorite_number;
console.log(message);

// 10. Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write
// because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence
// describing what the program does.


//program by:eman anees khan
// purpose :write name of governer sindh kamran khan  tessori
console.log (" governer sindh kamran khan tesori ")


//program by :eman anees khan
//thankfulnote to governer sindh kamran khan tessori
var personName :string ='thankful note';
var message :string = 'governer sindh kamran khan tessori';
console.log(`${personName} to ${message}`);


//Task 11

//Array work like a variable 
let names : string [] = ["Emily","Ryan","Piper","Kevin"];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);

//Task 12
let name : string [] = ["Emily","Ryan","Piper","Kevin"];

let message : string = "Do you like to play hockey?"
console.log(names[0] +" "+ message);
console.log(names[1] +" "+ message);
console.log(names[2] +" "+ message);
console.log(names[3] +" "+ message);

//Task 13
//let transporation : string [] = ["Honda Motorcycle","Audi","Porches","BMW "];
//transporation.map((items) => console.log(`I would like to own a ${items}`));

//Task 14
//let guestArr : string [] = ["Emily","Ryan","Kevin"];

//guestArr.map((items) =>(console.log (`Dear ${items} , you are invited for dinner`)));  

//Task 15
//let guestArr : string[] = ["Allison","Harry","Terry","Sahra"];
//let canNotAttend : string = "Sahra";
//console.log(canNotAttend + " " "can not attend the dinner." );

//let newGuest : string = "Jennie"
//guestArr [guestArr.indexOf(canNotAttend)] = newGuest;
//console.log(guestArr);

//guestArr.map((items) => (console.log(`Dear ${items} you are invited to the dinner.`)));

//Task 16
let guestArr : string[] = ["Allison","Harry","Terry","Jennie"];
let canNotAttend : string = "Harry"

 let newGuest : string = "Meghan";
guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
console.log(guestArr)

//guestArr.map((items) => (console.log(`Dear ${items}, I found a bigger table so i invited more people.`)));

//Part 2
//let guestBeg : string = "Willam";
//guestArr.unshift(guestBeg);
//console.log(guestArr)

//part 3 middle
//let middleguest : string = "Rose"
//let middleIndex = guestArr.lenght/3;
//guestArr.splice(middleIndex,0,middleguest)
//console.log(guestArr)

//part 4 append
//guestArr.push("Lilly")
//console.log(guestArr);

//Part 5
//guestArr.map((items) => (console.log(`Dear ${items}, you are invited for dinner with other people`)))

//Task 17 

//Initial list of guest
let guests : string[] = ["Maddison", "Nia","Celine","Abby"] ;

//informed the only two people invited/console.log("Due to limited space, on the table only two people are invited.");

//Removing guest until only two name remain
while (guests.length > 2) {
 const removedguest = guests.pop();
 //remove the last guest from the list
 console.log(`sorry, ${removedguest} , you're no longer invited for the dinner.`);
};

//if you want to invited only two people youn can remove 32 name from the string
// //Printing invition for remaining two guest
guests.forEach((guests) => {
    console.log(`Dear ${guests},you're still invited for the dinner.`)
});
//if you want to remove someone you use pop
//Removing the last two name form the list
//guests.pop();
//guests.pop(); 

//printing the final list to confirm it empty
//console.log("Final guest list:",guests); 

//on stageoverflow u can finf solution

//Task no 18
//store the location on array

//let placeToVisit: string[] = ["Tokyo" , "Norway","Japan","China" ,"Russia" ];

//print the Array in its orginal order
//console.log("Original order:", placeToVisit);

//print the order in alphabetical order without modifying the actual list
//console.log("alphabetic order:", placeToVisit);

//print the array in its original order
//console.log("Alphabetical order:", [...placeToVisit].sort());

//show that the array is still in its original order
//console.log("Original order after sorting:", placeToVisit);

//print the array in reverse alphabetical order without changing the order of the original list
//console.log("Reverse alphabetical order:", [...placeToVisit].sort().reverse());

//show that the array is still in it original position
//console.log("Original order after reverse sorting:", placeToVisit);

//Reverse the order of the list
//placeToVisit.reverse();
//console.log("Reversed order:", placeToVisit);

//Reverse the order of the list again to get back to original order
//placeToVisit.reverse();
//console.log("Back to Original order:", placeToVisit);

//sort the arr   ay in alphabetical order
//placeToVisit.sort((a,b) => b.localeCompare(a));
//console.log("Sorted in reverse alphabetical order:", placeToVisit)

//Task 19
let invitation: string[] = [ "Marie Curie", "Leonardo da Vinci",  "Charles Darwin"];
let count_invitation : number = invitation.length

console.log(`${count_invitation} people will come to the dinner.`);

//Task 20
let countries: string[] = ["Japan", "Canada", "New Zealand", "Iceland", "Switzerland"]
console.log("List of countries")
console.log(countries)

//Task 21
let person: {name: string, fname:string, age:number
} = {name: "Eshal", fname:"Female", age:16}
console.log(person)

//Task 22
const days : string [] = ["Sunday","Monday","Tuesday","Thursday","Friday","Saturaday"]
console.log(days[6]);

//Task 23

let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'toyota')


// True testor

//1 
let mode = 'dark';

console.log("is car == `dark`? I predict true")

console.log(mode == 'light')

//2
let color = 'blue';

console.log("is color == `blue`? I predict true")

console.log(color == 'blue')

//3
let position = 'second';

console.log("is position == `second`? I predict true")

console.log(position == 'second')

//4
let city = 'karachi';

console.log("is city == `karachi`? I predict true")

console.log(city == 'karachi')

//5
let shape = 'circle';

console.log("is shape == `circle`? I predict true")

console.log(shape == 'circle')

//False testor

//1 false
let country = 'pakistan';

console.log("is country == `pakistan`? I predict true")

console.log(country == 'dubai')

// part 2
let subject = 'chemistry';

console.log("is subject == `chemistry`? I predict true")

console.log(subject == 'physics')

// part 3
let operation = 'divide';

console.log("is operation == `divide`? I predict true")

console.log(operation == 'multiplication')

//part 4
let object = 'cupboard';

console.log("is object == `cupboard`? I predict true")

console.log(object == 'table')

//part 5
let gender = 'girl';

console.log("is gender == `female`? I predict true")

console.log(gender == 'male')

//Task 24

let name1:string ='Eshal';
let name2:string ='Eshal Khan';
let name3:string ='Eshal khan';

if (name1 != name3){
    console.log ("names are equal")
} else {
    console.log("names are not equal")
}

if (name1 != name2){
    console.log ("names are equal")
} else {
    console.log("names are not equal")
}
 
//Task 25


var alien_color:string = "red";

if (alien_color == 'red'){
console.log(`congratulations you earned 5 points`)
}


var alien_color:string = "blue";
if (alien_color == 'red'){
console.log(`no output`)
}

//task 26
  

var aliencolor :string = 'red';
if (aliencolor === 'green'){
    console.log(`congratulations you earned 5 points`)
} else {
    console.log(`congratulations you earned 10 points`)
}

//Task 27

var aliencolor :string = 'red';

 if (aliencolor == 'green'){
    console.log(`congratulations you earned 5 points`);
} else if (aliencolor == 'yellow') {
    console.log(`congratulations you earned 10 points`);
} else if (aliencolor == 'red') {
    console.log (`congratulations you earned 15 points`);
}


var aliencolor :string = 'green';
 if (aliencolor == 'green'){
    console.log(`congratulations you earned 5 points`);
} else if (aliencolor == 'yellow') {
    console.log(`congratulations you earned 10 points`);
} else if (aliencolor == 'red'){
    console.log (`congratulations you earned 15 points`);
}


var aliencolor :string = 'yellow';
 if (aliencolor == 'green'){
    console.log(`congratulations you earned 5 points`)
} else if (aliencolor == 'yellow') {
    console.log(`congratulations you earned 10 points`)
} else if(aliencolor == 'green') {
    console.log (`congratulations you earned 15 points`)
}

//Task 28

var age:string = '27';

if (age < '2'){
    console.log("the person is baby")
} else if (age <'13'){
    console.log("the person is kid")
} else if (age <'20'){
    console.log("the person is teenager")
} else if (age < '65'){
    console.log("the person is adult")
} else if (age < '65')
    console.log("the person is older" )

//Task 29

let favorite_fruits:string[]=["orange","apple","grapes"]

if (favorite_fruits.indexOf('orange')){
    console.log(`you really like bananas!`);
}

if (favorite_fruits.indexOf('banana')){
    console.log(`banana`);
}


if (favorite_fruits.indexOf('mango')){
    console.log(`you really like bananas!`);
}

if (favorite_fruits.indexOf('peach')){
    console.log(`peach`);
}

if (favorite_fruits.indexOf('kiwi')){
    console.log(`you really like banana`);

}

//Task 30

var users:string[]=["admin","eric","john","micheal","david"];

for(let user of users){
    if (user == "admin"){
        console.log("hello admin, would you like to see a status report")
    } else {
        console.log(`hello ${user}, thank you for logging in again`)
    }
}

//Task 31


 var users:string[]=["admin","eric","john","micheal","david"];


 if (users.length == 0){
     console.log(`hello we need to find some user`)
} else {
for(let user of users){
    if (user == "admin"){
         console.log("hello admin, would you like to see a status report")
    } else {
        console.log(`hello ${user}, thank you for logging in again`)
    }
 }}

let user: string[]=[];
if (users.length == 0){
    console.log(`hello we need to find some user`)
} 

//Task 32

let current_users:string[] = ['eman','noor','wahiba','john','micheal']
let new_user:string[]=["admin","eric","john","micheal","david"]

let current_users_lower:string[] = current_users.map( user => user.toLowerCase())

for (let new_users of new_user ){
    if (current_users_lower.indexOf (new_users.toLowerCase())){
        console.log(`sorry ${new_users}, you need to enter a new username`)
    } else {
        console.log(`dear ${new_users}, this username is avalaible`)
    }

}

//Task 33

let Numbers:number []= [1,2,3,4,5,6,7,8,9]

for (let number of Numbers){
if ( number === 1){
    console.log(`${number}st`)
} else if ( number === 2){
    console.log(`${number}nd`)
} else if ( number === 3){
    console.log(`${number}rd`)
} else if ( number >= 4){
    console.log(`${number}th`)
}
}

//Task 34


let favorite_Pizzas:string[] = ['fajita','bbq flavor','white sause and cheese']

for (let Pizzas of favorite_Pizzas){
    console.log(Pizzas)
}

for (let Pizzas of favorite_Pizzas){
    console.log(`i reallly love ${Pizzas} pizza`)
}

console.log(`i reallly love pizza i can eat it anytime anywhere`)

//Task 35


let animals:string[] = ['cat','dag','hen']

for(let animal of animals){
    console.log(animal)
}

for(let animal of animals){
    console.log(`${animal} walk with the helps of limbs and are domestic animals `)
}

console.log(`these animals are my favorite`)

//Task 36


function makeshirts(size :string , text:string): void {
    console.log(`you order a ${size} that says ${text}`)
} 


makeshirts('large',"i want a large size pink shirt")
makeshirts('medium',"i want a medium size blue shirt")
makeshirts('zero',"i want a larhe size black shirt")

//Task 37

function makeshirt(size :string = 'large' , text:string ="i love type script"): void {
    console.log(`you order a ${size} that says ${text}`)
} 

makeshirt();
makeshirt(`medium`);

//Task 38

function describe_city(city:string ,country : string): void {
    console.log(`${city} is the heart of ${country}`)
}

describe_city('karachi',"pakistan")
describe_city('islamabad',"pakistan")
describe_city('lahore',"pakistan")
describe_city('makkah',"saudiarabia")


makeshirt('small', "i need customized shirt in zero size");

//Task 39


function cityCountry(city:string ,country : string): void {
    console.log(`${city}- ${country}`)
}
 let c1 = cityCountry('karachi',"pakistan")
 let c2 = cityCountry('lahore',"pakistan")
let c3 = cityCountry('makkah',"saudiarabia")

console.log(c1)
console.log(c2)
console.log(c3)

//Task 40
function makeAlbum(artist:string, album:string,track:string ):{artist :String; album :String; track :string}{
    const dictionaries = {
        artist: artist.charAt(0).toUpperCase() + artist.slice(1),
        album: album.charAt(0).toUpperCase() + album.slice(1),
        track: track.charAt(0).toUpperCase() + track.slice(1),
       
    }
    return dictionaries;
}

let album = makeAlbum("ali zafar ", 'jhoom',`12`)
console.log(album)

album = makeAlbum("hadiqa kiyani ", 'raaz',`20`)
console.log(album)

 album = makeAlbum("atif aslam", 'bekhudi',`15`)
console.log(album)

//Task 41



function show_magicians(magicians: string[]):void{

   for (const magician of magicians){
    console.log(magician);
   }
}

const magicians:string[] = ['Harry Houdini', 'David Copperfield',' David Blaine', 'Uri Geller']



show_magicians(magicians);

//Task 42
 

const magicians:string[] = ['Harry Houdini', 'David Copperfield',' David Blaine', 'Uri Geller']




show_magicians(magicians);

function show_magicians(name:string ,text : string): void {
    console.log(`${name}- ${text}`)
}

show_magicians('harry houdini',"is the grat magician")
show_magicians('david cooperfield',"is the grat magician")
show_magicians('david blaine',"is the grat magician")
show_magicians('uri geller',"is the grat magician")

//Task 43
// 43. Unchanged Magicians: Start with your work from Exercise 40. Call the
// function make_great() with a copy of the array of magicians’ names. Because the
// original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original
// names and one array with the Great added to each magician’s name.

const magicians = ["Harry Houdini", "David Copperfield", "Dynamo", "Penn & Teller", "Criss Angel"];


function showMagicians(magicians: string[]) {
  for (const magician of magicians) {
    console.log(magician);
  }
}

showMagicians(magicians);


function make_great(magician: string[]) {
    for (const magician of magicians) {
      console.log(`great ${magician}`);
    }
  }

  make_great(magicians);

  //Task 44
// 44. Sandwiches: Write a function that accepts a array of items a person wants
// on a sandwich. The function should have one parameter that collects as many
// items as the function call provides, and it should print a summary of the sandwich
// that is being ordered. Call the function three times, using a different number
// of arguments each time.

function orderSandwich(items: string[]) {
    console.log("Ordering a sandwich with:");
    for (const item of items) {
      console.log(`- ${item}`);
    }
}

orderSandwich(['ham','cheese','tomato']);
orderSandwich(['lettuce','onion','chicken']);
orderSandwich(['ketchup','beaf','mayo']);

//Task 45
// 45. Cars: Write a function that stores information about a car in a Object.
// The function should always receive a manufacturer and a model name. It
// should then accept an arbitrary number of keyword arguments. Call the function
// with the required information and two other name-value pairs, such as a
// color or an optional feature. 
// Print the Object that’s returned to make sure all the information was
// stored correctly.




function createCar(manufacturer: string, model: string, p0: string, p1: string, p2: string, p3: string) {
    var car = {
      manufacturer,
      model
    };
  
    for (var i = 2; i < arguments.length; i += 2) {
      Object.assign(car, { [arguments[i - 1]]: arguments[i] });
    }
  
    console.log(car);
    return car;
  }
  
  createCar('Toyota', 'Camry', 'color', 'blue', 'features', 'leather seats');