//1.1

const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];
console.log(users.map((user) => user.name));

//1.2

const updatedName = users.map(user =>{
    if(user.name.startsWith('A')){
        return 'Anacleto'
    }else{
        return user.name
    }
})
console.log(updatedName);

//1.3

const cities = [
	{isVisited:true, name: 'Tokyo'}, 
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'}, 
	{isVisited:false, name: 'Seul'}
];

const citiesVisited = cities.map(city =>
   city.isVisited ? `${city.name} (visitado)` : city.name
)
console.log(citiesVisited);