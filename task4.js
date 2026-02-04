let count = 0;
let student = {
  name: "Ariana Grande",
  age: 21,
  city: "Gaibandha",
  isStudent: true,
};

for (const prop in student) {
  count++;
}

console.log("Total Properties:", count);
