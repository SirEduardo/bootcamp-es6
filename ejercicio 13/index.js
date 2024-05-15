

const mainCharacters = [
    "Luke",
    "Leia",
    "Han Solo",
    "Chewbacca",
    "Rey",
    "Anakin",
    "Obi-Wan",
  ];

  const findArrayIndex = (array, text) =>{
    for (let i = 0; i < array.length; i++){
        if(array[i] === text){
            return i
        }
    }
    return -1
  }
  const removeItem = (array, text) =>{
    const index = findArrayIndex(array, text)
        if (index !== -1) {
            array.splice(index, 1)
        }
        return array
    }
    
    console.log("----------------------------");
    console.log("Sin modificar el Array original");
    console.log(removeItem([...mainCharacters], "Luke"));
    console.log(removeItem([...mainCharacters], "Anakin"));
    console.log(removeItem([...mainCharacters], "Leia"));
    console.log("----------------------------");
    console.log("Aqui modificandolo");
    console.log(removeItem(mainCharacters, "Luke"));
    console.log(removeItem(mainCharacters, "Anakin"));
    console.log(removeItem(mainCharacters, "Leia"));