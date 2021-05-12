// * Fungsi penjumlahan dengan rest parameter
// function jumlah(...values) {
//   return values.reduce((a, b) => a + b);
// }
// console.log(jumlah(1, 2, 3, 4, 5));

// * Array destructuring
// const kelompok = ["erlangga", "dewa", "sakti"];
// const [ketua, ...anggota] = kelompok;
// console.log(ketua, anggota);

// * Object destructuring
// const mhs = {
//   ketua: "erlangga",
//   frontEnd: "dewa",
//   Ux: "sakti",
//   devOps: "todi",
// };

// const { ketua, ...anggota } = mhs;
// console.log(ketua, anggota);

// * Filtering function
// function filterBy(type, ...data) {
//   return data.filter((x) => typeof x === type);
// }
// console.log(filterBy("number", 1, 2, 3, "roti", true));
// console.log(filterBy("boolean", 1, 2, 3, "roti", true));
