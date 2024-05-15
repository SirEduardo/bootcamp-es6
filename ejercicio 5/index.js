//1.1

const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];
console.log(ages.filter((age) => age >= 18));

//1.2

console.log(ages.filter((age) => age % 2 === 0));

//1.3

const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const LOLPlayers = streamers.filter(((streamer) => streamer.gameMorePlayed === "League of Legends" ))
console.log(LOLPlayers);

//1.4

const includesU = streamers.filter(((streamer) => streamer.name.includes('u')))
console.log(includesU);

//1.5

const includesLegends = streamers.filter((streamer => {
    
    if(streamer.gameMorePlayed.includes('Legends') && streamer.age > 35) {
        return {
            ...streamer,
           gameMorePlayed: streamer.gameMorePlayed.toUpperCase()
        }
        
    }
   
}))
console.log(includesLegends);

//1.5.6
const input = document.querySelector('[data-function = "toFilterStreamers"]')
input.addEventListener("input",(e) => {
    const inputValue = e.target.value.toLowerCase()
    const filtro = streamers.filter(streamer => streamer.name.toLowerCase().includes(inputValue))
    console.log(filtro);
})