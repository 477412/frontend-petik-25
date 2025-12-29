const { reject } = require("async");

// ==================================[ BELAJAR SYNCRONUS = MENJALANKAN FUNGSI SATU PERSATU]======================================
function rebusAir() {
  console.log("Rebus air");
}

function masakMie() {
  console.log("Masak mie");
}

function makanMie() {
  console.log("Makan mie");
}

// ==================================[ BELAJAR ASYNCRONUS = MENJALANKAN BEBERAPA FUNGSI SEKALIGUS ini yang digunakan]======================================
// MENGGUNAKAN setTimeout (Memberikan Waktu)
function rebusAir(callback) {
  setTimeout(() => {
    console.log("Rebus air");
    callback();
  }, 3000);
}

function masakMie(callback) {
  setTimeout(() => {
    console.log("Masak mie");
    callback();
  }, 2000);
}

function makanMie(callback) {
  setTimeout(() => {
    console.log("Makan mie");
    callback();
  }, 4000);
}

rebusAir(() => {
  masakMie(() => {
    makanMie(() => {
      console.log("Selesai");
    });
  });
});
//===================================[ BELAJAR PROMICE (mempresentasikan janji)]==============================
/**
 * Promice terdapat 3 status :
 * 1. Pending (tertunda)
 * 2. Fullfield/resolved (terpenuhi)
 * 3. Rejected (ditolak)
 */
function rebusAir() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Rebus air");
    }, 3000);
  });
}

function masakMie() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Masak mie");
    }, 3000);
  });
}

function makanMie() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Makan mie");
    }, 4000);
  });
}


// =========================================[ BELAJAR THEN CATCH METODE MEMANGGIL ]=================================
rebusAir()
.then((outRebus) => {
console.log(outRebus);
return masakMie()
})
.then((outMasak) => {
console.log(outMasak);
return makanMie()
})
.then((outMakan) => {
console.log(outMakan);
})
.catch((error) => {
    console.error(`Gagal ${error}`)
});

// =========================================[ BELAJAR ASYNC AWAIT METODE MEMANGGIL ]================================
async function buatMie() {
  try {
    const outRebus = await rebusAir();
    console.log(outRebus);

    const outMasak = await masakMie();
    console.log(outMasak);

    const outMakan = await makanMie();
    console.log(outMakan);
  } catch (error) {
    console.error(`Gagal: ${error}`);
  }
}
buatMie();
