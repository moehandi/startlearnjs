var arr = ['father','mother','we','me'];
console.log(arr);

// var removed = arr.splice(2,1);//remove 1 array element at index 2 with 1
var changed = arr.splice(2, 0, 'they','us');//remove 0 array and add 'they, us'
console.log(arr);
//console.log(removed);
console.log(changed);