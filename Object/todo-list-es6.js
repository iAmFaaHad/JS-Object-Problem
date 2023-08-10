// task-1 *Return the object which has unique id, *you have to give your inputs at a time, it can be 3,4,5....but in one single input. *Must show when they are created,add actual time when they are created. This task must be done through Es-6.

let toDoList = []
const addToDo = (...inputObject) => {
    const objectInMapArray = inputObject.map((individualObject, index) => {
        const date = new Date().toJSON();
        individualObject.created_at = date
        individualObject.id = index + 213021;
        return individualObject;
    })
    toDoList.push(...objectInMapArray)
}
console.log(toDoList)

// Note::Task1> *In this task we use Es-6 flat arrow function , to input at parameter "input object" at a time 4 or more object,  we 1st use [map of es6> by map we get all the object into an array >[{title: 'Assignment Submission', description: 'Assignment must be submited between 9 july', created_at: '2023-08-10T06:54:23.367Z', id: 213021, Special Note: 'There is no late submission date and assignment must be written!!'}]>]. *Now had to give them individual id ,date and others. Now we put the map array into to do list. *In this stage we use [...rest operator> it will go to one by one and push them into todo list]

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
const inputToList5 = {
    "title": "Starting Dhaka's typical life",
    "discription": "Need to go to the office daily sharp 10Am"
}

addToDo(inputToList1, inputToList2, inputToList3, inputToList4, inputToList5)
console.log(toDoList)
// 5 enteris in one sigle time

// task-2  Edit toDolist. *You will provide id and the things you want to change, input a object which is consist as many item you want to change. *If "object key" is not match with exixting key, please add new key.  *ViewToDoList must be updated after we change the editToDo, samething must be remanin before we console. Must be done through the Es-6.

const editToDo = (inputID, inputObject) => {
    const date = new Date().toJSON();
    inputObject.edited_at = date;
    const cloneList = JSON.parse(JSON.stringify(toDoList));
    let indexOfID = cloneList.findIndex(item => {
        return item.id === inputID
    })
    if (indexOfID != -1) {
        const updatedObjects = { ...cloneList[indexOfID], ...inputObject }
        cloneList[indexOfID] = updatedObjects
        toDoList = cloneList
        return cloneList[indexOfID]
    } else {
        return `Your ID is Not Matched!!!
        Please enter the correct ID`
    }
}

// Note: Task-2>> In this task we use Es-6 flat arrow function. To find out the id number that we provide ,is matched with the existing object we use [array.findIndex >> by this we will find if our input is matched or not]. If index is matched it will return +1 ,if not then -1. After detecting the right index we use object destrcuturing , [let object={...obj1, obj..2}, in this method they will return one object , if item matched  between 2 the they will choose 2nd/last item, if not matched the remaining item will be same].|We use findIndex in the place of For loop|

// task-3 If you provide  id then it will show that individual information
const viewDoListOnId = inputID => {
    let indexOfID = toDoList.findIndex(item => {
        return item.id === inputID
    })
    if (indexOfID != -1) {
        return toDoList[indexOfID]
    }
}
// Note>task3>>>>In this task we use Es-6 flat arrow function & findIndex in the place of For loop , if our id is not matched it will return -1, if its matched then it will show. [item is the individual object]. 

//  task-4 if you call the function it will show you the todolist
const viewToDoList = () => toDoList;

//Note>>task4::: in task 4 use Es-6 flat arrow function , in the simpliest way.


//  task-5 if you provide id to function it will remove that individual object
const removeToDo = inputID => {
    const cloneList = JSON.parse(JSON.stringify(toDoList));
    const indexID = cloneList.findIndex(item => {
        return item.id = inputID
    })
    if (indexID != -1) {
        cloneList.splice(indexID, 1)
        toDoList = cloneList;
        return cloneList
    }
}

// Note:::Task>5:: In this task we use Es-6 flat arrow function & findIndex to findout the index of individual object , then we use 
// The splice() method changes the contents of an array by removing or replacing existing elements or adding new elements. In splice at first we will provide which index we want to remove then  provide the size of that element . In task 5  we want the indexArray to remove its size is 1.
// to do this task ,we need to create a clone/deep copy, because we want to change the thing from here. 

console.log(viewToDoList())
console.log(editToDo(213021, { "description": "Assignment must be submited between 9 july", "Special Note": "There is no late submission date and assignment must be written!!" }))
console.log(viewToDoList())
console.log(editToDo(213024, { "title": "Return From home", "description": "End of vacation, returing 15 july", "Special Note": "Book ticket by rail" }))
console.log(removeToDo(213022))
console.log(viewDoListOnId(213023))
console.log(removeToDo(213024))
console.log(editToDo(213023, { "description": "book ticket for going home on 10 july by air, my flight should be on early morning", "title": "Horrah! Going Home" }))
console.log(viewToDoList())
console.log(editToDo(213026, { "title": "bbk" }))
