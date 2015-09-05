var b = 3 < 8;

console.log(b); // equals to true

//Boolean Relational Operator : AND, or, NOT

var varA = 5;
var varB = 8;
var varC = 9;

var D = (varA < varB);//true
var E = (varB < varC);//true
var F = (varB > varC);//false

if(D && E){ //D AND Must be TRUE 
	console.log('D AND E true');
}

if(D || F){
	console.log('D OR F Executed');
}

console.log(!D);//false, because D is TRUE