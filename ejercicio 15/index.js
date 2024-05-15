

const fantasticFour = [
    "La antorcha humana",
    "Mr. Fantástico",
    "La mujer invisible",
    "La cosa",
  ];

  const swap = (array, indice1, indice2) => {
    
    const index = array[indice1]
    array[indice1] = array[indice2]
    array[indice2] = index

    return array
  }

  console.log(swap(fantasticFour, 1, 3));
  console.log(swap(fantasticFour, 0, 2));