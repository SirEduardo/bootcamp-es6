

const rollDice = (carasDado) => {
    if( carasDado > 1){
    return Math.floor(Math.random() * carasDado +1)
}
}

console.log(rollDice(10));
console.log(rollDice(3));
console.log(rollDice(6));
console.log(rollDice(20));
