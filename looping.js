/**LOOPING FOR
 * Loping for;
 * - nilai awal
 * - nilai akhir/kondisi akhir
 * - increment= ++ (menambah nilai variabel 1) / decrement= --
 *
 */

// increment
for (let i = 0; i < 10; i++) {
  console.log(`'Lopping ke-${i}`);
}

// decrement
for (let i = 10; i > 0; i--) {
  console.log(`'Lopping ke-${i}`);
}

// LOOPING WHILE
/**
 * Looping while :
 * mengulangi perintah selama kondisi terpenuhi
 * di cek dulu lalu dijalankan
 * contoh di bawah
 */

let nilai = 0;
while (nilai < 5) {
  console.log(nilai);
  nilai++;
}

// LOOPING DO WHILE
/**
 * Menjalankan kode selama kondisi terpenuhi
 * dijalankan dulu lalu dicek
 * contoh di bawah
 */
let input;
let password = "admin123";
do {
  input = prompt("Masukkan password");
} while (input != password);
