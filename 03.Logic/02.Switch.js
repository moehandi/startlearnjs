var a = 'Oke';

switch(a){
	case 'oke':
		console.log('var a is oke');
	break;
	case 'Oke':
		console.log('var a is Oke');
	break;
	case 'notoke':
		console.log('var a is not oke');
	break;
}

a = 'not Oke';

switch(a){
	case 'oke':
		console.log('var a is oke');
		break;
	case 'Oke':
		console.log('var a is Oke');
		break;
	case 'notoke':
		console.log('var a is not oke');
		break;
	default:
	 	console.log('none');
	 	break;
}