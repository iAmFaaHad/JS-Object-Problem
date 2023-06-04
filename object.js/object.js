// task 1: count all ages of all users

// task 2: get all the users age less than 20

// task 3: get all the users that are not from country bd

// task 4: get all the users from city ctg and country bd


// task-1

function findingSumOfAllAge(inputEmployeData) {
    let totalSum = 0;
    for (let x in inputEmployeData) {
        totalSum = totalSum + inputEmployeData[x].info.age;

    }
    return totalSum;
}


const employees = {
    1: {
        id: 1,
        name: 'a',
        info: {
            age: 19,
            address: {
                city: 'ctg',
                country: 'bd'
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
            age: 39,
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
            age: 29,
            address: {
                city: 'delhi',
                country: 'in'
            }
        }
    }
}
console.log(findingSumOfAllAge(employees))
// console.log(employees[1].info.age)


