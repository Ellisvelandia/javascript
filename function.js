// // // // // // // //functions are portions of code that we are going to store to be used at any time we want through an invocation.

// // // // // // // function greeting() {
// // // // // // //   document.write("<h1>Iam Title</h1>")
// // // // // // // }

// // // // // // // greeting()

// // // // // // // first class performance

// // // // // // let greetings = "Hello, how are you";
// // // // // // let name = "ellis";

// // // // // // function greeting(greeting1, greeting2) {
// // // // // //   document.write(`${greeting1} ${greeting2}`);
// // // // // // }

// // // // // // greeting(greetings, name);

// // // // // // function Object
// // // // // let greeting = new Function("return 'Hello' ");

// // // // // document.write(greeting());

// // // // // declared function
// // // // function sum(num1, num2) {
// // // //   return num1 + num2;
// // // // }

// // // // document.write(sum(23, 6));

// // // (function () {
// // //   return document.write("this function self-initiated");
// // // })();

// // // function sum(num1, num2) {
// // //   return num1 + num2;
// // // }

// // // document.write(sum(8, 5));

// // function a(callback) {
// //   return callback();
// // }

// // function b() {
// //   return document.write("function B ");
// // }

// // a(b());

// let sum = () => {
//   return document.write("this is a arrow function");
// };
// sum();
