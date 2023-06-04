const employees = {
    1: {
        id: 1,
        name: 'a',
        info: {
            age: 19,
            address: {
                city: 'Dubai',
                country: 'UAE'
            }
        }
    },
    2: {
        id: 2,
        name: 'b',
        info: {
            age: 29,
            address: {
                city: 'dhaka',
                country: 'bd'
            }
        }
    },
    3: {
        id: 3,
        name: 'c',
        info: {
            age: 13,
            address: {
                city: 'ctg',
                country: 'bd'
            }
        }
    },
    4: {
        id: 4,
        name: 'd',
        info: {
            age: 39,
            address: {
                city: 'delhi',
                country: 'in'
            }
        }
    }
}

// task-1>>count all ages of all users


function findingSumOfAllAge(inputEmployeData) {
    let totalSum = 0;
    for (let x in inputEmployeData) {
        totalSum = totalSum + inputEmployeData[x].info.age;
    }
    return totalSum;
}

//   task-2>>get all the users age less than 20
function usersLessThen20(inputEmployeData) {
    let newObjwithLessThenAgeOf20 = {}
    for (let x in inputEmployeData) {
        if (inputEmployeData[x].info.age < 20) {
            newObjwithLessThenAgeOf20[x] = inputEmployeData[x];
        }
    }
    return newObjwithLessThenAgeOf20;
}


// task 3: get all the users that are not from country bd

function employeesWithOutBD(inputEmployeData) {
    let outSideBDEmployees = {};
    for (let x in inputEmployeData) {
        if (inputEmployeData[x].info.address.country !== "bd") {
            outSideBDEmployees[x] = inputEmployeData[x];
        }
    }
    return outSideBDEmployees;
}



// task 4: get all the users from city ctg and country bd

function getCtgAndBdEmployees(inputEmployeData) {
    let insideBDandCtgEmployee = {};
    for (let x in inputEmployeData) {
        if (inputEmployeData[x].info.address.city === "ctg" && inputEmployeData[x].info.address.country === "bd") {
            insideBDandCtgEmployee[x] = inputEmployeData[x];
        }
    }
    return insideBDandCtgEmployee;
}

// task 5: create a function which will take 3 arguments: inputObj, userid, newAge. return a new object which will have the updated age
// console.log(modifiedAge(employees, id, updatedAge))
function modifiedAge(inputEmployeData, targetID, newAge) {
    for (let x in inputEmployeData) {
        if (inputEmployeData[x].id === targetID) {
            inputEmployeData[x].info.age = newAge;
        }
    }
    return inputEmployeData;
}

// task 6: but cannot modify the inputObj directly
function modifiedAgeWithoutChangingInput(inputEmployeData, targetID, newAge) {
    const clone = structuredClone(inputEmployeData);
    let newObj = {}
    for (let x in clone) {
        if (clone[x].id === targetID) {
            clone[x].info.age = newAge;
            newObj[x] = clone[x];
        }
        else {
            newObj[x] = clone[x]

        }
    }
    return newObj;
}
// Note on this Structure Clone>  Copying a value in JavaScript affect lile>  changes to deeply nested values will be visible in the copy as well as the original. by using clone Adding or changing a property directly on the shallow copy will only affect the clone, not the original. But we change the value of orginal one's value then the value of clone will also change.

console.log(findingSumOfAllAge(employees))
console.log(usersLessThen20(employees));
console.log(employeesWithOutBD(employees));
console.log(getCtgAndBdEmployees(employees));
console.log(modifiedAge(employees, 3, 100))
// in  modifiedAge we don't use clone for that reason our orginal object value change
console.log(modifiedAgeWithoutChangingInput(employees, 1, 100))
// in modifiedAgeWithoutChangingInput we use clone , the loop over that clone, for that reason the value only change inside that clone
console.log(employees)
// after the clone we still see that the value of id:1, age:13 still reamin same
// but we change the age, if someone cosole on new age the can easily find it without not changing orginal one.


