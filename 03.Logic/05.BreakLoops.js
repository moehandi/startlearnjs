//break and stop the loop
for(var i = 0 ; i < 10; i++){
	if(i == 5){
		break;
	}
	console.log(i);
}

//continue to next means skip current loops 
var text='iam javascript programmer';
for(var i = 0 ; i < text.length; i++){
	if(i == 4){
		continue;//will skip j as index 4
	}
	console.log(text[i].toUpperCase());
}