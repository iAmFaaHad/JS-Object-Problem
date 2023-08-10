// task-1 return the object which has unique id, and when they are created[aditional** add actual time when they are created]

let toDoList = []
function addToDo(inputObject) {
    const date = new Date().toJSON();
    inputObject.created_at = date
    inputObject.id = toDoList.length + 213021
    toDoList.push(inputObject);
    return inputObject
}
console.log(toDoList)
const inputToList1 = {
    "title": "Assignment Submission",
    "description": "Assignment must be submited between 7 july"
}

const inputToList2 = {
    "title": " need to go to the Shopping ",
    "description": "Buy some shirts and pants for me on 8 july"
}

const inputToList3 = {
    "title": "Book a ticket",
    "description": "book ticket for going home on 10 july by air"
}
const inputToList4 = {
    "title": "Back to Dhaka",
    "description": "End of vacation",
}

// task-2 edit todo list , you will provide id and the things you want to change, input a object which is consist as many item you want to change, "object key" can not be match with exixting key, please add new key. viewToDoList must be updated after we change the editToDo, samething must be remanin before we console.

function editToDo(inputID, inputObject) {
    delete inputObject.id
    const date = new Date().toJSON();
    inputObject.edited_at = date;
    const cloneList = JSON.parse(JSON.stringify(toDoList));
    for (let indexOfArray = 0; indexOfArray < cloneList.length; indexOfArray++) {
        if (inputID === cloneList[indexOfArray].id) {
            Object.assign(cloneList[indexOfArray], inputObject);
            toDoList = cloneList
            // reasign the todolist
            return cloneList[indexOfArray]
        }
    }
}

//  If you want to merge the second object into the first object, instead of creating a new object, you can use Object.assign(). The Object.assign(target, source) function merges the source into the target. 
// How we edit the object inside the array through  Object.assign()..... in  Object.assign(target, source) there are two peremeter, *first one is target object in whhich we will store the data from the *source object if our id is match then we will change the date if not then we will create new one and store it with existing one. 
// To merge two objects in JavaScript, you can use the spread ...operator also. The spread operator creates a new object with all the properties from the first and second object.If there's two properties with the same name, the property from the second object wins out.
// to do this task ,we need to create a clone/deep copy, because we want to change the thing from here.


// task-3 If you provide  id then it will show that individual information
function viewDoListOnId(inputID) {
    for (let indexOfArray = 0; indexOfArray < toDoList.length; indexOfArray++) {
        if (inputID === toDoList[indexOfArray].id) {
            return toDoList[indexOfArray]
        }
    }
}

//  task-4 if you call the function it will show you the dolist
function viewToDoList() {
    return toDoList;
}
// console.log(viewToDoList())

//  task-5 if you provide id to function it will remove that individual object
function removeToDo(inputID) {
    const cloneList = JSON.parse(JSON.stringify(toDoList));
    for (let indexOfArray = 0; indexOfArray < cloneList.length; indexOfArray++) {
        if (inputID === cloneList[indexOfArray].id) {
            cloneList.splice(indexOfArray, 1)
            toDoList = cloneList;
            return cloneList;
        }
    }
}
// The splice() method changes the contents of an array by removing or replacing existing elements or adding new elements. In splice at first we will provide which index we want to remove then  provide the size of that element . In task 5  we want the indexArray to remove its size is 1.
// to do this task ,we need to create a clone/deep copy, because we want to change the thing from here.

console.log(viewToDoList())
addToDo(inputToList1)
addToDo(inputToList2)
addToDo(inputToList3)
addToDo(inputToList4)
console.log(viewToDoList())
editToDo(213021, { "description": "Assignment must be submited between 9 july", "Special Note": "There is no late submission date and assignment must be written!!" })
console.log(viewToDoList())
editToDo(213024, { "title": "Return From home", "description": "End of vacation, returing 15 july", "Special Note": "Book ticket by rail", "id": 5 })
removeToDo(213022)
console.log(viewDoListOnId(213023))
removeToDo(213024)
editToDo(213023, { "description": "book ticket for going home on 10 july by air, my flight should be on early morning", "title": "Horrah! Going Home" })
console.log(viewToDoList())
editToDo(213026, { "title": "bbk" })
console.log(window)