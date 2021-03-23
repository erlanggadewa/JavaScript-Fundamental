// //  * Closure karena console.log(nama) mengakeses variabel nama yang ada di lexical scope
// // function test() {
// //   let nama = "erlangga";
// //   init();
// //   function init() {
// //     function tampilNama() {
// //       console.log(nama);
// //     }
// //     tampilNama();
// //     console.dir(tampilNama); // ! bisa dilihat di object scopes
// //   }
// // }
// // test();

// // * Contoh function factory
// // function test() {
// //   return init;
// //   function init(nama) {
// //     function tampilNama() {
// //       console.log(nama);
// //     }
// //     tampilNama();
// //     console.dir(tampilNama); // ! bisa dilihat di object scopes
// //   }
// // }
// // let a = test();
// // a("erlangga");

// // * Contoh private method
function salam(waktu) {
  return function (nama) {
    console.log(`Halo ${nama}, selamat ${waktu} ....`);
  };
}
let salamPagi = salam("pagi");
let salamSiang = salam("siang");
let salamMalam = salam("malam");

salamPagi("erlangga");
// console.log(this.salamPagi("nada"));
