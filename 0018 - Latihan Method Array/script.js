//  * Higher order Function -> merupakan function yang beroperasi pada function lain, baik itu yang digunakan dalam argumen maupun sebagai return value

// function repeat(n, action) {
//   for (let i = 1; i <= n; i++) {
//     action(i);
//   }
// }
// repeat(5, console.log);
// repeat(5, alert);

// function ucapkanSalam(waktu) {
//   return function (nama) {
//     console.log(`Halo ${nama}, selamat ${waktu}`);
//   };
// }
// let selamatMalam = ucapkanSalam("malam");
// console.dir(selamatMalam("erlangga"));
