const car = {
  make: "Toyta",
  model: "Corolla",
  year: 2020,
};

car["passenger capacity"] = 5;

for (const element in car) {
  console.log(element + ": " + car[element]);
}
