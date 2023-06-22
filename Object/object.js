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
    for (let outerIndex = 0; outerIndex < inputString1.length; outerIndex++) {
        newObj[inputString1[outerIndex]] = 0;
        for (let innerIndex = 0; innerIndex < inputString1.length; innerIndex++) {
            if (inputString1[outerIndex] === inputString1[innerIndex]) {
                newObj[inputString1[outerIndex]]++;
            }
        }
    }
    for (let outerIndex = 0; outerIndex < inputString2.length; outerIndex++) {
        newObj2[inputString2[outerIndex]] = 0;
        for (let innerIndex = 0; innerIndex < inputString2.length; innerIndex++) {
            if (inputString2[outerIndex] === inputString2[innerIndex]) {
                newObj2[inputString2[outerIndex]]++;
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

    for (let outerIndex = 0; outerIndex < str1.length; outerIndex++) {
        if (str1[outerIndex] in newObjstr1) {
            newObjstr1[str1[outerIndex]]++;
        }
        else {
            newObjstr1[str1[outerIndex]] = 1
        }

    }
    console.log(newObjstr1)
    for (let outerIndex = 0; outerIndex < str2.length; outerIndex++) {
        if (str2[outerIndex] in newObjstr1) {
            //  to check anything that exist in a object we must use "in" . 
            // (str2[i] in newObjstr1) means "is str2[i] is exist in  newObjstr1"
            if (newObjstr1[str2[outerIndex]] > 0) {
                newObjstr1[str2[outerIndex]]--;

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





// task 8- Recurssion
// means when a function calls itself inside from its own body , then its called recurssion. Its suitable for small function, but if we use it for big function which is working on large number then its not suitable.

// findoutFactorial using recurssion
function findoutFactorial(n) {
    if (n === 0) {
        return 1;
    }
    else {
        return n * findoutFactorial(n - 1);
    }
}
console.log(findoutFactorial(4))

// loop vs recurssion
// The main difference between recursion and loop is that recursion is a mechanism to call a function within the same function while loop is a control structure that helps to execute a set of instructions again and again until the given condition is true.
// recurssion  use stack>  A stack is an ordered collection of items that follow the Last In First Out (LIFO) principle. The addition and removal of items take place at the same end, i.e. at the top. The newest elements are at the top, and the oldest elements are at the bottom.




// Task-9 how to called one function inside the other function

function test23(in1, in2) {
    let sum = in1 + in2;
    return sum;
    // going to call it into another function
}
function multi(n, in1 = 2, in2 = 3) {
    // here int1=2, int2=3 is by deffult... if you provide the value of in1 it will execute with the given  value , in case you miss that then it will use 2/3
    return n * test23(in1, in2);
    // in returning the final output , we have 2 option,
    //  one: either we directly put a value which will not be changed like
    // return n * test23(5, 6);
    // or use console.log(multi(5, 5 , 6));
}
console.log(multi(5, 6, 7));

//   if we want to call a function inside another function, we can not console the first one function, then put it into other function with pere meter, we have few options regarding the input of peremeter.
// 1> we can use direct input
// 2> or use input peremeter into 2nd function's console.
//  we can also use some tricks, if we don't provide any input, we can set defult peremeter, in case one miss the peremeter.

//  const newObj ={
//     "A+":[{},{},{}],
//     "A:"

//  }




const nestyObj = {
    1: {
        roll: 1,
        name: 'karim',
        info: {
            age: 11,
            number: 550,
            address: {
                hometown: "Dhaka",
                currentAddress: "Ambagan"
            },
            subject: {
                favSubject: "G.Sciene",
                disSubject: "Math"
            }
        }
    },
    2: {
        roll: 2,
        name: 'rahim',
        info: {
            age: 12,
            number: 440,
            address: {
                hometown: "Chittagong",
                currentAddress: "Nasirabad"
            },
            subject: {
                favSubject: "Math",
                disSubject: "G.Science"
            }
        }
    },
    31: {
        roll: 5,
        name: 'jahir',
        info: {
            age: 13,
            number: 600,
            address: {
                hometown: "Chittagong",
                currentAddress: "Khulshi"
            },
            subject: {
                favSubject: "Accounting",
                disSubject: "Math"
            }
        }
    },
    4: {
        roll: 4,
        name: 'arman',
        info: {
            age: 12,
            number: 670,
            address: {
                hometown: "Feni",
                currentAddress: "Ambagan"
            },
            subject: {
                favSubject: "Math",
                disSubject: "Accounting"
            }
        }
    },
    7: {
        roll: 3,
        name: 'akram',
        info: {
            age: 13,
            number: 600,
            address: {
                hometown: "Norail",
                currentAddress: "Khulshi"
            },
            subject: {
                favSubject: "G.Sciene",
                disSubject: "Math"
            }
        }
    },
    44: {
        roll: 7,
        name: 'Aman',
        info: {
            age: 13,
            number: 350,
            address: {
                hometown: "Cumilla",
                currentAddress: "Khulshi"
            },
            subject: {
                favSubject: "G.Sciene",
                disSubject: "Math"
            }
        }
    },
    44: {
        roll: 7,
        name: 'Sakib',
        info: {
            age: 12,
            number: 500,
            address: {
                hometown: "Borisal",
                currentAddress: "Khulshi"
            },
            subject: {
                favSubject: "Math",
                disSubject: "Accounting"
            }
        }
    }
}
// task 10 Create a function , make  deep copy the function,where orginal inputed object will be same even after we change the object for output
// task-11 change the roll number according to the number they got in exam
// task-12 change the key according to their roll number ,as they will be in an order

function nestyObjManipulation(inputObject) {
    // deep copy through Json
    let newObj = JSON.parse(JSON.stringify(inputObject));
    //  task 10  deep copy done
    let objArr = []
    // sort highest numbers
    for (let x in newObj) {
        objArr.push([newObj[x].info.number, newObj[x].roll])
        objArr.sort(function (x, y) {
            return y[0] - x[0];
            // first element of objArr is [[450, 2], [550, 1]] = 450, we are comparing 450 with 550, as we are sorting from large to small, we use y(550)-x(450) if we sort  small to large we use x(450)-y(550)
        });
    }
    // [[670, 4], [600, 3], [600, 5], [550, 1], [450, 2]]
    for (let outerIndex = 0; outerIndex < objArr.length; outerIndex++) {
        const item = objArr[outerIndex]

        // we use array's index as item , [670, 4] is an item which has two element 0,1
        for (let x in newObj) {
            if (item[0] === newObj[x].info.number && item[1] === newObj[x].roll) {
                newObj[x].roll = outerIndex + 1;


                // changed the roll number done-task-11 done

                // how to complete task-12{id will change according to roll}
                // 1> {4:{roll:1}, 1:{roll:4}} we will run a condition if the  new roll and id is same? if is not then we will do a condition, x is key and <roll number inside key>  is not same
                // 2> then we will store the key value which is match with our current roll. In 1 when we worke with id:4 ,we see that roll 1 is match with id:1, if we change the value with out storing id 1 value then it will not be count
                // 3> then we will change the our intended roll and id which is {4:{roll:1} will turn into {1:{roll:1}
                // 4>then we will sawap the new id  newObj[x] with matching one


                if (x !== newObj[x].roll) {
                    let temp = newObj[newObj[x].roll]
                    newObj[newObj[x].roll] = newObj[x]
                    newObj[x] = temp;

                }
                // after doing above task we will face a problem if our id is different , means if its not in order like 1-5, if you set a id 31 then it will show 31 undefiend ,because we asign roll through the index number, for avoid this problem we will run a condition that if there is any key which value is undefined then it will delete whole key

                if (newObj[x] === undefined) {
                    delete newObj[x]
                }
                // task-12 done> changed the key according to their roll number, as they will be in an order > 
            }
        }

    }
    return newObj;
}
// console.log(nestyObjManipulation(nestyObj));
// after object manupulation
console.log(nestyObj);
// orginal object are still the same


// task-13 show the students whoes fav sub is math and also hometown is chittagong
function nestyObjManipulation2(targetCity, targetSub) {
    console.log(nestyObjManipulation(nestyObj))
    const objectInNewFunction = nestyObjManipulation(nestyObj)
    let stuObj = {}
    for (let x in objectInNewFunction) {
        if (objectInNewFunction[x].info.address.hometown === targetCity && objectInNewFunction[x].info.subject.favSubject === targetSub) {
            stuObj[x] = objectInNewFunction[x];
        }
    }
    return stuObj;
}
console.log(nestyObjManipulation2("Chittagong", "Math"))


// task-14 show the students whoes disliked sub is math, hometown is outside  of chittagong

function nestyObjManipulation3(targetSub, targetCity) {
    let stuObj = {}
    const objectInNewFunction2 = nestyObjManipulation(nestyObj)
    for (let x in objectInNewFunction2) {
        if (objectInNewFunction2[x].info.subject.disSubject === targetSub && objectInNewFunction2[x].info.address.hometown !== targetCity) {
            stuObj[x] = objectInNewFunction2[x];
        }
    }
    return stuObj;
}
console.log(nestyObjManipulation3("Math", "Chittagong"))


// task-15 differentiate the student in 3 catagory A+, A, A- according to their  number
function nestyObjManipulation4() {
    let category = {
        "A+ Students": {},
        "A  Students": {},
        "A- Students": {}
    }
    const objectInNewFunction3 = nestyObjManipulation(nestyObj)
    for (let objKey in objectInNewFunction3) {
        // Please use objKey instead of "x", will be more helpful

        // to keep your code more clean , a) you can ignore {} in if condition ,in the time when that condition only work with one single case, b) if that is nested then you must use { }, because it define the condition how far it will go. a reference is given below , b) is line 445 task-10-12

        if (objectInNewFunction3[objKey].info.number >= 600)
            category["A+ Students"][objKey] = objectInNewFunction3[objKey];
        // category["A+ Students"][objKey] here we use [objKey] because we will create a key in "A+ Students" object  same name as we use in our orginal nested object. Here we pass the whole key ,just not the keys value

        if (objectInNewFunction3[objKey].info.number >= 500 && objectInNewFunction3[objKey].info.number <= 599)
            // in this condition if we use normal math equation like ***500<=objectInNewFunction3[objKey].info.number<=599** it will not work because in js at...it will only check the initial condition, for that if something's value is above 500 or equal it will push the key. So solution for that is if you have 2 or many condition to check use && between the condition and it will be more smooth is you use the condition inside the if separatly 
            category["A  Students"][objKey] = objectInNewFunction3[objKey];

        if (objectInNewFunction3[objKey].info.number < 500)
            category["A- Students"][objKey] = objectInNewFunction3[objKey];

    }
    return category;
}

console.log(nestyObjManipulation4())


    // lexical scope {}
    // console.log(sum())

    // function sum() {
    //     return 2 + 2

    // }

    // const sub = () => 2 + 4
    // console.log(sub())
    // hoisting in js

