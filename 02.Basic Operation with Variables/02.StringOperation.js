var name = "moehandi";

console.log(name.length);//length of string
console.log(name[0]);//string start index as zero

//try joining string
var firstName = 'moehandi';
var lastName = 'saputra';

console.log(firstName +' '+ lastName);

//spliting string / substring
console.log('___________________');
var fullName = 'moehandi saputra';
var firstName = fullName.substr(0,8);//0: start index, 8:length of character
var lastName = fullName.substr(9,7);
console.log(firstName);
console.log(lastName);

console.log('___________________');
console.log(fullName.indexOf(' '));//then code above will
var fullName2 = 'moehandi saputra';
var firstName2 = fullName2.substr(0, fullName2.indexOf(' '));
var lastName2 = fullName2.substr(fullName2.indexOf(' ')+1, 7);
console.log(firstName2);
console.log(lastName2);

console.log('___________________');
//extract character from string
for(var i = 0; i < fullName2.length; i++){
	console.log('index: '+i+' is '+fullName2[i]);
}