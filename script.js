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

// Page 38: Chessboard
let size = 12;
let string = '';
for (o = 0; o < size; o++) {
    for (i = 0; i < size; i++) {
        if (o % 2 == 0) {
            if (i % 2 == 0) {
                string += '#';
            } else {
                string += ' '
            }
        } else {
            if (i % 2 == 0) {
                string += ' ';
            } else {
                string += '#'
            }
        }
    }
    string += `\n`;
}
console.log(string);