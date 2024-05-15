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
  }
  console.log(findArrayIndex(mainCharacters, "Luke"));
  console.log(findArrayIndex(mainCharacters, "Chewbacca"));
  console.log(findArrayIndex(mainCharacters, "Obi-Wan"));
  console.log(findArrayIndex(mainCharacters, "Han Solo"));