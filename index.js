/*JS EXERCISES

21) Given variables x = "John" and y = "Doe", write on the console "John <> Doe"
22) Create an object with properties such name, surname, email
23) Delete the email property from the previously created object
24) Create an array with 10 strings in it
25) Print in the console every string from the previous array
26) Create an array with 100 random numbers in it
27) Write a function to get the maximum and minimum values from the previously created array
28) Create an array of arrays, in which every array has 10 random numbers
29) Create a function that gets 2 arrays as parameters and returns the longest one
30) Create a function that gets 2 arrays of numbers as parameters and returns the one with the higher sum of values

*/
console.log('\n-----------ex.21----------')
let x = "John"
let y = "Doe"
console.log(x, ' <> ',y)

console.log('\n-----------ex.22----------')
let info = {
    name: 'Yoji',
    surname: 'Sato',
    email: 'yoji@gmail.com'
}
console.log(info)

console.log('\n-----------ex.23----------')
delete info.email
console.log(info)

console.log('\n-----------ex.24, ex.25----------')
let animals = [
    'dog',
    'cat',
    'snake',
    'cow',
    'tiger',
    'rabbit',
    'horse',
    'dragon',
    'mouse',
    'sheep',
]
console.log(animals)

console.log('\n-----------ex.26----------')
let ranNumArr = []
for (let i = 0; i <= 99; i ++) {
    let r = Math.floor(Math.random()*100) + 1
    ranNumArr.push(r)
}
console.log(ranNumArr)

console.log('\n-----------ex.27----------')
// const ranNums = function (){
//     let ranNumArr = []
//     for (let i = 0; i <= 99; i ++) {
//         let random = Math.floor(Math.random()*100) + 1
//         ranNumArr.push(random)
//     }
//     return ranNumArr()
// }
// const maxMin = function (){
//     let result = []

// }


console.log('\n-----------ex.28----------')
let arrOfArr = [
let childArr = []
    for (let i = 0; i <= 9; i ++) {
        let r = Math.floor(Math.random() * 10) + 1
        childArr.push(r)
    } 
    let 10Arr =  childArr * 10
}
]
console.log(arrOfArr)