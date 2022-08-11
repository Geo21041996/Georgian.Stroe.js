
//1.1.ES6-Metode.Care sunt si ce presupune fiecare

//Math.trunc() Method
//Math.trunc(x) returns the integer part of x:
Math.trunc(4.9);    // returns 4
Math.trunc(4.7);    // returns 4
Math.trunc(4.4);    // returns 4
Math.trunc(4.2);    // returns 4
Math.trunc(-4.2);    // returns -4

//The Math.sign() Method
//Math.sign(x) returns if x is negative, null or positive:
Math.sign(-4);    // returns -1
Math.sign(0);    // returns 0
Math.sign(4);    // returns 1

//The Math.cbrt() Method
//Math.cbrt(x) returns the cube root of x:
Math.cbrt(8);    // returns 2
Math.cbrt(64);    // returns 4
Math.cbrt(125);    // returns 5

//The Math.log2() Method
//Math.log2(x) returns the base 2 logarithm of x:
Math.log2(2);    // returns 1

//The Math.log10() Method
//Math.log10(x) returns the base 10 logarithm of x:
Math.log10(10);    // returns 1


//1.2 Diferenta dintre var, let, const
//Var variable
//Scope of var
var windows = "Good morning!"

function newFunction() {
    var pc = "Good night!";
}
console.log(pc); // error:pc is not defined
//windows is globally scoped because it exists outside a function while pc is function scoped. So we cannot access the variable pc outside of a function.

var pc = "Ciao";
var pc ="Am ajuns acasa";
console.log(pc);

//var variables can be re-declared and updated
var pc = "Ciao";
pc = "Am ajuns acasa"//var variables can be re-declared and updated

//Hoisting of var
console.log(pc);
var pc = "Ciao";//Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.This means that var variables are hoisted to the top of their scope and initialized with a value of undefined.

//Problem with var
var ciao = "Unde esti acum?";
var value = 4;

if(value >3) {
    var ciao = "Esti bine?";
}
console.log(ciao);//The problem is that ciao is redefined

//let
//let is blocked scoped

let ciao ="Unde ai ajuns?";
let value = 4;

if(value > 3) {
    let salut = "Inca esti acasa?";
    console.log(salut);
}
console.log(salut); //We see that using salut outside its block (the curly braces where it was defined) returns an error. This is because let variables are block scoped .

//let can be updated but not re-delared

let salut = "Ce faci?"
salut = "Ce faci, Ioana?"//Just like var,  a variable declared with let can be updated within its scope. Unlike var, a let variable cannot be re-declared within its scope.

let salut = "Ce faci?";
let salut ="Ce faci, Ioana?"//error:salut has already been declared

//An other case

let salut ="Ce faci?";
if(true){
    let salut = "Ce faci, Ioana?";
    console.log(salut); //"Ce faci, Ioana?"
}
console.log(salut); //"Ce faci?"
//This is not error, because both instances are treated as different variables since they have different scopes.This fact makes let a better choice than var. When using let, you don't have to bother if you have used a name for a variable before as a variable exists only within its scope.
//Also, since a variable cannot be declared more than once within a scope, then the problem discussed earlier that occurs with var does not happen.

//Hoisting of let
//Just like  var, let declarations are hoisted to the top. Unlike var which is initialized as undefined, the let keyword is not initialized. So if you try to use a let variable before declaration, you'll get a Reference Error.

//Const
//const declarations are block scoped
//Like let declarations, const declarations can only be accessed within the block they were declared.
//const cannot be updated or re-declared
//his means that the value of a variable declared with const remains the same within its scope. It cannot be updated or re-declared. So if we declare a variable with const, we can neither do this:
const salut = "Ce faci?";
salut = "Ce faci, Ioana?"//error

const salut = "Ce faci?";
const salut = "Ce faci, Ioana?"//error
//Every const declaration, therefore, must be initialized at the time of declaration.
//This behavior is somehow different when it comes to objects declared with const. While a const object cannot be updated, the properties of this objects can be updated.
//Therefore, if we declare a const object as this:

const salut = {
    letter: "Hei!",
    value: 4
}
console.log(salut);

//while we cannot do this:

salut = {
    words: "Hello",
    number: "six"
}
console.log(salut); //Error

 //Instead this can be done

 const salut = {
    letter: "Tu esti in poza?",
    value: 4
 }
salut.letter ="Unde ai ajuns?"
console.log(salut);//This will update the value of salut.letter without returning errors.

//1.3 Spread Operator
//Concat method
//The concat method is used to merge two or more arrays.In case of arrays, this method does not change the existing arrays but instead returns a new arrays.
let me1 = [1,2,3];
let me2 = [4,5,6,7];

me1 = me1.concat(me2);

console.log(me1); // [1, 2, 3, 4, 5, 6, 7]

//We can achieve the same output with the help of the spread operator, the code will look something like this:
let me1 = [1,2,3];
let me2 = [4,5,6,7];

me1 = [...me1,... m /// [1, 2, 3, 4, 5, 6, 7]

//Copy(like splice method)
// copying without the spread operator
//we can copy the contents of one array to another
 let me1 = ['a','b','c'];
 let me2 = me1;
 
 console.log(me2); //['a', 'b', 'c']

 //changed the original array
 let me1 = ['a','b','c'];
 let me2 = me1;

 me2.push('d');

 console.log(me2);
 console.log(me1);
 //['a', 'b', 'c' ,'d' ]
 //['a', 'b', 'c' ,'d' ]
 //In the above code we can clearly see that when we tried to insert an element inside the array, the original array is also altered which we didn’t intended and is not recommended.
 
 //We can make use of the spread operator in this case, like this:
 let me1 = ['a', 'b', 'c'];
 let me2 = [...me1];

 console.log(me1); //['a', 'b', 'c', 'd' ]
 
 let me2.push('d'); //inserting an element at the end of me2

 console.log(me2); //['a', 'b', 'c', 'd' ]
 console.log(me1); //['a', 'b', 'c' ];
 //By using the spread operator we made sure that the original array is not affected whenever we alter the new array.
 
 //Expand
 //Whenever we want to expand an array into another we do something like this:
//normally used expand method
let me1 = ['a','b'];
let me2 = [me1,'c','d'];

console.log(me2); // [['a', 'b'], 'c', 'd' ]//[Array(2), "c", "d"]
//Even though we get the content on one array inside the other one, but actually it is array inside another array which is definitely what we didn’t want.
//If we want the content to be inside a single array we can make use of the spread operator.
//expand using spread operator
let me1 = ['a','b'];
let me2 = [...me1,'c','d'];

console.log(me2); // ['a', 'b', 'c', 'd' ]

//Math
//The Math object in javascript has different properties that we can make use of to do what we want like finding the minimum from a list of numbers, finding maximum etc. 
//Consider the case that we want to find the maximum from a list of numbers,we will write something like this:
console.log(Math.max(1,2,3,-6)); //3
//Now consider that we have an array instead of a list, this above Math object method won’t work and will return NaN, like:
let me1 = [1,2,3,-6];
console.log(Math.min(me1));//NaN
 //When …me1 is used in the function call, it “expands” an iterable object me1 into the list of arguments
//In order to avoid this NaN output, we make use of spread operator, like:
let me1 = [1,2,3,-6];

console.log(Math.min(...me1)); //-1

//1.4 Obiecte.Cum se itereaza un obiect

const user = {

    name : 'Stroe Georgian',

    email: 'stroegeorgian96@yahoo.com',
    
    age: 26,

    dob: '21/04/1996',
    
    active: true
};

//iterate over the user object

for(const key is user) {
    console.log('${key}: ${user[key]}');
}

// name: Stroe Georgian
// email: stroegeorgian96@yahoo.com
// age: 26
// dob: 21/04/1996
// active: true

//The problem with for...in loop is that it iterates through the properties in the prototype chain as well. Since the objects in JavaScript can inherit properties from their prototypes, the fo...in statement will loop through those properties as well.
//To avoid iterating over prototype properties while looping an object, you need to explicitly check if the property belongs to the object by using the 'hasOwnPropert()' method:

for (const key in user) {
    if (user.hasOwnProperty(key)) {
        console.log('${key}: ${user[key]}');
    }
}

//Object.keys() Method
//The Object.keys() method was introduced in ES6. It takes the object that you want to iterate over as an argument and returns an array containing all properties names (or keys).
//You can then use any of the array looping methods, such as forEach(), to iterate through the array and retrieve the value of each property.

const courses = {
    java: 10,
    javascript: 55,
    nodejs: 5,
    php: 15
};

// convert object to key's array
const keys = Object.keys(courses);

// print all keys
console.log(keys);
// [ 'java', 'javascript', 'nodejs', 'php' ]

// iterate over object
keys.forEach((key, index) => {
    console.log(`${key}: ${courses[key]}`);
});

// java: 10
// javascript: 55
// nodejs: 5
// php: 15

// Object.values() Method
// The Object.values() method was introduced in ES8 and it does the opposite of Object.key(). It returns the values of all properties in the object as an array. You can then loop through the values array by using any of the array looping methods.

const animals = {
    tiger: '🐅',
    cat: '🐱',
    monkey: '🐒',
    elephant: '🐘'
};

// iterate over object values
Object.values(animals).forEach(val => console.log(val));

// 🐅
// 🐱
// 🐒
// 🐘

//Object.entries() Method
//The Object.entries() is another method that was introduced in ES8 and can be used for traversing an object. Unlike Object.values() that creates an array of the values in the object, Object.entries() produces an array of arrays. Each inner array has two elements. The first element is the property; the second element is the value.

const animals = {
    tiger: '🐅',
    cat: '🐱',
    monkey: '🐒',
    elephant: '🐘'
};

const entries = Object.entries(animals);
console.log(entries);

// [ [ 'tiger', '🐅' ],
//   [ 'cat', '🐱' ],
//   [ 'monkey', '🐒' ],
//   [ 'elephant', '🐘' ] ]

//To iterate over the array returned by Object.entries(), you can either use the for...of loop or the forEach() method as shown below:

/ `for...of` loop
for (const [key, value] of Object.entries(animals)) {
    console.log(`${key}: ${value}`);
}

// `forEach()` method
Object.entries(animals).forEach(([key, value]) => {
    console.log(`${key}: ${value}`)
});

//1.5.Arrays - accesor, iteration, mutator methods(care sunt, cum se folosesc).
//Accesor     

//concat()
//The concat() method merges two or more arrays together to form a new array.
// Create arrays of names and ages
 let names1 = ["John", "Alin",];
 let names2 = ["Cosmin", "George", "Iulian"];

 // Concatenate them toghether into category variable
 let names = names1.concat(names2);
 console.log(names); //['John', 'Alin', 'Cosmin', 'George', 'Iulian']

//join()
//The join() method converts all the elements of an array into a new string.
let food = ['Meat', 'Milk', 'Eggs'];
//Join the elements of an array into a string
let foodString = food.join();
foodString;
console.log(foodString); // 'Meat,Milk,Eggs'
//In order to include whitespace or another separator, you can add a string of your separator as a parameter to the join() method. This parameter will contain the separator you would like between each array element.
let foodString = food.join(', ');
foodString;
console.log(foodString); //'Meat, Milk, Eggs'

//slice()
//The slice() method copies a portion of an array to a new array.
let food = ['Meat', 'Milk', 'Eggs', 'Potatoes'];
// Slice a new array from 2 to 5
let foodWithShortNames = food.slice(2, 4);
foodWithShortNames;
console.log(foodWithShortNames); //['Eggs', 'Potatoes']
// Slice a new array from 2 to the end of array
let foodWithShortNames = food.slice(2)
foodWithShortNames;
console.log(foodWithShortNames); //['Eggs', 'Potatoes']

//indexOf()

let food = ["Meat", "Milk", "Eggs", "Potatoes"];
// Find the first instance of an element
food.indexOf("Eggs"); //2
//If the given argument is a value that does not exist in the array, the console will return -1.
food.indexOf("Oats"); //-1

//lastIndexOf()
//The lastIndexOf() method returns the index number of the last instance of an element.
let food = ["Meat", "Milk", "Eggs", "Potatoes"];
//Find the last instance of an element
food.lastIndexOf("Potatoes"); //3
//lastIndexOf() will search the array starting from the end and return the first index number it finds.

//Iteration

//forEach()
//The forEach() method calls a function (a callback function) once for each array element.
const numbers = [50, 1, 10, 15, 30];
let txt = "";
numbers.forEach(myFunction);

function myFunction(value, index, array) {
  txt += value + "<br>";
} 
//50
//1
//10
//15
//30

//map()
//The map() method creates a new array by performing a function on each array element
//The map() method does not execute the function for array elements without values.
//The map() method does not change the original array.
const numbers1 = [1, 2, 7, 9, 15];
const numbers2 = numbers1.map(myFunction);

function myFunction(value, index, array) {
    return value * 2;
} //1, 4, 14, 18, 30
//When a callback function uses only the value parameter, the index and array parameters can be omitted
const numbers1 = [1, 2, 7, 9, 15];
const numbers2 = numbers1.map(myFunction);

function myFunction(value) {
    return value * 2;
} //1, 4, 14, 18, 30

//filter()
//The filter() method creates a new array with array elements that passes a test.
const numbers = [1, 2, 7, 9, 15];
const over18 = numbers.filter(myFunction);

function myFunction(value, index, array) {
  return value > 7;
} //9, 15
//the callback function does not use the index and array parameters, so they can be omitted
const numbers = [1, 2, 7, 9, 15];
const over18 = numbers.filter(myFunction);

function myFunction(value) {
  return value > 7;
}  //9, 15

//reduce()
//The reduce() method runs a function on each array element to produce (reduce it to) a single value.
//The reduce() method works from left-to-right in the array. See also reduceRight().
//The reduce() method does not reduce the original array.
//This example finds the sum of all numbers in an array:
const numbers = [1, 2, 7, 9, 15];
let sum = numbers.reduce(myFunction);

function myFunction(total, value, index, array) {
  return total + value;
} //34
//The example above does not use the index and array parameters. It can be rewritten to
const numbers = [1, 2, 7, 9, 15];
let sum = numbers.reduce(myFunction);

function myFunction(total, value) {
  return total + value;
}
//The reduce() method can accept an initial value:
const numbers = [1, 2, 7, 9, 15];
let sum = numbers.reduce(myFunction, 100);

function myFunction(total, value) {
  return total + value;
} //134

//reduceRight()
//The reduceRight() method runs a function on each array element to produce (reduce it to) a single value.
//The reduceRight() works from right-to-left in the array. See also reduce()
//The reduceRight() method does not reduce the original array.
const numbers = [1, 2, 7, 9, 15];
let sum = numbers.reduceRight(myFunction);

function myFunction(total, value, index, array) {
  return total + value;
} //34
//The example above does not use the index and array parameters. It can be rewritten to
const numbers = [1, 2, 7, 9, 15];
let sum = numbers.reduceRight(myFunction);

function myFunction(total, value) {
  return total + value;
} //34

//every()
//The every() method check if all array values pass a test.
//This example check if all array values are larger than 7
const numbers = [1, 2, 7, 9, 15];
let allOver7 = numbers.every(myFunction);

function myFunction(value, index, array) {
  return value > 7;
} //All over 7 is false
//When a callback function uses the first parameter only (value), the other parameters can be omitted
const numbers = [1, 2, 7, 9, 15];
let allOver7 = numbers.every(myFunction);

function myFunction(value) {
  return value > 7;
} //All over 7 is false

//some()
//The some() method check if some array values pass a test.
//This example check if some array values are larger than 7
const numbers = [1, 2, 7, 9, 15];
let someOver18 = numbers.some(myFunction);

function myFunction(value, index, array) {
  return value > 7;
} //Some over 7 is true

//find()
//The find() method returns the value of the first array element that passes a test function.
//This example finds (returns the value of) the first element that is larger than 7
const numbers = [1, 2, 7, 9, 15];
let first = numbers.find(myFunction);

function myFunction(value, index, array) {
  return value > 7;
} //9

//findIndex()
const numbers = [1, 2, 7, 9, 15];
let first = numbers.findIndex(myFunction);

function myFunction(value, index, array) {
  return value > 7;
} //3

//from()
//The Array.from() method returns an Array object from any object with a length property or any iterable object.
Array.from("ABCDEFG"); //A,B,C,D,E,F,G

//keys()
//The Array.keys() method returns an Array Iterator object with the keys of an array.
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruits.keys();

for (let x of keys) {
  text += x + "<br>";
}
//0
//1
//2
//3

//entries()
//The entries() method returns an Array Iterator object with key/value pairs
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const f = fruits.entries();

for (let x of f) {
  document.getElementById("demo").innerHTML += x;
} 
//[0, "Banana"]
//[1, "Orange"]
//[2, "Apple"]
//[3, "Mango"]
//The entries() method does not change the original array.

//includes()
//This allows us to check if an element is present in an array (including NaN, unlike indexOf).
const fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.includes("Mango"); // is true

//Mutator Methods

//isArray()
//The isArray() method to test whether objects are arrays. This is a Boolean method that returns true if the value of a variable is equal to an array. If the object is not an array, this method returns false.
let food = ["Meat", "Milk", "Potatoes", "Eggs"];
//Test if food variable is an array
Array.isArray(food); //true

//pop()
//The pop() method, removes the last element from the end of an array.
let food = ["Meat", "Milk", "Potatoes", "Eggs"];
//Use pop method to remove an item from the end of an array
food.pop();
food; //["Meat", "Milk", "Potatoes"]

//shift
//Another mutator method, the shift() method removes the first element from the beginning of an array.
let food = ["Meat", "Milk", "Potatoes", "Eggs"];
food.shift();
food; //["Milk", "Potatoes", "Eggs"]

//push()
//The push() mutator method adds a new element or elements to the end of an array.
let food = ["Meat", "Milk", "Potatoes", "Eggs"];
food.push("Oats");
food; //["Meat", "Milk", "Potatoes", "Eggs", "Oats"]
//It is also possible to add multiple new values to the array. For example, fish.push("Oats", "Kiwi") would have added items to index 4 and 5.

//unshift()
//The unshift() mutator array method adds a new element or elements to the beginning of an array.
let food = ["Meat", "Milk", "Potatoes", "Eggs"];
food.unshift("Oats");
food; //"Oats", "Meat", "Milk", "Potatoes", "Eggs"]

//splice()
//The splice() method can add or remove an item from any position in an array. A mutator method, splice() can either add or remove, or add and remove simultaneously.
//adding
let food = ["Meat", "Milk", "Potatoes", "Eggs"];
// Splice a new item number into index position 1
//splice(index number, number of items to remove, items to add)
food.splice(1, 0, "Kiwi");
food; //[ 'Meat', 'Kiwi','Milk', 'Potatoes', 'Eggs' ]

//removing
let food = ["Meat", "Milk", "Potatoes", "Eggs"];
// Remove two items, starting at index position 1
food.splice(1, 2);

food; //['Meat', 'Eggs']
//We deleted two items from the array, starting with index 1, "barracuda". If the second argument is removed, all items to the end of the array will be removed.

//Adding and Removing
let food = ["Meat", "Milk", "Potatoes", "Eggs"];

//Remove two items and add one
food.splice(1, 2, "Kiwi");

food; //['Meat', 'Kiwi', 'Eggs']

//reverse()
//The reverse() method reverses the order of the elements in an array.
let food = ["Meat", "Milk", "Potatoes", "Eggs"];
//Using reverse(), the last element will be first, and the first element will be last.
// Reverse the food array
food.reverse();

food; //['Eggs', 'Potatoes', 'Milk', 'Meat']

//fill()
//The fill() method replaces all the elements in an array with a static value.
let food = ["Meat", "Milk", "Potatoes", "Eggs"];
// Replace all values in the array with "Kiwi"
food.fill("Kiwi");

food; //['Kiwi', 'Kiwi', 'Kiwi', 'Kiwi' ]
//Using fill() we can replace one or more elements in an array with a static value
food.fill("Kiwi", 1) // ['Meat', 'Kiwi', 'Kiwi', 'Kiwi']
food.fill("Kiwi", 1, 3); //['Meat', 'Kiwi', 'Kiwi', 'Eggs']

//sort()
//The sort() method sorts the elements in an array based on the first character in the element. In the case that the first character is identical, it will continue down the line and compare the second character, and so on.
//By default, sort() will alphabetize an array of strings that are all either uppercase or lowercase.

let food = ["Meat", "Milk", "Potatoes", "Eggs"];
// Sort items in array
food.sort();

food; //['Eggs', 'Meat', 'Milk', 'Potatoes' ]
//Since sort() is based on the first unicode character, it will sort uppercase items before lowercase.
//Let’s modify our original array so that one of our strings begin with an uppercase letter.

let food = ["Meat", "Milk", "potatoes", "eggs"];
 food.sort();

 food; // [ 'Meat', 'Milk', 'eggs', 'potatoes' ]
 //Numbers come before both uppercase and lowercase characters.
 //We can again modify the array to include a number in one of the string items

 let food = ["Meat", "Milk", "potatoes", "1 eggs"];

 food.sort(); //['1 eggs', 'Meat', 'Milk', 'potatoes']

 //1.6 Promise.Callback
//Promise
//The Promise object supports two properties: state and result.
//While a Promise object is "pending" (working), the result is undefined
//When a Promise object is "fulfilled", the result is a value.
//When a Promise object is "rejected", the result is an error object.

function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
  }
  
  let myPromise = new Promise(function(myResolve, myReject) {
    let x = 0;
  
  // The producing code (this may take some time)
  
    if (x == 0) {
      myResolve("OK");
    } else {
      myReject("Error");
    }
  });
  
  myPromise.then(
    function(value) {myDisplayer(value);},
    function(error) {myDisplayer(error);}
  ); //Ok

//Waiting for a Timeout
//Callback
setTimeout(function() { myFunction("I love You !!!"); }, 3000);

function myFunction(value) {
  document.getElementById("demo").innerHTML = value;
} //I love you !!!

//Promise
let myPromise = new Promise(function(myResolve, myReject) {
    setTimeout(function() { myResolve("I love You !!"); }, 3000);
  });
  
  myPromise.then(function(value) {
    document.getElementById("demo").innerHTML = value;
  }); //I love you!!
//In conclusion with this function we add a time for display a text message

//Waiting for a file
//Callback
function getFile(myCallback) {
    let req = new XMLHttpRequest();
    req.open('GET', "mycar.html");
    req.onload = function() {
      if (req.status == 200) {
        myCallback(req.responseText);
      } else {
        myCallback("Error: " + req.status);
      }
    }
    req.send();
  }
  
  getFile(myDisplayer);

  //Promise
  let myPromise = new Promise(function(myResolve, myReject) {
    let req = new XMLHttpRequest();
    req.open('GET', "mycar.htm");
    req.onload = function() {
      if (req.status == 200) {
        myResolve(req.response);
      } else {
        myReject("File not Found");
      }
    };
    req.send();
  });
  
  myPromise.then(
    function(value) {myDisplayer(value);},
    function(error) {myDisplayer(error);}
  );
  

  //1.7 Async.Await

  //Async
  async function myFunction() {
    return "Salut";
  }
  myFunction().then(
    function(value) {myDisplayer(value);},
    function(error) {myDisplayer(error);}
  ); //Salut

async function myFunction() {
  return "Salut";
}
myFunction().then(
  function(value) {myDisplayer(value);}
); //Salut

//Await Syntax
//Example without reject
async function myDisplay() {
    let myPromise = new Promise(function(resolve, reject) {
      resolve("I love You !!");
    });
    document.getElementById("demo").innerHTML = await myPromise;
  }
  
  myDisplay(); //I love you!!
  //Waiting for a Timeout
  async function myDisplay() {
    let myPromise = new Promise(function(resolve) {
      setTimeout(function() {resolve("I love You !!");}, 3000);
    });
    document.getElementById("demo").innerHTML = await myPromise;
  }
  
  myDisplay();//I love you !!

  //Waiting for a file
  async function getFile() {
    let myPromise = new Promise(function(resolve) {
      let req = new XMLHttpRequest();
      req.open('GET', "mycar.html");
      req.onload = function() {
        if (req.status == 200) {
          resolve(req.response);
        } else {
          resolve("File not Found");
        }
      };
      req.send();
    });
    document.getElementById("demo").innerHTML = await myPromise;
  }
  
  getFile(); 

  //1.8 Closures
  //Global Variables
  //A function can access all variables defined inside the function, like this
  //a is a local variable
  function myFunction() {
    let a = 6;
    return a * a;
  } //36
  //But a function can also access variables defined outside the function, like this
  //a is a global variable
  let a = 6;
function myFunction() {
  return a * a;
} //36
//Variables created without a declaration keyword (var, let, or const) are always global, even if they are created inside a function.
function myFunction() {
    a = 6;
  } //36

  //A Counter Dilemma
  // Initiate counter
let counter = 0;

// Function to increment counter
function add() {
  counter += 1;
}

// Call add() 3 times
add();
add();
add();

// The counter should now be 3
//The counter should be local to the add() function, to prevent other code from changing it:
// Initiate counter
let counter = 0;

// Function to increment counter
function add() {
  let counter = 0;
  counter += 1;
}

// Call add() 3 times
add();
add();
add();

//The counter should now be 3. But it is 0

//We can remove the global counter and access the local counter by letting the function return it
// Function to increment counter
function add() {
    let counter = 0;
    counter += 1;
    return counter;
  }
  
  // Call add() 3 times
  add();
  add();
  add();
  
  //The counter should now be 3. But it is 1.
  //Nested Functions
  function add() {
    let counter = 0;
    function plus() {counter += 1;}
    plus();   
    return counter;
  } //1

  //Closures
  const add = (function () {
    let counter = 0;
    return function () {counter += 1; return counter}
  })();
  
  add();
  add();
  add();
  
  // the counter is now 3
  