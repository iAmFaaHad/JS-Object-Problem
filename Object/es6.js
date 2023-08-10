// Js has 3 libaries { react, angular, vue }

// normal function 
// function sums(num1, num2) {
//     return num1 + num2;
// }
// console.log(sums(5, 5))


// but in ES-6 we can do it more efficiantly
// => arrow left side is parameter area , right side is function area

// 1>>Flat arrow function
// way-1
var sum1 = (num1, num2) => {
    // right other stuff
    return num1 + num2;
}
console.log(sum1(2, 3))

// way-2 {if you resturn the ans in one line then you can ommit {bracket} in function}
var sum2 = (num1, num2) => num1 + num2;
console.log(sum2(5, 3))

//  way-3 {if you have only  one perameter to input you can ommit (bracket) in function}
var sum3 = num1 => 10 + num1;
console.log(sum3(5))

// 2>>>truthy and false value
//truthy and false value { valuen contest (If condition), which} 
// When non-boolean(not true or false) values are used in a boolean context, such as the condition of an if statement, they will be coerced into either true or false . Values that are coerced into true are called truthy and values that are coerced into false are called falsy

// false, null, 0, undefined, "", NaN will return falsy value, otherwise return true value

var value = 0;

if (value) {
    console.log("It's true!!!")
} else {
    console.log("It's false!")
}
// 3>>ternary operator
// lets try  a condition
var age = 20;
var type;
if (age < 18) {
    type = "child"
} else {
    type = "adult"
}
console.log(type)
// The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark ( ? ), then an expression to execute if the condition is truthy followed by a colon ( : ), and finally the expression to execute if the condition is falsy.

// we can do it more simply using ternary operator

var myage = 10;
let ageType = (myage < 18) ? "child" : "adult";
console.log(ageType)
// we can nested the thing when we want to run candition  on existing condition, just need to simply use ternary operator on that condition, rest of the things ar similar to the above
var hisAge = 55;
let hisAgeType = (hisAge < 18) ? "child" : (hisAge >= 50) ? "Senior Citizen" : "Adult";
console.log(hisAgeType)

// special suggestion by sumit " use ternary operator when there is maximum 2level of condition need to be used or applied...otherwise use normal condition"


//>>4 Array Find
// The prototype is an object that is associated with every functions and objects by default in JavaScript, where function's prototype property is accessible and modifiable and object's prototype property (aka attribute) is not visible. Every function includes prototype object by default.

// The find() method returns the value of the first element that passes a test. The find() method executes a function for each array element. If it doesn't find it will return "UNDEFINED"
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

var result = numbers.find(function (currentValue, currentIndex, arr) {
    return currentValue > 4
}
)
console.log(result)

// find has 3 parameter >currentValue, currentIndex, arr

// >>5 Array Find Index {same as array find, difference is find resturn element and findIndex return Index of that element}, if it don't find the index it will return -1
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

var result = numbers.findIndex(function (currentValue, currentIndex, arr) {
    return currentValue > 2;
}
)
console.log(result)
// here current value >2 is {3}..which index number is 2

// Array Find & Array Index only return the first element which is support the condition, if that match with condition rest will be ignore.... But in Array Filter , its return  all the element that match the condition. This don't  change the main array. If it don't find anything then it will return empty array. 

// 6>> Array Filter
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

var result = numbers.filter(function (currentValue, currentIndex, arr) {
    return currentValue > 2;
}
)
console.log(result)

// "Slice" returns a piece of the array but it doesn't affect the original array. "Splice" changes the original array by removing, replacing, or adding values and returns the affected values. 

// >>Array Slice-7(cut)
// in slice, its don't count the last index that is mention in the perameter. in result2 , we use 7 number index, its mean it will count from 2-6 index
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9]

var resultOfSlice1 = num.slice(3, -4)
var resultOfSlice2 = num.slice(2, 7)
console.log(resultOfSlice1)
console.log(resultOfSlice2)
console.log(num)

//>>Array Splice-8(remove, add value)
// in splice there can have 3 parameter, 1)where to remove 2)how many item to be removed 3)which element are going to replace.

var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// lets remove
var resultOfSplice1 = nums.splice(3, 2);
console.log(resultOfSplice1);
// lets remove and replace
var resultOfSplice2 = nums.splice(3, 2, 10, 11, 12, 13, 14);
console.log(nums)

// Splice change the orginal array where slice don't.

// Array Concat>>9[add/marge two or more array in one single array, but orginal array remain same]
var part1 = [1, 2, 3, 4]
var part2 = [5, 6, 7, 8, 9]
var part3 = [10, 11, 12, 13]
var resultOfConcat = part1.concat(part2, part3);
console.log(resultOfConcat)

// Array-Push-10
var array1 = [1, 2, 3]
var newInput = array1.push(4, 5, 6)
console.log(array1)
console.log(newInput)
// [it only show the last number  which is 6]

// Array-Map>>11 [its actually use in React.Js, in react we don't use loop, we use map instead]
// The Javascript map() method in JavaScript creates an array by calling a specific function on each element present in the parent array. The main deference between for loop and map is, if i want to manupulate the array by using loop ,then it will change in the orginal array, where map create new array. Map run function on every element of the array.    

var myArray = [10, 20, 30, 40, 50]
// here value work as a peremeter ,which is taken from myArray, then callback function print that value after manupulation
// A JavaScript callback is a function which is to be executed after another function has finished execution. 
// Callbacks make sure that a function is not going to run before a task is completed but will run right after the task has completed.It helps us develop asynchronous JavaScript code and keeps us safe from problems and errors.
var newARRAY = myArray.map((value) => {
    return value * 10
})
console.log(newARRAY)
console.log(myArray)
// not changed

// Array-Reduce-12 The reduce() method executes a reducer function for array element. The reduce() method returns a single value: the function's accumulated result.The reduce() method calls the callbackFn() function for every element in the array. 

// var myArray = [10, 20, 30, 40, 50]
var sum = myArray.reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
}, 0)
console.log(sum)

// in array reduce there can be a second parameter ,which is intial value, in sum 0 is our initial value, we need this when we calculate the first value 10.

// For loop-For in-for of..>>13..  

//  let is a block code , it only work in a certain area. if you use var, it will not work as a block code
// var myArray = [10, 20, 30, 40, 50]

for (let index = 0; index < myArray.length; index++) {
    console.log(myArray[index])
}
// for in loop usealy work in an object
var subjectIn3rd = {
    macro: "not well",
    BsLaw: "Well"
}
for (let property in subjectIn3rd) {
    console.log(property)
}

// For of loop works easily in js array, object,string etc ..it iterate every elemnet of js
for (let property of myArray) {
    console.log(property)
}
var love = "I love Biriyani"
for (let property of love) {
    console.log(property)
}

// Object keys, values, entries>>14

// Object.keys, Object.values, object.entries all there are js build-in function
var myInfo = {
    name: "Fahad",
    height: 5.7,
    weight: 97,
    profession: "Student"
}

// from Object.Keys we will get only keys of the object, we get this keys in an array
var findKeys = Object.keys(myInfo)
console.log(findKeys)

// from Object.values, we will get the property of the object. we get this properties in an array
var findProperties = Object.values(myInfo)
console.log(findProperties)

// from Object.entries , we will get the keys and property together, in a set of an array

var findBoth = Object.entries(myInfo);
console.log(findBoth)

// in above 3 build in function we can easily turn our object into a array, by which we can easily iterate the element.

// Defult Value>>>15

// we  set defult value to the peremeter , incase the input given remain empty or undefined
function multiple(x = 10) {
    return x * 5;
}
console.log(multiple())
// ans-50

console.log(multiple(80))
// ans-400
console.log(multiple(undefined))
// ansd
console.log(multiple(null))
// Null means having no value; in other words null is zero

// Spread Operator>>17...
// The spread operator is commonly used to make deep copies of JS objects....most of the time we use this in the react.js . we can use this in array,object, in replece of concat. Way of Spread Operator is(..."Array/object name")

// deep copy
var a = [1, 2, 3];
var b = [...a]
a.push(10)
console.log(a)
// [1, 2, 3, 10]
console.log(b)
// [1, 2, 3] remain same.

// replacing concat

var c = [1, 2, 3]
var d = [4, 5, 6]
var cd = [...c, ...d]
console.log(cd)

var e = {
    1: "././",
    2: "</>"
}
var f = {
    3: "\''\\",
    4: "'.,/"
}
var ef = { ...e, ...f }
console.log(ef)

//  Rest Operator->>17....The syntax of the rest parameter is similar to the spread operator, it is entirely opposite from the spread operator. The rest parameter has to be the last argument because it is used to collect all of the remaining elements into an array. If we use it at the first it will not work.

function restOp(...params) {
    return (params)
}
console.log(restOp(1, 2, 3, 4, 5))

// Destructuring >>18...Destructuring is a convenient way of extracting multiple values from data stored in (possibly nested) objects and Arrays.

// Destructuring-object 
const myInformation = {
    name: "Fahad",
    age: 22,
    DoB: "03/05/2023",
    status: "Not clear",
    address: {
        present: "ctg",
        parmenant: "dhk"
    }
}
// lets take out dob and put it into different variable
// can be done through
// const { DoB } = myInformation;
// console.log(DoB)
// or
const { DoB: title } = myInformation;
console.log(title)

//  if object is nested then just use colon and 2nd bracket and do same process
const { address: { present: location } } = myInformation
console.log(location)

// Destructuring- array

const myArr = [2, 33, 442, 77, 778]

// lets take element 3,5 and put them into another object

const [, , k, , m] = myArr
console.log(k, m)

const myArr2 = [2, 33, [44, 66, 77, 9], 89]
const [, , [, , , l], p] = myArr2;
console.log(l, p)

// Swap easily
// old style using temporaray
var a1 = 202;
var b1 = 402;
// var temp = a1
// a1 = b1;
// b1 = temp;
// console.log(a1, b1)

// now 

[b1, a1] = [a1, b1];
console.log(a1, b1);

// 19---Export-Import

// Lets assume you have 2 file , 1>internal.js...2>external.js
// if you want to transfer data from one file to another , suppose you want to transfer  A FUNCTION from external to internal.. at first you have to change type"module" in html file link.... there are 2type 1)Named 2)default

// 2> external.js
// export const a=2.2;
// in Named export you have write "export at the begaing of code that you wanna transfer"

// 1>> import.js
// import {a <it can be a function or you can import multiple using coma>} from ""./external.js";
//  console.log(a)
// in named import you have to write import then use {brackt where you put desired function to import} then file location

// deffult is one in which ,whenever you import it also be imported. It is very easy to do. But one importen things about it is that it can be done only for 1 time in your code.

// 2>>external.js
// export const aa=2.2;
// function gf(){
//     console.log(nai)
// }
// export default gf;


// 1>internal.js
// import {a} from ""./external.js";
//  console.log(a)
// for by default export you can write anything like> import external/as your wish  from ""./external.js"; or  import external/as your wish,{a}  from ""./external.js" |you can skip line 346-347|
// console.log(external, a)

// 20>>>Template Literals.....
// Template literals are a new feature introduced in ECMAScript 2015 / ES6.It provides an easy way to create multiline strings and perform string interpolation(// String interpolation in JavaScript is a process in which an expression is inserted or placed in the string).
// Template literals are the string literals and allow joined expressions. By using template literals ,we can easily write strings and variable in a single qutation and can write multi-line and also done any single statement{sort sum,multiplication etc.}... for template literals we use |`bactick`| for string and in the string to findout variable |${variable}| 

var x = 5;
var y = 10;

// write strings and variable in a single qutation
console.log(`The value of ${x} & value of ${y} is here`)
// single statement{sort sum,multiplication etc.}
console.log(`The multiplication of xy is $a{x * y}`)
// multi - line
console.log(` The sum is ${x + y}
          the division is ${x / y}`)

// 21>>>Optional Chaining>>It allows accessing properties on an object, that may or may not exist, with a compact syntax.

const garden = {
    trees: 3,
    flowers: 4,
    fruites: {
        mango: 3,
        apple: 5
    }
}
console.log(garden?.fruite?.mango)
console.log(garden?.fruite?.jackfruit)

const bbaCourse = [202, 203, 204, 205, 206]
console.log(bbaCourse?.[2])

// through Optional Chaining we can directly access into the object and array , if it does not find the element then it will return undefined, not errror

// 22>> For Each loop.....; // The foreach loop is used to iterate over each element in the array and perform a specific action, such as displaying it on the screen or storing it in a variable.

// for loop

var myArraa = [1, 2, 3, 4, 5]
for (let i = 0; i < myArraa.length; i++) {
    console.log(myArraa[i])
}

//  for each
// myArraa.forEach(myFunction);

// function myFunction(x) {
//     console.log(x)
// }
// or
myArraa.forEach(function (x) {
    console.log(x)
})

var newMyArraa = []
myArraa.forEach(function (x) {
    newMyArraa.push(x * x)
})
console.log(newMyArraa)

