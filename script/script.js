/********************************
*Variable and data type 
*/
/*
var firstName = 'John';
console.log(firstName);

var lastName ='Smith';
var age = 28;

var fullAge =true;
console.log(fullAge);

/*undifined
var job;
console.log(job);

job = 'teacher';
console.log(job);
//variable naming rules
var _3years=3;
var johnMark = 'John and Mark';
var if = 23;*/



/***********************
*Variabla mutation and type correction
*/
/*

var firstName = 'John';
var age =28;
//type correction
console.log (firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a' + age + 'year old' + job +'. is he married? '+isMarried);

//variable mutation
age = 'twenty eight';
job = 'driver';
alert (firstName + 'is a' + age + ' year old ' + job + '. isMarried' + isMarried);

var lastName = prompt('what is this lastName?');
console.log(firstName+ ' '+lastName);

*/


/*Basic Operatores*/
/*var year, yearJohn, yearMark;
now = 2018;
ageJohn = 28;
ageMark = 33;


//math operatores
yearJohn = now - ageJohn;
yearMark = now - ageMark;
console.log(yearJohn);
console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

//logical operatores 
var johnOlder = ageJohn < ageMark;
console.log (johnOlder);

//typeof operatpr


console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than john');
var x;
console.log(typeof x);



/***************************
*Operator precdence
*//*
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;
//Multiple operators
var isFullAge = now - yearJohn >= fullAge; //true
console.log(isFullAge);

var ageJohn = now-yearJohn;
var ageMark = 35;
var average  = (ageJohn + ageMark)/ 2; 
console.log(average);
*/

/*//Multiple assignments 
var x, y;
x = y = (3+5) * 4-6; // 8*4-6 // 32-6 // 26
console.log(x, y);
//2+4+5
*/
/*//more operators 
x  *=2;
console.log(x);
x+=10;
console.log(x);
x++; //x--
console.log(x);

*/

/*
var massMark = 78; // kg
var heightMark = 1.69; //meters

var massJohn = 92;
var heightJohn = 1.95;

var BMIMark = massMark/ (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);

console.log(BMIMark, BMIJohn);

var markHigherBMI = BMIMark > BMIJohn;
console.log ('Is Mark\'s BMI higher than john\'s? ' + markHigherBMI);




 /*If / else statments*/

 /*var firstName = 'john';
 var civilStatus = 'single';

 if (civilStatus === 'married') {
 	console.log(firstName + 'is is Married');
 }
 else {
 	console.log(firstName + 'Witll hopefully marry soon :)');
 }

 var isMarried = true;
 if (isMarried) {
 	console.log(firstName + 'isMarried!');
 } else {
 	console.log(firstName + 'Will hopefully marry soon :)');

 }



var massMark = 78; // kg
var heightMark = 1.69; //meters

var massJohn = 92;
var heightJohn = 1.95;

var BMIMark = massMark/ (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);

if (BMIMark > BMIJohn) {
	console.log ('Mark\' BMir is higher than john\'s.');


} else {
	console.log('john\' BMI is higher than Mark\'s.');

}*/


/*----------------------------------------------*/
/*Boolean LOGIC*/


/*var firstName = 'john';
var age = 8;


if(age <13 ) {
	console.log(firstName + 'is a boy.'); 
}
else if (age>=13 && age < 20) {
	console.log(firstName + 'is a tennaagerer.');
} else if (age>=20 && age<30)  	{
	console.log(firstName + 'is a young man');

}
else {
	console.log(firstName + 'is a man. ')
}*/



/**********************************
*Thw ternary Operator and switch statements 
*/

var firstName = 'john';
var age =16;
//terensy operator
age >=18 ? console.log(firstName + ' drinks beer.') : console.log (firstName + 'drinks jucie.');

var drink = age >=18 ? 'beer' : 'jucie';
console.log(drink);

/*if(age>=18) {
	var drink ='beer';
}
else {
	var drink = 'jucie'
}*/

//switch statement

/*var job = 'instructor';
switch (job) {
	case 'teacher':
	case 'instructor':
	console.log(firstName + 'teaches kids how to code.');
	break;
	case 'driver':
	console.log(firstName + 'drives an uber in lisbon.');
	break;
	case 'designer':
	console.log(firstName + 'designs beautiful websites.');
	break;
	default:
	console.log (firstName + 'does something else.');
}

age =56;

switch (true) {
	case age <13:
	console.log(firstName +' is a boy.');
	break;
	case age >=13 && age < 20:
	console.log(firstName + 'is a tennaagerer.');
	break;
	case age >=20 && age <30:
 	console.log(firstName + 'is a young man.');
	break;
	default:
	console.log(firstName + 'is a man');
}



*/


/*-------------------------------------------------*/
/*---------------------------------------------------*/
/*Truthy and false values and equality operators*/

//false values: undefined, null 0. ''  Nan
//truthy values: NOT falsy values 

var height;
height = '';
if(height||height===0) {
	console.log ('variable is defined');
} else {
	console.log ('Variabla has not been defined');
}


//equality operators 
if (height==='23') {
	console.log('the == operator does type corection!');
}




var scoreJohn = (89+120+103)/3;
var scoreMike = (116+94+123)/3;
console.log(scoreJohn, scoreMike);

if () {}