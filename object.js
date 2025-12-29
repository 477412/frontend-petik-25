/**
 * Membuat object bisa dengan :
 * 1. {}
 * 2. new Object()
 */

const user1 = {
  name: "ucup",
  age: 18,
  addres: "Depok",
};

const user2 = new Object();
user2.name = "udin";
user2.age = 17;
user2.addres = "Bogor";

for (const key in user1) {
  console.log(user1[key]);
}

console.log(user2.name);

