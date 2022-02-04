
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
// not sure how to use an array in the function

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
//not sure how to create an array of an array
// let arrOfArr = []
// let childArr = []
//     for (let i = 0; i <= 9; i ++) {
//         let r = Math.floor(Math.random() * 10) + 1
//         childArr.push(r)
//     } 
//     let Arr10 =  childArr * 10

// console.log(arrOfArr)

console.log('\n-----------ex.29----------')
console.log('\n-----------ex.30----------')


//DOM EXERCISES//

//31) Get the element with an id of "container" from the page //
let getContainer = document.getElementById('div-container')
//32) Get every <td> element from the page //
let allTds = document.getElementsByTagName('td')
//33) Use a loop for printing the text inside of every <td> element in the page//
for (let i = 0; i < allTds.length; i ++) {
    console.log(allTds(i))
}
//34) Write a function to change the heading of the page//
const changeHeader = function () {
    let header = document.querySelector('h1')
    header.innerText = 'I changed the header!'
}
changeHeader()
//35) Write a function to add an extra row to the table//
let newRow = document.createElement('tr')
newRow.innerText = 'I am the new row!'
document.querySelector('table').appendChild('newRow')
//36) Write a function to add a class of "test" to each row in the table//
const setTrToTest = function () {
    let allTr = document.getElementsByTagName('tr')
    for (let i = 0; i < allTr.length; i ++) {
        let eachTr = allTr(i)
        eachTr.classList.add('test')
    }
}
setTrToTest()

//37) Write a function to add a red background to every link in the page//
//38) Console log "Page loaded" when the page is correctly loaded//
//39) Write a function to add new items to a unordered list//
//40) Write a function to empty a list//



