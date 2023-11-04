// 1. Declare an empty array using JS literal notation to store
// student names in future.
let names = ["Sana", "Aleena", "Adeel", "Horrain"];
let arr = [];

for (let i = 0; i < names.length; i++) {
  arr.push(names[i]);
  console.log(arr);
}

// 2. Declare an empty array using JS object notation to store
// student names in future.
// let names =["Sana" , "Aleena" ,"Adeel" ,"Horrain"]
// let arr = []

// for (let i=0; i<names.length; i++){
//     arr.push(names[i])
//     console.log(arr)
// }

// 3. Declare and initialize a strings array.

let str = ["ab", "cd", "ef", "gh"];
console.log(str);

// 4. Declare and initialize a numbers array.
let num = [1, 2, 3, 4, 5, 6];
console.log(num);

// 5. Declare and initialize a boolean array.
let bool = [true, false];
console.log(bool);

// 6. Declare and initialize a mixed array.
let mixedArr = ["ab", "cd", "ef", "gh", 3, 8, 6, 4, true];
console.log(mixedArr);

// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:

let degreeArr = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "PhD."];
console.log(degreeArr);

// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:


let studentsNames = ["ALI" , "Rehman" , "Tahor"]
let marks = [445 , 450 , 330]
let totalMarks = 500
let studentPercentages = [];
for(let i =0; i<marks.length; i++){
  let percentage =( marks[i] /500)*100
  studentPercentages.push(percentage)
  console.log(percentage)
  
}
// 9. Initialize an array with color names. Display the array
// elements in your browser.
// let ColorName = [ "red" ,"blue" ,"green" , "black" ,"brown"];
// console.log(ColorName)

// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
let ColorNameS = ["red", "blue", "green", "black", "brown"];
let addColor = ColorNameS.unshift("purple");
console.log(ColorNameS);
console.log(addColor);

// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.

// let ColorName = [ "red" ,"blue" ,"green" , "black" ,"brown"];
// let addColors = ColorNameS.push("purple")
// console.log(ColorNameS)
// console.log(addColors)

// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.

// let ColorNames = [ "red" ,"blue" ,"green" , "black" ,"brown"];
// let moreColors = ColorNames.unshift("purple" , "brown" , "gray")
// console.log(ColorNames)
// console.log(moreColors)

// d. Delete the first color in the array. Display the updated
// array in your browser.
// let ColorNames = ["red", "blue", "green", "black", "brown"];
// let deletColors = ColorNames.shift();
// console.log(ColorNames);
// console.log(deletColors);

// e. Delete the last color in the array. Display the updated
// array in your browser.
let ColorNames = ["red", "blue", "green", "black", "brown"];
let lastColors = ColorNames.pop();
console.log(ColorNames);
console.log(lastColors);

// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.

// let color = prompt("enter your color")

// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.


// 10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.

let sortNum = [320 , 230 , 480 , 120]
console.log(sortNum)
let numOrder = sortNum.sort()
console.log(numOrder)


// 11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.

let cities = ["karachi" , "lahore" , "Islamabad"  , "quetta" , "peshawer"]
let SlectedCity = cities.slice(2 , 4)
console.log(SlectedCity)
// 12. Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)
var arrStr = ['This ', 'is', 'my', 'cat'];
let JionArr= arrStr.join(" ")
console.log(JionArr)

// 13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)
let deviesName = ["keyboard" , "mouse" , "printer"]

deviesName.push("monitor")
console.log(deviesName)

// 14. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last In-
// First Out)

let devies = ["keyboard" , "mouse" , "printer"]

devies.unshift("monitor")
console.log(devies)

// 15. Write a program to store phone manufacturers (Apple,
//     Samsung, Motorola, Nokia, Sony & Haier) in an array.
//     Display the following dropdown/select menu in your
//     browser using document.write() method:

let phoneNames = ["Apple" , " Samsung" , "Motorola" , "Nokia" ," Sony & Haier"]

 manufacturers =()=>{
   document.write('<label>names: <label/>')
   document.write('<select id="">')

    for (let i = 0; i<phoneNames.length ; i++){
        document.write('<option value ="'+ phoneNames[i] +'">' +phoneNames[i] +'<option/>' )
    }
    document.write('<select/>')
}

manufacturers()
