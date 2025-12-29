/**
 * Function adalah blok kedo yang bisa digunakan kembali
 * Untuk melakukan tugas tertentu
 * Macam-macam function
 * 1. Function declaration
 * 2. Function expression
 * 3. Arrow function
 */

// 1. Function  declaration
function sapa(nama) {
  console.log(`Halo ${nama}`);
}
sapa("Amar");

// 2. Function expression
const salam = function (nama) {
  console.log(`Assalamualaikum, ${nama}`);
};
salam("Farisah");

// 3. Function Arrow function
const ucap = (nama) => {
  console.log(`Selamat datang, ${nama}`);
};
ucap("Hisyam");
