function palindrome(str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/gi, '');
    const len = str.length
    for (let index = 0; index < len; index++) {
        if (str[index] !== str[len - index - 1]) {
            return false;
        }
    }
    return true;
}
console.log(palindrome("My age is 0, 0 si ega ym."))

// function convertToRoman(num) {
//     const romanNumber = [[1, "I"], [4, "IV"], [5, "V"], [9, "IX"], [10, "X"], [40, "XL"], [50, "L"], [90, "XC"], [100, "C"], [400, "CD"], [500, "D"], [900, "CM"], [1000, "M"]]
//     if (num === 0) {
//         return "";
//     }
//     for (let index = romanNumber.length - 1; index < romanNumber.length; index--) {
//         if (num >= romanNumber[index][0]) {
//             return romanNumber[index][1] + convertToRoman(num - romanNumber[index][0])
//         }
//     }
// }
// console.log(convertToRoman(55));

function convertToRoman(num) {
    const romanNumber = {
        1000: "M",
        900: "CM",
        500: "D",
        400: "CD",
        100: "C",
        90: "XC",
        50: "L",
        40: "XL",
        10: "X",
        9: "IX",
        5: "V",
        4: "IV",
        1: "I"
    }
    if (num === 0) {
        return ""
    }
    const newRomanNumberArray = Object.entries(romanNumber);
    for (let index = newRomanNumberArray.length - 1; index < newRomanNumberArray.length; index--) {
        // console.log(newRomanNumberArray[index][0])
        if (num >= newRomanNumberArray[index][0]) {
            return newRomanNumberArray[index][1] + convertToRoman(num - newRomanNumberArray[index][0])
        }
    }
}
console.log(convertToRoman(55))


// function rot13(str) {
//     let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//     // console.log(alphabet.length)=26
//     let newStr = ""
//     for (let i = 0; i < str.length; i++) {
//         // console.log(str[i])
//         let index = alphabet.indexOf(str[i]);
//         // console.log(index)
//         if (index === -1) {
//             newStr += str[i];
//         } else {
//             let newIndex = (index + 13) % 26;
//             newStr += alphabet[newIndex]
//         }
//     }
//     return newStr;
// } 



// console.log(rot13("SERR CVMMN!"));
// console.log(rot13("SERR PBQR PNZC"));
// console.log(rot13("SERR YBIR?"));
// console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));
// console.log(rot13("SNUNQ"))


function telephoneCheck(str) {
    let regExp = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;

    return regExp.test(str);
}

console.log(telephoneCheck("555-555-5555"));


// function checkCashRegister(price, cash, cid) {
//     let moneyArr = {
//         "OnehundredDollars": 100,
//         "TwentyDollars": 20,
//         "TenDollars": 10,
//         "FiveDollars": 5,
//         "OneDollar": 1,
//         "Quarter": 0.25,
//         "Nickel": 0.05,
//         "Dime": 0.1



//     }
//     let difference = cash - price;
//     let answer = [];



//     return difference;
// }

// console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));

