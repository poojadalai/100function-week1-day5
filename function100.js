//1 Write a regular function with a number argument that logs double the first argument. Call it double1.
function double1(num) {
    console.log(num * 2)
}

//2 Write a regular function with a number argument that returns double the first argument.Call it double2.
function double2(num) {
    const double = num * 2;
    return double;
}

//3 Write a regular function with two number arguments that returns double the largest argument.Call it double3.
function double3(num1, num2) {
    if (num1 > num2) {
        return num1
    } else {
        return num2
    }
}

// console.log(double2(18));
// double1(8)
// console.log(double3(7, 2))

// ****************************************************************************************************************//

//4 Rewrite the functions double1, double2, double3 in the style of arrow functions.
// Call them arrow_double1, arrow_double2, arrow_double3.

const arrow_double1 = (num) => {
    console.log(num * 2)
}

const arrow_double2 = (num) => {
    const double = num * 2;
    return double;
}

const arrow_double3 = (num1, num2) => {
    const largest = Math.max(num1, num2)
    const result = largest * 2;
    return result;
}


// arrow_double1(5)
// console.log(arrow_double2(4))
// console.log(arrow_double3(3 , 8))

// ****************************************************************************************************************//

//5 Write an arrow function with a string argument and a number argument that repeates the string
//  from the first argument but repeated the amount of times equal to the second argument.

const repeat = (string, number) => {
    const result = string.repeat(number);
    return result;
}

// repeat("I love You :), 5)

// ****************************************************************************************************************//

//6 Write a function without any arguments. Have it return the string 'na' repeated 10 times followed by the string 'batman!'. Use the repeat function you used before to accomplish this.
// Call it batman.

const batman = () => {
    const result = repeat('batman! na ', 10);
    return result;
}
//console.log(batman())

// ****************************************************************************************************************//

//7 Write a function with two number arguments. Have it return the largest number of the two.
// Call it max.
const max = (num1, num2) => {
    const largest = Math.max(num1, num2)
    const result = largest * 2;
    return result;
}
// console.log(max(5,8))

// ****************************************************************************************************************//

//8 Write a function with two number arguments. Have it return the smallest number of the two divided by the largest number.
// Call it maxDivide.

const maxDivide = (num1, num2) => {
    const largest = Math.max(num1, num2)
    const smallest = Math.min(num1, num2)
    return result = Math.round(largest / smallest)
}
// console.log(maxDivide(9, 5))

// ****************************************************************************************************************//

//9 Write a function with two string arguments. Have it return the longest string.
// Call it maxStr.

const maxStr = (string1, string2) => {
    if (string1.length > string2.length) {
        return string1
    } else {
        return string2
    }
}
// console.log(maxStr("Pooja", "Nirmal"))

// ****************************************************************************************************************//

//  10: Write a function with a single number argument. Return a boolean that indicated wether this number is even.
// Call it numberEven.

const numberEven = (number) => {
    if (number % 2 == 0) {
        return true
    } else {
        return false
    }
}

// console.log(numberEven(8))

// ****************************************************************************************************************//

// 11 Write a function with a single number argument. Return an array of all the numbers lower than this argument that are even.
// Call it numberEvenBelow.

const numberEvenBelow = (num) => {
    let result = []
    for (let i = num; i > 0; i--) {
        if (i % 2 == 0) {
            result.push(i)
        }
    }
    return result;
}

// console.log(numberEvenBelow(200))

// ****************************************************************************************************************//

// 12 Write a function with a single array of numbers argument.
//  Return an array of all the numbers in this array that are even.Call it evenIn.

const evenIn = (arr) => {
    return arr.filter(number => {
        return number % 2 === 0;
    })
};

// console.log(evenIn([1, 2, 3, 4, 5, 6, 7, 8, 9])); // 👉️ [2, 4, 6, 8]

// ****************************************************************************************************************//

// 13 Write a function with a single array of numbers argument. Return the result of multiplying all the numbers.
// Call it multiplyArray.
const multiplyArray = (arr) => {
    let value = arr.reduce((acc, currentvalue) => {
        return acc * currentvalue
    }, 1)
    return value
}
// console.log(multiplyArray([2,3,5,4]))

// ****************************************************************************************************************//

// 14 Write a function with a single array of numbers argument. Return the result of dividing the number from left to right. So the first number gets divided by the second and the result of that gets divided by the third (and so on..).
// Call it divideArray.

const divideArray = (arr) => {

    let value = arr[0]
    for (let i = 1; i < arr.length; i++) {
        value /= arr[i]
    }
    return value;

}

// console.log(divideArray([25, 5, 28]))

// ****************************************************************************************************************//

// 15 Write a function with two string arguments. Split both strings in halves and recombine the halves. 
// Return the longest results of the two combinations
// Call it splitCombine.

// ****************************************************************************************************************//

function strFirstHalf(string) {
    return string.slice(0, string.length / 2);
}

function strSecondHalf(string) {
    return string.slice(string.length / 2, string.length)
}

const splitCombine = (str, str1) => {

    // const firstStr = str.slice(0, str.length / 2);
    // const SecStr = str.slice(str.length / 2, str.length)

    // const firstStr1 = str1.slice(0, str1.length / 2);
    // const SecStr1 = str1.slice(str1.length / 2, str1.length)

    const firstStr = strFirstHalf(str)
    const SecStr = strSecondHalf(str)

    const firstStr1 = strFirstHalf(str1)
    const SecStr1 = strSecondHalf(str1)

    const newstring1 = firstStr + firstStr1;
    const newstring2 = SecStr + SecStr1;

    console.log(newstring1, newstring1.length)
    console.log(newstring2, newstring2.length)

    if (newstring1.length < newstring2.length) {
        return newstring2
    } else {
        return newstring1
    }

}

// console.log(splitCombine("cucumber", "radius"))

// ****************************************************************************************************************//

//16 Write a function with one {name: string}(object) argument. Return the name property.
// Call it getName

const getName = (stringObj) => {
    return stringObj.name;
}
// console.log(getName({name : "Pooja", lastName : "Dalai"}))

// ****************************************************************************************************************//

//17 Write a function with one [{name: string}](list of object) argument. Return an array with all the name properties.
// Call it getNames

const getNames = (arr) => {
    const babe = arr.map(element => {
        return element.name;
    })
    return babe
}
const names = [{ name: "Pooja", lastname: "Dalai" },
{ name: "Pooja", lastname: "Dalai" },
{ name: "Pooja", lastname: "Dalai" },
{ name: "Pooja", lastname: "Dalai" }]

// console.log(getNames(names))

// ****************************************************************************************************************//

// 18: combineName
// Write a function with one [{firstname: string, lastname: string}](list of object) argument. 
// Return an array with all the full names (both the first and the last name as a single string).
// Call it combineName

const combineName = (arr) => {

    return arr.map(fullname => {
        const { name, lastname } = fullname
        return `${name} ${lastname}`
    })
}

// console.log(combineName(names))

// ****************************************************************************************************************//

//19 Write a function with one [{country: string}](list of object) argument.
//  Return an array with every unique country value in the input array.
// Call it uniqueCountries
let countries = require('./countries.json');

let uniqueCountries = (countries) => {
    const result = [...new Set(countries.map(data => data.country))]
    return result
}
// console.log(uniqueCountries(countries))

// ****************************************************************************************************************//

//20 Write a function with one [{country: string}](list of object) argument.
//  Return an object with all the unique values as keys and the amount of occurences as value.
// Call it countCountries

const countCountries = (array) => {

    const result = array.reduce((accu, cv) => (
        accu[cv.country] = (accu[cv.country] || 0) + 1, accu),
        {})

    return result;

    // var result = array.reduce( (acc, o) => (acc[o.name] = (acc[o.name] || 0)+1, acc), {} );

}
// console.log(countCountries(countries))

// ****************************************************************************************************************//

// 21 Write a function with one [number] argument. Return the highest number.
// Call it highestNumber

const highestNumber = (number) => {
    return Math.max(...number);
}

// console.log(highestNumber([1, 5, 80]))

// ****************************************************************************************************************//

// 22: average
// Write a function with one [number] argument. Return the average.
// Call it average

const average = (number) => {

    const length = number.length;
    let sum = 0;
    for (let i = 0; i < number.length; i++) {
        sum += number[i]
    }
    return sum / length;
}

// console.log(average([11, 22, 33]))

// ****************************************************************************************************************//

//23 Write a function with one [number] argument. Return the mode (most frequent value).
// Call it mode
const mode = (num) => {

}
// console.log(mode([11, 22, 33]))

// ****************************************************************************************************************//

//24 Write a function with one string argument. Return the reversed string.
// Call it reverse
const reverse = (string) => {
    return string.split("").reverse().join("");
}

// console.log(reverse("Pooja"))

// ****************************************************************************************************************//

//25 Write a function with one string argument. Return true or false wether this string is a palindrome.
// A palindrome is a string that stays the same when you reverse it. Like 'Bob' or 'Racecar'.
// Call it palindrome

function palindrome(str) {
    //The split() method divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array. 
    let reversed = str.split("").reverse().join("")
    return str === reversed
}

// console.log(palindrome("racecar"))
