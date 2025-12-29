/**BELAJAR ARRAY
 * Menbuaat variable arrray bisa dengan
 * 1. []
 * 2. Array()
 *
 */

const fruits = ["Apel", "Anggur", "Jeruk"];
const animals = Array("kucing ", "Singa", "Elang");

fruits.push("Mangga"); //Menambah dari belakang
animals.unshift("Kambing"); // Menambah dari depan

// Menampilakan
console.log(fruits[1]);
console.log(animals[2]);

// Menghapus
// fruits.shift();  Hapus dari depan
// animals.pop();  Hapus dari belakang

// Ambil SETIAP isi dari array fruits,lalu tampilkan satu per satu ke console.
fruits.forEach((fruit) => console.log(fruit));
animals.forEach((animal) => console.log(animal));

// Map
const fruitsUpper = fruits.map((fruit) => fruit.toUpperCase());
console.log(fruitsUpper);

// Filter
const longNameFruits = fruits.filter((fruit) => fruit.length > 5);
console.log(longNameFruits);

//
const combine = [...fruits, ...animals];

//
const foundItems = combine.find(
  (item) => item.toLowerCase() == "Apel".toLowerCase()
);
console.log(foundItems);

//
console.log(combine.includes("Singa"));
