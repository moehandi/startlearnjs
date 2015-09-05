var arr = ['father','mother','me'];

console.log(arr);//print all

//print one by one
for(var i = 0; i < arr.length; i++){
	console.log(arr[i]);
}
//add element to defined index array
arr[3] = 'you';
console.log(arr);

// or add element with more flexible
arr[arr.length] = 'new element';
console.log(arr);

//array can consist element with not same type
var comType = [
				'myname', // contain string
				true, 		// contains boolean
				1, 			// contains number
				{'key':'contain object'}, // contains object
				['yes','inner array']
			];

console.log(comType);

for(var i = 0; i < comType.length; i++){
	console.log(comType[i]);
}