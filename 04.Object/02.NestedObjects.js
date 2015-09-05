var books = {
	title: 'javascript beginner',
	page: 897,
	author: {
		firstName : 'Moehandi',
		lastName : 'saputra',
		country: {
			name: 'Indonesia',
			city: 'Jakarta'
		}
	}
}

var city = books.author.country.city;
var aCity = books['author']['country']['city'];

console.log(city);
console.log(aCity);

for(var key in books){
	console.log(key);
}

if('author' in books){
	console.log('Key exists');
}