var strA = 'this A';
var num1 = 1;
var strB = 'this B';
var num2 = 2;

// + operator test
console.log(strA + num1);// joining as A string (concat)
console.log(strA + strB);//joining as a String (concat)
console.log(num1 + num2);//resulting addition as Number
console.log(num1 + strB);//resulting as String (concat)

// * Math Operator
console.log('test with * operator in string and number');
console.log(strA * num1);// resulting to NaN (not A number)
console.log(strA * strB);// resulting to NaN (not A number)
console.log(num1 * num2);// resulting to exactly multiply between 2 number type
console.log(num1 * strB);// resulting to NaN (not A number)
