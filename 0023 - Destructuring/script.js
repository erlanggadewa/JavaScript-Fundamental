// * Destructuring array dan skipping nilai
// const nama = ["erlangga", "dewa", "sakti"];
// const [nama1, , nama3] = nama;
// console.log(nama1);

// * Swap Item
// let a = 1;
// let b = 2;
// [a, b] = [b, a];
// console.log(a + " " + b);

// * return value pada function
// function coba() {
//   return [1, 2];
// }
// const [a, b] = coba();
// console.log(a + " " + b);

// * rest parameter array
// const [a, ...values] = [1, 2, 3, 4, 5, 6];
// console.log(a, values);

// * Destructuring object dengan default value
// const mhs = {
//   nama: "erlangga",
//   kelas: 3,
// };
// const { nama: n, kelas: k, email: e = "email@gmail.com" } = mhs;
// console.log(n, k, e);

//  * Assignment tanpa deklarasi object
// ({ nama, kelas, alamat } = { nama: "erlangga", kelas: 3, alamat: "purworejo" });
// console.log(nama, kelas, alamat);

// * rest parameter Object
// const mhs = { nama: "erlangga", kelas: 03, alamat: "purworejo" };
// const { nama, ...values } = mhs;
// console.log(values);

// * Mengambil field pada object, setelah dikirim sebagai parameter pada object
// mhs = {
//   nama: "erlangga",
//   kelas: 3,
//   alamat: "purworejo",
// };
// function getNama({ nama }) {
//   return nama;
// }
// console.log(getNama(mhs));

// * Kasus kompleks
// mhs = {
//   nama: "erlangga",
//   kelas: 3,
//   alamat: "purworejo",
//   nilai: { uts: 90, uas: 100, tugas: 95 },
// };
// function cetakMhs({ nama, kelas, alamat, nilai: { uas, uts, tugas } }) {
//   return `Hallo nama saya ${nama}, kelas ${kelas}, tinggal di ${alamat}, nilai UAS : ${uas}, UTS : ${uts}, tugas : ${tugas}`;
// }
// console.log(cetakMhs(mhs));
