// // Page 3

// let x = 10;
// let y = 0;

// for (let i = 0; i < 10; i++) {
//     y = y + x;
//     x--;
// }

// console.log(y);

// // Book solution on page 5

// let total = 0, count = 1;
// while (count <= 10) {
//     total += count;
//     count++;
// }
// console.log(total);

// // Page 16

// console.log("!" < "?");

// // Page 17
// console.log(1 == 2 ? false : 2);

// // // Page 30
// let myName;
// do {
//     myName = prompt("Name?");
// } while (!myName);

// // Page 38
// for (let i = '#'; i.length < 7; i += '#') {
//     console.log(i);
// }

// // Page 38: FizzBuzz
// for (let i = 0; i <= 100; i++) {
//     if ( i % 3 == 0 && i % 5 == 0 ) {
//         console.log('FizzBuzz');
//     } else if (i % 3 == 0) {
//         console.log('Fizz');
//     } else if (i % 5 == 0) {
//         console.log('Buzz');
//     } else {
//         console.log(i);
//     }
// }

// // Page 38: Chessboard
// let size = 12;
// let string = '';
// for (o = 0; o < size; o++) {
//     for (i = 0; i < size; i++) {
//         if (o % 2 == 0) {
//             if (i % 2 == 0) {
//                 string += '#';
//             } else {
//                 string += ' '
//             }
//         } else {
//             if (i % 2 == 0) {
//                 string += ' ';
//             } else {
//                 string += '#'
//             }
//         }
//     }
//     string += `\n`;
// }
// console.log(string);

// // Page 44
// const chicken = () => {
//     return egg();
// }

// const egg = () => {
//     return chicken();
// }

// console.log(chicken());

// // Page 45
// const roundTo = (a, b = 1) => {
//     let remainder = a % b;
//     return a - remainder + (remainder < b / 2 ? 0 : b); 
// }
// console.log(roundTo(4.5));
// console.log(roundTo(4.5,2));

// // null and undefined both indicate a lack of meaningful value. However, they are still different types.
// if (null == undefined) {
//     console.log("hello");
// }

// // Will return the left value if it evaluates to true, otherwise the right value
// console.log(false || NaN);

// // Will return the left value if it evaluates to false, otherwise the right value
// console.log(false && NaN);

function multiplier(factor) {
    // The below function is a closure (factor is the local parameter. In this example's case: 2)
    return number => number * factor;
}
// The below statement creates an environment in which there is a function where factor is equal to 2.
let twice = multiplier(2);
// The below statement passes in the argument of 5 to twice, which is grasping a function where the parameter is multiplied by 2.
console.log(twice(5));

