//1.1

const pointsList = [32, 54, 21, 64, 75, 43]
const pointsList2 =[...pointsList]
console.log(pointsList2);

//1.2

const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toy2 = {...toy}
console.log(toy2);

//1.3

const pointsList3 = [54,87,99,65,32];
const newPointsList = [...pointsList, ...pointsList3]
console.log(newPointsList);

//1.4

const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']}
const newToyObject = {...toy, ...toyUpdate}
console.log(newToyObject); 

//1.5

const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];
const colors2 = [...colors]
colors2.splice(2,1)
console.log(colors);
console.log(colors2);