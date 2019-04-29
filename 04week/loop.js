'use strict';

const person = {
  firstName: "Jane",
  lastName: "Doe",
  birthDate: "Jan 5, 1925",
  gender: "female",
};

let text = "";
for (let x in person) {
  text += person[x];
  console.log(x);
}

// for (let i arr) {
//   console.log(i);
// }


