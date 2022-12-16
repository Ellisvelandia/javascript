// // // // //method parseInt = transforms to whole number
// // // // //method parsefloat = transforms to decimal number

// // // // let number1 = "10.92100";

// // // // let number2 = number1.toString(1)

// // // // // document.write(typeof number2);
// // // // document.write(number2);

// // // //isNaN
// // // //isInteger

// // // // let age = parseInt(prompt("what is your age?"));

// // // let age = "18";
// // // let age2 = Number.isInteger(age);

// // // document.write(age2);

// // // Methods string

// // // let a = "Hello world"
// // // document.write(a.length)

// // // let b = "hello ellis"
// // // document.write(a.indexOf("world"))

// // // let c = "Hello, how are you today, i hope you are well like me" + "<br>";

// // let a =
// //   "monday, tuesday, wednesday, thursday, thursday, friday, saturday, sunday";
// // // let b = a.split(", ");
// // // let d = "hope you are well like me";

// // // let e = c.match("are you");

// // // document.write(c.toUpperCase)
// // // document.write(c.substring(5, 10));
// // // document.write(c.charAt(15));
// // // document.write(c.endsWith("H"));
// // // document.write(c.includes("oda"));
// // // document.write(c.repeat(15));
// // // document.write(c.replace("how", "hows"));
// // // document.write(c.slice(8));
// // // document.write(b[0]);
// // document.write(a.trim());

// // methods Array
// let numbers = [1, 4, 5, 10, 15, 20, 55, 105, 200];
// // numbers.push()
// // numbers.unshift("ellis");
// // numbers.shift()
// // let numbers2 = numbers.join("-");
// // let numbers2 = numbers.filter(numbers => numbers > 6);
// // let numbers2 = numbers.find(numbers => numbers > 6);
// // let numbers2 = numbers.map((numbers) => numbers + 6);
// numbers.forEach((numbers) => {
//   return numbers + 5
// });

// document.write(numbers2);

let numbers = [1, 4, 6, 7, 44, 12, 14];

// let numbers = [1, 4, 6, 7, [44, 12, 14]];

// let numbers2 = numbers.some(numbers => numbers > 3)

// let numbers3 = numbers.sort((a, b) => a > b ? -1 : 1);

// let numbers4 = numbers.indexOf(4)

// let numbers5 = numbers.findIndex(numbers => numbers === 44)

// let numbers1 = numbers.reverse()

// let numbers1 = numbers.slice(2, 6);

// let numbers1 = numbers.splice(2, 5);

// let numbers1 = numbers.flat();

// let numbers1 = numbers.toString();

let numbers1 = numbers.reduce((add, value) => { return add + value });

document.write(numbers1)
