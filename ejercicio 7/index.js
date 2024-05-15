//1.1

const exams = [
    {name: 'Yuyu Cabeza Crack', score: 5}, 
    {name: 'Maria Aranda Jimenez', score: 1}, 
    {name: 'Cristóbal Martínez Lorenzo', score: 6}, 
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];
console.log(exams.reduce((acc, exam) =>acc += exam.score, 0))

//1.2

const aprobados = exams.filter(exam => exam.score >=5)
.reduce((acc, exam) => acc += exam.score, 0)

console.log(aprobados);

//1.3


const average = exams.reduce((acc, exam) => acc += exam.score / exams.length, 0);

console.log(average);

