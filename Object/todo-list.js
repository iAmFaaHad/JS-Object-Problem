// task-1 return the object which has unique id, and when they are created[aditional** add actual time when they are created]

let toDoList = []
function addToDo(inputObject) {
    let date = new Date().toJSON();

    inputObject.id = toDoList.length + 1 + 213020
    inputObject.created_at = { date }

    toDoList.push(inputObject);
    return inputObject
}
let inputToList1 = {
    "title": "Assignment Submission",
    "description": "Assignment must be submited between 7 july"
}

let inputToList2 = {
    "title": " need to go to the Shopping ",
    "description": "Buy some shirts and pants for me on 8 july"
}

let inputToList3 = {
    "title": "Book a ticket",
    "description": "book ticket for going home on 10 july by air"
}
let inputToList4 = {
    "title": "Back to Dhaka",
    "description": "End of vacation",
}
console.log(addToDo(inputToList1))
console.log(addToDo(inputToList2))
console.log(addToDo(inputToList3))
console.log(addToDo(inputToList4))

// task-2 edit todo list , you will provide id and the things you want to change, input a object which is consist as many item you want to change, object key is not match with exixting key, please add new key
function editToDo(inputID, inputObject) {
    for (let indexOfArray = 0; indexOfArray < toDoList.length; indexOfArray++) {
        if (inputID === toDoList[indexOfArray].id) {
            Object.assign(toDoList[indexOfArray], inputObject);
            return toDoList[indexOfArray]
        }
    }
}
console.log(editToDo(213022, { "title": "need to go to the Shopping with some of friends " }))

console.log(editToDo(213021, { "description": "Assignment must be submited between 9 july", "Special Note": "There is no late submission date and assignment must be written!!" }))

console.log(editToDo(213023, { "description": "book ticket for going home on 10 july by air, my flight should be on early morning", "title": "Horrah! Going Home" }))

// console.log(editToDo(213024, { "title": "Return From home", "description": "End of vacation, returing 15 july", "Special Note": "Book ticket by rail" }))

console.log(editToDo(213026, { "title": "bbk" }))

//  If you want to merge the second object into the first object, instead of creating a new object, you can use Object.assign(). The Object.assign(target, source) function merges the source into the target. 
// How we edit the object inside the array through  Object.assign()..... in  Object.assign(target, source) there are two peremeter, *first one is target object in whhich we will store the data from the *source object if our id is match then we will change the date if not then we will create new one and store it with existing one. 
// To merge two objects in JavaScript, you can use the spread ...operator also. The spread operator creates a new object with all the properties from the first and second object.If there's two properties with the same name, the property from the second object wins out.

// task-3 If you provide  id then it will show that individual information
function viewDoListOnId(inputID) {
    for (let indexOfArray = 0; indexOfArray < toDoList.length; indexOfArray++) {
        if (inputID === toDoList[indexOfArray].id) {
            return toDoList[indexOfArray]
        }
    }
}
console.log(viewDoListOnId(213023))

//  task-4 if you call the function it will show you the dolist
function viewToDoList() {
    return toDoList;
}
console.log(viewToDoList())

//  task-5 if you provide id to function it will remove that individual object
function removeToDo(inputID) {
    for (let indexOfArray = 0; indexOfArray < toDoList.length; indexOfArray++) {
        if (inputID === toDoList[indexOfArray].id) {
            toDoList.splice(indexOfArray, 1)
        }
    }
    return toDoList;
}
console.log(removeToDo(213022))

// The splice() method changes the contents of an array by removing or replacing existing elements or adding new elements. In splice at first we will provide which index we want to remove then  provide the size of that element . In task 5  we want the indexArray to remove its size is 1.


