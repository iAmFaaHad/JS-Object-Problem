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
console.log(findingSumOfAllAge(employees))

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
console.log(usersLessThen20(employees));


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

console.log(employeesWithOutBD(employees));


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
console.log(getCtgAndBdEmployees(employees));

// task 6: but cannot modify the inputObj directly
function modifiedAgeWithoutChangingInput(inputEmployeData, targetID, newAge) {
    const clone = structuredClone(inputEmployeData);
    for (let x in clone) {
        if (clone[x].id === targetID) {
            clone[x].info.age = newAge;

        }
    }
    return clone;
}
// Note on this Structure Clone>  Copying a value in JavaScript affect like>  changes to deeply nested values will be visible in the copy as well as the original. by using clone Adding or changing a property directly on the shallow copy will only affect the clone, not the original. But we change the value of orginal one's value then the value of clone will also change.

console.log(modifiedAge(employees, 3, 100))
// in  modifiedAge we don't use clone for that reason our orginal object value change
console.log(modifiedAgeWithoutChangingInput(employees, 1, 100))
// in modifiedAgeWithoutChangingInput we use clone , the loop over that clone, for that reason the value only change inside that clone
console.log(employees)
employees[2].info.age = 56;
console.log(employees);
// after the clone we still see that the value of id:1, age:13 still reamin same
// but we change the age, if someone cosole on new age the can easily find it without not changing orginal one.



// Task-7(a)Anagram

// An anagram of a string is another string that contains the same characters, only the order of characters can be different(same words, sorted differently). Most importantly
// * here in a word ,all the alphabet need to be same order, either lowercase or uppercase, if they are mixed, there will be no anagram.
// * length of the string must be equal
// *as we know, we can't run loop over a string, best to way to get anagram is using 
// *split>[separating the string into substrings to an array], *sort>[ sort the elements of an array] * join>  join all elements and turing the array into string 
// Given below

function basicAnagram(str1, str2) {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    let newStr1 = str1.split("").sort().join("")
    let newStr2 = str2.split("").sort().join('')
    if (newStr1 === newStr2) {
        return true;
    }
    else {
        return false;
    }
}
console.log(basicAnagram("dcb", "dca"))

// The problem with {split("").sort().join("")} is, when we will work with million of data, the processing of data can take more time then expected because split, sort, join are different functionn which have many loops, so the of execution of an function will take so more time. For that reason we  must use for loop function for doing this.  Answer is given below

// Task-7(b)> use loop to do the anagram

function isanagram(inputString1, inputString2) {
    inputString1 = inputString1.toLowerCase()
    inputString2 = inputString2.toLowerCase()

    if (inputString1.length !== inputString2.length) {
        return false;
    }
    let isMatch = false;
    let newObj = {};
    let newObj2 = {};
    for (let i = 0; i < inputString1.length; i++) {
        newObj[inputString1[i]] = 0;
        for (let j = 0; j < inputString1.length; j++) {
            if (inputString1[i] === inputString1[j]) {
                newObj[inputString1[i]]++;
            }
        }
    }
    for (let i = 0; i < inputString2.length; i++) {
        newObj2[inputString2[i]] = 0;
        for (let j = 0; j < inputString2.length; j++) {
            if (inputString2[i] === inputString2[j]) {
                newObj2[inputString2[i]]++;
            }
        }
    }

    for (let x in newObj) {
        if (newObj[x] === newObj2[x]) {
            isMatch = true;
        }
        else {
            return false;
        }
    }
    return isMatch;
}
console.log(isanagram("fahadd", "daahaf"))

// In this above function we use 2nested loop and total number of loop is 5, in nested loop, we see that our function will do its work by approching the loop n^2 or 5(string size)^2....25 times! for one string , 50 times for 2 tring, which is so big then expected. To work fast we must decrese the amount of loop. Answer is given below


//  Task-7(c) Do the job using only 2 loop

// tips
// Whether there is a key of Object in the 2nd string or Key Value is greater than 0 ? 
// If it is more than 0 then 1 must be subtracted.
// And if there is no one or the value is not more than 0 then not match must be shown.

function isTheStringMatch(str1, str2) {
    str1 = str1.toLowerCase()
    str2 = str2.toLowerCase()

    let newObjstr1 = {};


    if (str1.length !== str2.length) {
        return false;
    }

    for (let i = 0; i < str1.length; i++) {
        if (str1[i] in newObjstr1) {
            newObjstr1[str1[i]]++;
        }
        else {
            newObjstr1[str1[i]] = 1
        }

    }
    console.log(newObjstr1)
    for (let i = 0; i < str2.length; i++) {
        if (str2[i] in newObjstr1) {
            //  to check anything that exist in a object we must use "in" . 
            // (str2[i] in newObjstr1) means "is str2[i] is exist in  newObjstr1"
            if (newObjstr1[str2[i]] > 0) {
                newObjstr1[str2[i]]--;
                 
                // to access into object's keys one by one using must use[] bracet. If you don't use this it will only shown the first elemet , the rest will not be look. newObjstr1> [ >str2[i]> ]
            
            }
            else {
                return false;;
            }

        }
        else {
            return false;
        }
    }
    return true;
}
console.log(isTheStringMatch("rahimm", "rahimn"))





// task 8- Recurssion overlook
// task 9- Create a function , where orginal inputed object will be same even after we change the object for output

