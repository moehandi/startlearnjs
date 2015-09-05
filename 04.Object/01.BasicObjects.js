var emptyObj = {};
console.log(emptyObj);

var objA = {
	name: 'moehandi',
	sex: 'male',
	height: 174
};

var objB = {
	'name person': 'moehandi',
	'sex person' : 'male',
	'height body': 174
}


console.log(objA);
console.log(objB);

//accesing object properties
console.log(objA.name);
console.log(objA['sex']);

console.log(objB['name person']);//flexible with ' ' between name and person
console.log(objB['height body']);
console.log(objB['name']);// no property name in objB result undefined
console.log(objB.name);//even no property name in objB result undefined

//add properties
objB.status = 'single';
objB.degree = 'bachelor';

console.log(objB.status);
console.log(objB.degree);

//change value of property
console.log('Name before: '+objA.name);
objA.name = 'Bella';
console.log('Name after change: '+objA.name);

//delete property
delete objB.status;
console.log(objB.status);