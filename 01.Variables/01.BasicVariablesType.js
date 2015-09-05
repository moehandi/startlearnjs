//create variable
var stringVar = "This String type";
var numberVar = 12;
var booleanVar = true;
var objectEmpty = {};
//print to screen
console.log(stringVar);
console.log(numberVar);
console.log(booleanVar);
console.log(objectEmpty);
console.log('----------------');
//test typeof variable
console.log(typeof(stringVar));
console.log(typeof(numberVar));
console.log(typeof(booleanVar));
console.log(typeof(objectEmpty));
//basic logic to test if type of variable equals
if(typeof(stringVar)=='string'){
	console.log('this true type of string');
}

if(typeof(objectEmpty)=='object'){
	console.log('this is true object type');
}